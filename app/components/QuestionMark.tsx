"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const SpinningModel = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const isUserInteracting = useRef(false);
  const spinTimeout = useRef<NodeJS.Timeout | null>(null);
  const animationRef = useRef<number | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("CUBE MOUNTED");
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      70,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3;
    camera.position.y = 0;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const hemisphereLight = new THREE.HemisphereLight(0xdaa520, 0xffffff, 0.1);
    scene.add(hemisphereLight);
    const directionalLight = new THREE.DirectionalLight(0xffd700, 3);
    scene.add(directionalLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.07;
    controls.rotateSpeed = 0.3;
    controls.enableZoom = true;
    controls.enablePan = false;
    controls.maxDistance = 7;
    controlsRef.current = controls;

    const handleStart = () => {
      isUserInteracting.current = true;
      if (spinTimeout.current) clearTimeout(spinTimeout.current);
    };
    const handleEnd = () => {
      spinTimeout.current = setTimeout(() => {
        isUserInteracting.current = false;
      }, 0);
    };
    controls.addEventListener("start", handleStart);
    controls.addEventListener("end", handleEnd);

    // controls.addEventListener("start", () => {
    //   isUserInteracting.current = true;
    //   if (spinTimeout.current) clearTimeout(spinTimeout.current);
    // });
    // controls.addEventListener("end", () => {
    //   spinTimeout.current = setTimeout(() => {
    //     isUserInteracting.current = false;
    //   }, 100);
    // });

    const resizeRenderer = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", resizeRenderer);

    const loader = new GLTFLoader();
    loader.load("/models/question-mark.glb", (gltf) => {
      const model = gltf.scene;
      scene.add(model);
      modelRef.current = model;
      setIsLoading(false);
    });

    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      if (!isUserInteracting.current && modelRef.current) {
        modelRef.current.rotation.y += 0.005;
      }

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      if (spinTimeout.current) {
        clearTimeout(spinTimeout.current);
        spinTimeout.current = null;
      }
      window.removeEventListener("resize", resizeRenderer);
      if (controlsRef.current) {
        controlsRef.current.dispose();
        controlsRef.current.removeEventListener("start", handleStart);
        controlsRef.current.removeEventListener("end", handleEnd);
        controlsRef.current = null;
      }

      scene.traverse((object) => {
        if (!(object instanceof THREE.Mesh)) return;
        if (object.geometry) {
          object.geometry.dispose();
        }

        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => {
              material.dispose();

              for (const key in material) {
                if (
                  material[key] &&
                  typeof material[key].dispose === "function"
                ) {
                  material[key].dispose();
                }
              }
            });
          } else {
            object.material.dispose();

            for (const key in object.material) {
              if (
                object.material[key] &&
                typeof object.material[key].dispose === "function"
              ) {
                object.material[key].dispose();
              }
            }
          }
        }
      });

      if (rendererRef.current) {
        rendererRef.current.dispose();
        rendererRef.current.forceContextLoss();
        if (rendererRef.current.domElement.parentNode) {
          rendererRef.current.domElement.parentNode.removeChild(
            rendererRef.current.domElement
          );
        }
      }

      sceneRef.current = null;
      cameraRef.current = null;
      rendererRef.current = null;
      controlsRef.current = null;
      modelRef.current = null;
      mountRef.current = null;

      console.log("CUBE UNMOUNTED");
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-[400px] bg-transparent flex items-center justify-center rounded-lg shadow-lg relative"
      style={{ height: "400px" }}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-transparent rounded-lg">
          <div className="text-[#DAA520] text-lg font-semibold animate-pulse">
            Loading 3D Model...
          </div>
        </div>
      )}
    </div>
  );
};

export default SpinningModel;
