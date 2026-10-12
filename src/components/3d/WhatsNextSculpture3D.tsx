import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const WhatsNextSculpture3D: React.FC<{ className?: string }> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();

    const width = container.clientWidth || 340;
    const height = container.clientHeight || 340;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // Warm Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xfffbf5, 1.3);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff7ed, 1.5);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xe8f0fe, 0.7);
    fillLight.position.set(-4, -2, 3);
    scene.add(fillLight);

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Three interlocking architectural rings / forms
    // 1. PRODUCT: Deep Navy Ring
    const navyGeo = new THREE.TorusGeometry(1.3, 0.11, 24, 64);
    const navyMat = new THREE.MeshStandardMaterial({
      color: 0x172033, // Deep Navy
      roughness: 0.35,
      metalness: 0.15,
    });
    const navyRing = new THREE.Mesh(navyGeo, navyMat);
    navyRing.rotation.set(0.4, 0.5, 0.2);
    rootGroup.add(navyRing);

    // 2. AI: Soft Translucent Blue Ring
    const blueGeo = new THREE.TorusGeometry(1.22, 0.1, 24, 64);
    const blueMat = new THREE.MeshPhysicalMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.75,
      roughness: 0.15,
      transmission: 0.45,
      thickness: 0.6,
      metalness: 0.05,
    });
    const blueRing = new THREE.Mesh(blueGeo, blueMat);
    blueRing.rotation.set(-0.6, 0.8, -0.4);
    rootGroup.add(blueRing);

    // 3. TECHNOLOGY / COMMERCE: Warm Matte Beige Ring
    const beigeGeo = new THREE.TorusGeometry(1.15, 0.09, 24, 64);
    const beigeMat = new THREE.MeshStandardMaterial({
      color: 0xd9b88c, // Warm Beige
      roughness: 0.4,
      metalness: 0.25,
    });
    const beigeRing = new THREE.Mesh(beigeGeo, beigeMat);
    beigeRing.rotation.set(1.1, -0.4, 0.6);
    rootGroup.add(beigeRing);

    // Central subtle convergence core: small soft champagne orb
    const coreGeo = new THREE.SphereGeometry(0.24, 32, 32);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.2,
      transmission: 0.6,
      transparent: true,
      opacity: 0.9,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    rootGroup.add(core);

    // Mouse tracking for subtle tilt
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotY = x * 0.07;
      targetRotX = -y * 0.07;
    };

    const handleMouseLeave = () => {
      targetRotX = 0;
      targetRotY = 0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave);

    // Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let isVisible = true;
    let clock = new THREE.Clock();

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(container);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const time = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Very slow, calm rotation of each ring around shared center
        navyRing.rotation.x = 0.4 + time * 0.08;
        navyRing.rotation.y = 0.5 + time * 0.06;

        blueRing.rotation.y = 0.8 - time * 0.09;
        blueRing.rotation.z = -0.4 + time * 0.07;

        beigeRing.rotation.x = 1.1 - time * 0.07;
        beigeRing.rotation.z = 0.6 + time * 0.08;

        // Subtle core breath
        const s = 1.0 + Math.sin(time * 1.5) * 0.06;
        core.scale.set(s, s, s);

        // Smooth damping cursor response
        currentRotX += (targetRotX - currentRotX) * 0.05;
        currentRotY += (targetRotY - currentRotY) * 0.05;
        rootGroup.rotation.x = currentRotX;
        rootGroup.rotation.y = currentRotY;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);

      navyGeo.dispose();
      navyMat.dispose();
      blueGeo.dispose();
      blueMat.dispose();
      beigeGeo.dispose();
      beigeMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none select-none relative ${className}`}
      aria-hidden="true"
    />
  );
};
