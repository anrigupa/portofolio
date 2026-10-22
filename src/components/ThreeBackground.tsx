'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeBackgroundProps {
  speedMultiplier?: number;
  wireframeOpacity?: number;
}

export function ThreeBackground({
  speedMultiplier = 1,
  wireframeOpacity = 0.34
}: ThreeBackgroundProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const speedRef = useRef(speedMultiplier);

  useEffect(() => {
    speedRef.current = speedMultiplier;
  }, [speedMultiplier]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container || typeof window === 'undefined') return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 7.5;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Icosahedron Wireframe Utama
    const icoGeo = new THREE.IcosahedronGeometry(2.3, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      wireframe: true,
      transparent: true,
      opacity: wireframeOpacity
    });
    const icosahedron = new THREE.Mesh(icoGeo, icoMat);
    mainGroup.add(icosahedron);

    // 2. Inner Core Octahedron
    const coreGeo = new THREE.OctahedronGeometry(1.15, 0);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const innerCore = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(innerCore);

    // 3. Cincin Orbital Torus
    const ringGeo = new THREE.TorusGeometry(3.6, 0.018, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x34d399,
      transparent: true,
      opacity: 0.3
    });
    const torusRing = new THREE.Mesh(ringGeo, ringMat);
    torusRing.rotation.x = Math.PI / 2.6;
    torusRing.rotation.y = Math.PI / 6;
    mainGroup.add(torusRing);

    // 4. Partikel Bintang
    const particleCount = 240;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 22;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x67e8f9,
      size: 0.045,
      transparent: true,
      opacity: 0.55
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Interaksi Mouse Paralaks
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.8;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.8;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Responsivitas Canvas
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Loop Animasi
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const spd = 0.0025 * speedRef.current;

      icosahedron.rotation.x += spd;
      icosahedron.rotation.y += spd * 1.3;

      innerCore.rotation.x -= spd * 1.5;
      innerCore.rotation.y -= spd * 1.1;

      torusRing.rotation.z += spd * 0.9;
      particles.rotation.y += spd * 0.25;

      mainGroup.rotation.y += (mouseX - mainGroup.rotation.y) * 0.04;
      mainGroup.rotation.x += (mouseY - mainGroup.rotation.x) * 0.04;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      icoGeo.dispose();
      icoMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [wireframeOpacity]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}

