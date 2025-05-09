"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const SpinningModel = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const isUserInteracting = useRef(false);
  const spinTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      70,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3;
    camera.position.y = 0;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    const resizeRenderer = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", resizeRenderer);
    mount.appendChild(renderer.domElement);

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

    controls.addEventListener("start", () => {
      isUserInteracting.current = true;

      if (spinTimeout.current) clearTimeout(spinTimeout.current);
    });

    controls.addEventListener("end", () => {
      spinTimeout.current = setTimeout(() => {
        isUserInteracting.current = false;
      }, 100);
    });

    const loader = new GLTFLoader();
    loader.load("/models/question-mark.glb", (gltf) => {
      const model = gltf.scene;
      scene.add(model);
      modelRef.current = model;

      const animate = () => {
        requestAnimationFrame(animate);

        if (!isUserInteracting.current && modelRef.current) {
          modelRef.current.rotation.y += 0.005;
        }

        controls.update();
        renderer.render(scene, camera);
      };

      animate();
    });

    return () => {
      window.removeEventListener("resize", resizeRenderer);
      if (spinTimeout.current) clearTimeout(spinTimeout.current);
      while (mount.firstChild) {
        mount.removeChild(mount.firstChild);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "400px" }} />;
};

export default SpinningModel;
