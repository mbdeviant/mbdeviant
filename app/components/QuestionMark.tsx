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

    // SCENE SETUP
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      95,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 2.5;
    camera.position.y = -0.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const hemisphereLight = new THREE.HemisphereLight(0xffa500, 0x800080, 1); // Purple sky, orange ground
    scene.add(hemisphereLight);

    const directionalLight = new THREE.DirectionalLight(0x800080, 3);
    scene.add(directionalLight);

    // CONTROLS
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.3;
    controls.enableZoom = false;

    // User interaction handling
    controls.addEventListener("start", () => {
      isUserInteracting.current = true;

      // reset spin resume timer if needed
      if (spinTimeout.current) clearTimeout(spinTimeout.current);
    });

    controls.addEventListener("end", () => {
      // wait 2s then resume spin
      spinTimeout.current = setTimeout(() => {
        isUserInteracting.current = false;
      }, 100);
    });

    // LOAD MODEL
    const loader = new GLTFLoader();
    loader.load("/models/question-mark.glb", (gltf) => {
      const model = gltf.scene;
      scene.add(model);
      modelRef.current = model;

      // ANIMATE LOOP
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

    // CLEANUP
    return () => {
      if (spinTimeout.current) clearTimeout(spinTimeout.current);
      while (mount.firstChild) {
        mount.removeChild(mount.firstChild);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "400px" }} />;
};

export default SpinningModel;
