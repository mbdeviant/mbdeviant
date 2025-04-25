"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero() {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const mouse = useRef(new THREE.Vector2(0, 0));
  const rippleStart = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#000");

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 100;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const points: THREE.Vector3[] = [];
    const numPoints = 150;
    let waveWidth = window.innerWidth * 0.8;

    for (let i = 0; i < numPoints; i++) {
      const x = (i / (numPoints - 1) - 0.5) * waveWidth;
      points.push(new THREE.Vector3(x, 0, 0));
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
      color: 0xff7f50,
      transparent: true,
      opacity: 0.8,
    });

    const waveLine = new THREE.Line(geometry, material);
    scene.add(waveLine);

    const animate = () => {
      const time = performance.now() * 0.001;
      const positions = (geometry.attributes.position as THREE.BufferAttribute)
        .array as Float32Array;

      for (let i = 0; i < numPoints; i++) {
        // const x = points[i].x;

        const baseY = Math.sin(i * 0.2 + time * 2) * 5;

        let rippleY = 0;
        if (rippleStart.current !== null) {
          const rippleTime = (performance.now() - rippleStart.current) / 1000;

          if (rippleTime < 1.2) {
            const distToClick =
              Math.abs(i / numPoints - (mouse.current.x + 1) / 2) * 2;
            const damping = Math.max(0, 1 - distToClick);
            rippleY =
              Math.sin(i * 0.5 - rippleTime * 6) *
              10 *
              damping *
              (1 - rippleTime);
          } else {
            rippleStart.current = null;
          }
        }

        const finalY = baseY + rippleY;

        positions[i * 3 + 1] = finalY;
      }

      geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleClick = (event: MouseEvent) => {
      rippleStart.current = performance.now();
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      waveWidth = width * 0.8;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      for (let i = 0; i < numPoints; i++) {
        const x = (i / (numPoints - 1) - 0.5) * waveWidth;
        points[i].x = x;
        geometry.attributes.position.setX(i, x);
      }

      geometry.attributes.position.needsUpdate = true;
    };

    window.addEventListener("click", handleClick);
    window.addEventListener("resize", handleResize);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);

      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="h-screen w-full flex items-center justify-center relative overflow-hidden">
      <div
        ref={mountRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />
      <div className="relative z-10 text-center px-6">
        <h1
          className="font-bold bg-gradient-to-r cursor-default from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent drop-shadow-md"
          style={{
            fontSize: "clamp(3.5rem, 10vw, 8rem)",
          }}
        >
          mbdeviant
        </h1>
        <p className="text-gray-300 text-sm md:text-lg mt-4">
          that&apos;s the name internet knows me by
        </p>
      </div>
    </section>
  );
}
