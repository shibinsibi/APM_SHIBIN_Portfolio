import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HeroSculpture3D: React.FC<{ className?: string }> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene setup
    const scene = new THREE.Scene();

    const width = container.clientWidth || 340;
    const height = container.clientHeight || 340;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Warm Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xfffbf5, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff7ed, 1.6);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xe0edff, 0.8);
    fillLight.position.set(-4, -2, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.5);
    rimLight.position.set(0, 5, -4);
    scene.add(rimLight);

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. PRODUCT: Deep Navy / Soft White Architectural Slab
    const productGeometry = new THREE.BoxGeometry(2.4, 1.4, 0.18);
    const productMaterial = new THREE.MeshStandardMaterial({
      color: 0x172033, // Deep Navy
      roughness: 0.35,
      metalness: 0.1,
    });
    const productMesh = new THREE.Mesh(productGeometry, productMaterial);
    productMesh.position.set(-0.4, 0.25, -0.2);
    productMesh.rotation.set(0.1, -0.25, 0.05);
    rootGroup.add(productMesh);

    // Fine white border inset on product slab
    const productRimGeo = new THREE.BoxGeometry(2.42, 0.04, 0.19);
    const productRimMat = new THREE.MeshStandardMaterial({
      color: 0xf4ede2, // Beige rim
      roughness: 0.2,
      metalness: 0.3,
    });
    const productRim = new THREE.Mesh(productRimGeo, productRimMat);
    productRim.position.set(0, 0.7, 0);
    productMesh.add(productRim);

    // 2. AI: Translucent Soft Blue Architectural Panel
    const aiGeometry = new THREE.BoxGeometry(1.6, 2.2, 0.12);
    const aiMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x3b82f6, // Soft Blue
      transparent: true,
      opacity: 0.72,
      roughness: 0.2,
      transmission: 0.45,
      thickness: 0.8,
      ior: 1.4,
      metalness: 0.05,
    });
    const aiMesh = new THREE.Mesh(aiGeometry, aiMaterial);
    aiMesh.position.set(0.35, -0.15, 0.25);
    aiMesh.rotation.set(-0.15, 0.3, -0.1);
    rootGroup.add(aiMesh);

    // 3. E-COMMERCE: Warm Matte Beige Interlocking Frame / Slab
    const ecomGeometry = new THREE.TorusGeometry(1.15, 0.12, 24, 64);
    const ecomMaterial = new THREE.MeshStandardMaterial({
      color: 0xd9b88c, // Warm Beige
      roughness: 0.45,
      metalness: 0.2,
    });
    const ecomMesh = new THREE.Mesh(ecomGeometry, ecomMaterial);
    ecomMesh.position.set(0.1, 0.1, 0.05);
    ecomMesh.rotation.set(Math.PI / 2.3, 0.2, -0.4);
    rootGroup.add(ecomMesh);

    // Subtle brushed champagne node connecting all three
    const nodeGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.5, 32);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0xe8d5bd,
      metalness: 0.6,
      roughness: 0.3,
    });
    const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
    nodeMesh.position.set(0.1, 0.15, 0.15);
    nodeMesh.rotation.set(0.4, 0.2, 0.6);
    rootGroup.add(nodeMesh);

    // Mouse tilt tracking (Subtle 3-5 degrees = ~0.05 - 0.08 radians)
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      // Max tilt: 4 degrees = ~0.07 rad
      targetRotY = x * 0.07;
      targetRotX = -y * 0.07;
    };

    const handleMouseLeave = () => {
      targetRotX = 0;
      targetRotY = 0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop with Visibility Check
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

      const elapsedTime = clock.getElapsedTime();

      // Ultra-slow breathing float
      if (!prefersReducedMotion) {
        rootGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.06;
        rootGroup.rotation.z = Math.sin(elapsedTime * 0.4) * 0.02;

        // Smooth damping interpolation toward cursor target
        currentRotX += (targetRotX - currentRotX) * 0.05;
        currentRotY += (targetRotY - currentRotY) * 0.05;
        rootGroup.rotation.x = currentRotX + 0.05;
        rootGroup.rotation.y = currentRotY - 0.15;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);

      productGeometry.dispose();
      productMaterial.dispose();
      productRimGeo.dispose();
      productRimMat.dispose();
      aiGeometry.dispose();
      aiMaterial.dispose();
      ecomGeometry.dispose();
      ecomMaterial.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
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
