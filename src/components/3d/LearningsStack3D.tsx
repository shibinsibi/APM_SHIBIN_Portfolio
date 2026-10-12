import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface LearningsStack3DProps {
  className?: string;
  activePrinciple: number; // 0 to 4
  onSelectPrinciple?: (index: number) => void;
}

const PRINCIPLES = [
  '01 APPLY PRODUCT THINKING',
  '02 UNDERSTAND THE USER',
  '03 BUILD SMALL. LEARN FAST.',
  '04 MEASURE OUTCOMES',
  '05 KEEP LEARNING',
];

export const LearningsStack3D: React.FC<LearningsStack3DProps> = ({
  className = '',
  activePrinciple = 0,
  onSelectPrinciple,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 380;

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(2.4, 1.2, 5.4);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Dark-adapted studio lighting (against dark navy background)
    const ambientLight = new THREE.AmbientLight(0xfff5ea, 1.0);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffecd1, 1.8);
    keyLight.position.set(3, 5, 4);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x3b82f6, 1.2);
    rimLight.position.set(-3, -2, -2);
    scene.add(rimLight);

    const rootGroup = new THREE.Group();
    rootGroup.rotation.y = -0.42;
    rootGroup.rotation.x = 0.2;
    scene.add(rootGroup);

    // 5 thin slabs stacked vertically with warm beige edges
    const slabMeshes: THREE.Mesh[] = [];
    const edgeMeshes: THREE.Mesh[] = [];
    const geos: THREE.BufferGeometry[] = [];
    const mats: THREE.Material[] = [];

    const slabHeight = 0.09;
    const spacing = 0.52;

    for (let i = 0; i < 5; i++) {
      const y = (2 - i) * spacing;

      // Slab body (Deep rich slate/navy)
      const slabGeo = new THREE.BoxGeometry(2.5, slabHeight, 1.6);
      geos.push(slabGeo);
      const slabMat = new THREE.MeshStandardMaterial({
        color: 0x1e293b,
        roughness: 0.35,
        metalness: 0.2,
      });
      mats.push(slabMat);

      const slabMesh = new THREE.Mesh(slabGeo, slabMat);
      slabMesh.position.set(0, y, 0);

      // Warm Beige Edge
      const edgeGeo = new THREE.BoxGeometry(2.52, 0.03, 0.05);
      geos.push(edgeGeo);
      const edgeMat = new THREE.MeshStandardMaterial({
        color: 0xd9b88c, // Warm Beige
        metalness: 0.4,
        roughness: 0.2,
      });
      mats.push(edgeMat);

      const edgeMesh = new THREE.Mesh(edgeGeo, edgeMat);
      edgeMesh.position.set(0, slabHeight / 2, 0.8);
      slabMesh.add(edgeMesh);

      rootGroup.add(slabMesh);
      slabMeshes.push(slabMesh);
      edgeMeshes.push(edgeMesh);
    }

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

    // Animation
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
        rootGroup.rotation.y = -0.42 + Math.sin(time * 0.4) * 0.03;
        rootGroup.position.y = Math.sin(time * 0.6) * 0.03;
      }

      // Smooth forward movement for active principle
      slabMeshes.forEach((mesh, idx) => {
        const isActive = activePrinciple === idx;
        const targetZ = isActive ? 0.45 : 0;
        const targetScaleX = isActive ? 1.06 : 1.0;

        mesh.position.z += (targetZ - mesh.position.z) * 0.12;
        mesh.scale.x += (targetScaleX - mesh.scale.x) * 0.12;

        const edge = edgeMeshes[idx];
        const edgeMat = edge.material as THREE.MeshStandardMaterial;
        const targetColor = isActive ? 0xfff0db : 0xd9b88c;
        edgeMat.color.setHex(targetColor);
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);

      geos.forEach((g) => g.dispose());
      mats.forEach((m) => m.dispose());
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [activePrinciple]);

  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      {/* 3D Canvas */}
      <div
        ref={containerRef}
        className="w-full h-[320px] sm:h-[380px] select-none"
        aria-label="3D Learning Stack"
      />

      {/* Principle selectors */}
      <div className="w-full flex flex-col gap-1.5 mt-2 max-w-xs">
        {PRINCIPLES.map((text, idx) => (
          <button
            key={text}
            onClick={() => onSelectPrinciple?.(idx)}
            className={`flex items-center justify-between rounded-lg px-3 py-1.5 text-xs transition-all text-left cursor-pointer ${
              activePrinciple === idx
                ? 'bg-[#2A374F] text-[#D9B88C] font-semibold border-l-2 border-[#D9B88C]'
                : 'text-stone-400 hover:text-stone-200 hover:bg-[#1E293B]/60'
            }`}
          >
            <span>{text}</span>
            {activePrinciple === idx && (
              <span className="text-[10px] text-[#3B82F6]">●</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
