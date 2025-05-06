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

    const waveLines: THREE.Line[] = [];
    const waveConfigs = [
      {
        color: 0x778899,
        amplitude: 1,
        frequency: 0.15,
        speed: 2,
        opacity: 0.8,
        offset: 3,
      },
      {
        color: 0x008080,
        amplitude: 1,
        frequency: 0.11,
        speed: 1.5,
        opacity: 0.5,
        offset: 1,
      },
      {
        color: 0xe6e6fa,
        amplitude: 2,
        frequency: 0.19,
        speed: 2.2,
        opacity: 0.6,
        offset: 2,
      },
    ];

    const numPoints = 150;
    let waveWidth = window.innerWidth * 0.5;

    waveConfigs.forEach((config, waveIndex) => {
      const points: THREE.Vector3[] = [];

      for (let i = 0; i < numPoints; i++) {
        const x = (i / (numPoints - 1) - 0.5) * waveWidth;
        points.push(new THREE.Vector3(x, 0, 0));
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);

      const material = new THREE.LineBasicMaterial({
        color: config.color,
        transparent: true,
        opacity: config.opacity,
      });

      const waveLine = new THREE.Line(geometry, material);
      waveLine.position.z = -waveIndex * 55;
      scene.add(waveLine);
      waveLines.push(waveLine);
    });

    const animate = () => {
      const time = performance.now() * 0.001;

      waveLines.forEach((waveLine, waveIndex) => {
        const config = waveConfigs[waveIndex];
        const geometry = waveLine.geometry;
        const positions = (
          geometry.attributes.position as THREE.BufferAttribute
        ).array as Float32Array;

        for (let i = 0; i < numPoints; i++) {
          const baseY =
            Math.sin(
              i * config.frequency + time * config.speed + config.offset
            ) * config.amplitude;

          let rippleY = 0;
          if (rippleStart.current !== null) {
            const rippleTime = (performance.now() - rippleStart.current) / 500;
            const rippleDuration = 3;
            const progress = rippleTime / rippleDuration;

            if (progress < 1) {
              const distToClick =
                Math.abs(i / numPoints - (mouse.current.x + 1) / 2) * 2;
              const damping = Math.max(0, 1 - distToClick);
              const fade = Math.pow(1 - progress, 2);

              const rippleFreq = 0.5 + waveIndex * 0.1;
              const rippleSpeed = 6 - waveIndex * 0.5;
              const rippleAmp = 10 - waveIndex * 2;

              rippleY =
                Math.sin(i * rippleFreq - rippleTime * rippleSpeed) *
                rippleAmp *
                damping *
                fade;
            } else {
              rippleStart.current = null;
            }
          }

          const finalY = baseY + rippleY;
          positions[i * 3 + 1] = finalY;
        }

        geometry.attributes.position.needsUpdate = true;
      });

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

      waveLines.forEach((waveLine) => {
        const geometry = waveLine.geometry;
        const positions = (
          geometry.attributes.position as THREE.BufferAttribute
        ).array as Float32Array;

        for (let i = 0; i < numPoints; i++) {
          const x = (i / (numPoints - 1) - 0.5) * waveWidth;
          positions[i * 3] = x;
        }

        geometry.attributes.position.needsUpdate = true;
      });
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

      waveLines.forEach((waveLine) => {
        waveLine.geometry.dispose();
        (waveLine.material as THREE.Material).dispose();
      });

      renderer.dispose();
    };
  }, []);

  return (
    <section className="h-screen w-full flex items-center justify-center relative overflow-hidden ">
      <div
        ref={mountRef}
        className="fixed top-0 left-0 w-full h-full inset-0 z-0 pointer-events-none"
      />
      <div className="relative z-1 text-center px-6">
        <h1
          className="font-bold bg-gradient-to-r cursor-pointer select-none from-[#DAA520]  to-[#DAA520] bg-clip-text text-transparent transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_50px_rgba(255,215,0)]"
          style={{
            fontSize: "clamp(3.5rem, 10vw, 8rem)",
          }}
        >
          mbdeviant
        </h1>
        <p className="text-gray-300 cursor-default  text-sm md:text-lg mt-4">
          that&apos;s the name internet knows me by
        </p>
      </div>
    </section>
  );
}
