import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Play, Pause, RotateCcw } from 'lucide-react';

const RAG_STAGES = [
  { step: '01', title: 'Documents & Knowledge', desc: 'Raw enterprise PDFs, docs, product catalogs' },
  { step: '02', title: 'Vector Retrieval', desc: 'Semantic search matches user intent embeddings' },
  { step: '03', title: 'Context Window', desc: 'Ranked relevant chunks injected into prompt' },
  { step: '04', title: 'AI Model Inference', desc: 'Grounded reasoning over verified facts' },
  { step: '05', title: 'Accurate Response', desc: 'Hallucination-free, cited answer to user' },
];

export const RagArchitecture3D: React.FC<{ className?: string }> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentStage, setCurrentStage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();

    const width = container.clientWidth || 640;
    const height = container.clientHeight || 380;

    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 8.8);
    camera.lookAt(0, 0, 0);

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
    const ambientLight = new THREE.AmbientLight(0xfffcf5, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xfff7ed, 1.4);
    dirLight1.position.set(5, 7, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xe8f0fe, 0.7);
    dirLight2.position.set(-5, -2, 4);
    scene.add(dirLight2);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Documents: 3 floating white/beige sheets on the left (-3.2, 0, 0)
    const docGroup = new THREE.Group();
    docGroup.position.set(-3.2, 0, 0);
    rootGroup.add(docGroup);

    const docGeo = new THREE.BoxGeometry(0.9, 1.25, 0.03);
    const docMat = new THREE.MeshStandardMaterial({ color: 0xfcfbfa, roughness: 0.35, metalness: 0.1 });
    const docBeigeMat = new THREE.MeshStandardMaterial({ color: 0xf3ebe1, roughness: 0.4 });

    const doc1 = new THREE.Mesh(docGeo, docMat);
    doc1.position.set(-0.25, 0.2, -0.2);
    doc1.rotation.set(0.05, 0.15, -0.05);
    docGroup.add(doc1);

    const doc2 = new THREE.Mesh(docGeo, docBeigeMat);
    doc2.position.set(0, 0, 0);
    doc2.rotation.set(-0.02, 0.05, 0.02);
    docGroup.add(doc2);

    const doc3 = new THREE.Mesh(docGeo, docMat);
    doc3.position.set(0.25, -0.2, 0.2);
    doc3.rotation.set(0.08, -0.1, -0.04);
    docGroup.add(doc3);

    // 2. Retrieval Aperture: Minimalist beige/navy prism gate (-1.6, 0, 0)
    const gateGroup = new THREE.Group();
    gateGroup.position.set(-1.6, 0, 0);
    rootGroup.add(gateGroup);

    const gateRingGeo = new THREE.TorusGeometry(0.75, 0.05, 16, 48);
    const gateRingMat = new THREE.MeshStandardMaterial({ color: 0xd9b88c, metalness: 0.4, roughness: 0.3 });
    const gateRing = new THREE.Mesh(gateRingGeo, gateRingMat);
    gateRing.rotation.y = Math.PI / 2.4;
    gateGroup.add(gateRing);

    // 3. Extracted Context Fragments: Floating blue & beige tokens (-0.1, 0, 0)
    const fragGroup = new THREE.Group();
    fragGroup.position.set(-0.1, 0, 0);
    rootGroup.add(fragGroup);

    const fragGeo = new THREE.BoxGeometry(0.35, 0.22, 0.04);
    const fragMat = new THREE.MeshPhysicalMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.85,
      roughness: 0.2,
      transmission: 0.3,
    });
    const fragBeigeMat = new THREE.MeshStandardMaterial({ color: 0xd9b88c, roughness: 0.3 });

    const fragments: THREE.Mesh[] = [];
    for (let i = 0; i < 4; i++) {
      const f = new THREE.Mesh(fragGeo, i % 2 === 0 ? fragMat : fragBeigeMat);
      f.position.set((i - 1.5) * 0.25, (i % 2 === 0 ? 0.25 : -0.25), (i - 1.5) * 0.1);
      fragGroup.add(f);
      fragments.push(f);
    }

    // 4. AI Model Representation: Pure architectural Navy Monolith with champagne bezel (+1.5, 0, 0)
    const modelGroup = new THREE.Group();
    modelGroup.position.set(1.5, 0, 0);
    rootGroup.add(modelGroup);

    const monolithGeo = new THREE.BoxGeometry(1.0, 1.7, 0.6);
    const monolithMat = new THREE.MeshStandardMaterial({
      color: 0x172033, // Deep Navy
      roughness: 0.25,
      metalness: 0.3,
    });
    const monolith = new THREE.Mesh(monolithGeo, monolithMat);
    modelGroup.add(monolith);

    // Accent line on model
    const accentGeo = new THREE.BoxGeometry(1.02, 0.04, 0.62);
    const accentMat = new THREE.MeshPhysicalMaterial({ color: 0x3b82f6, roughness: 0.1 });
    const accent = new THREE.Mesh(accentGeo, accentMat);
    accent.position.set(0, 0.3, 0);
    monolith.add(accent);

    // 5. Synthesized Response: Clean crisp white panel (+3.3, 0, 0)
    const responseGroup = new THREE.Group();
    responseGroup.position.set(3.3, 0, 0);
    rootGroup.add(responseGroup);

    const respGeo = new THREE.BoxGeometry(1.1, 1.4, 0.06);
    const respMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.2,
      metalness: 0.1,
    });
    const respCard = new THREE.Mesh(respGeo, respMat);
    respCard.rotation.set(-0.05, -0.2, 0.02);
    responseGroup.add(respCard);

    // Green/blue success status dot on response
    const dotGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.08, 16);
    const dotMat = new THREE.MeshStandardMaterial({ color: 0x10b981 });
    const dot = new THREE.Mesh(dotGeo, dotMat);
    dot.position.set(-0.35, 0.5, 0.04);
    dot.rotation.x = Math.PI / 2;
    respCard.add(dot);

    // Flow path line across all stages
    const pathCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-3.2, 0, 0),
      new THREE.Vector3(-1.6, 0.1, 0),
      new THREE.Vector3(-0.1, 0, 0),
      new THREE.Vector3(1.5, 0.1, 0),
      new THREE.Vector3(3.3, 0, 0),
    ]);
    const pathPoints = pathCurve.getPoints(50);
    const pathLineGeo = new THREE.BufferGeometry().setFromPoints(pathPoints);
    const pathLineMat = new THREE.LineDashedMaterial({
      color: 0xd9b88c,
      dashSize: 0.1,
      gapSize: 0.05,
      transparent: true,
      opacity: 0.45,
    });
    const pathLine = new THREE.Line(pathLineGeo, pathLineMat);
    rootGroup.add(pathLine);

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

    // Animation loop
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

      if (!prefersReducedMotion && !isPaused) {
        // Document gentle floating
        docGroup.position.y = Math.sin(time * 1.2) * 0.08;

        // Retrieval ring slow rotation
        gateRing.rotation.z = time * 0.3;

        // Fragments gliding forward and back
        fragments.forEach((f, idx) => {
          f.position.y = Math.sin(time * 2 + idx * 0.8) * 0.08;
          f.rotation.y = time * 0.5 + idx * 0.4;
        });

        // Model subtle breathing
        monolith.rotation.y = Math.sin(time * 0.6) * 0.05;

        // Response card subtle hover
        responseGroup.position.y = Math.cos(time * 1.1) * 0.06;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);

      docGeo.dispose();
      docMat.dispose();
      docBeigeMat.dispose();
      gateRingGeo.dispose();
      gateRingMat.dispose();
      fragGeo.dispose();
      fragMat.dispose();
      fragBeigeMat.dispose();
      monolithGeo.dispose();
      monolithMat.dispose();
      accentGeo.dispose();
      accentMat.dispose();
      respGeo.dispose();
      respMat.dispose();
      dotGeo.dispose();
      dotMat.dispose();
      pathLineGeo.dispose();
      pathLineMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [isPaused]);

  return (
    <div className={`relative flex flex-col items-center rounded-2xl border border-stone-200/90 bg-[#FAF9F5] p-5 sm:p-7 shadow-xs ${className}`}>
      {/* Editorial Header */}
      <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/80 pb-4">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3B82F6]">
            3D ARCHITECTURAL CONCEPT
          </span>
          <h3 className="font-editorial text-xl sm:text-2xl text-[#172033]">
            How RAG (Retrieval-Augmented Generation) Works
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPaused((prev) => !prev)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-xs font-medium text-[#172033] hover:bg-stone-50 transition-colors cursor-pointer"
            title={isPaused ? 'Resume Motion' : 'Pause Motion'}
          >
            {isPaused ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}
            <span>{isPaused ? 'Play' : 'Pause'}</span>
          </button>
        </div>
      </div>

      {/* 3D WebGL Canvas */}
      <div
        ref={containerRef}
        className="w-full h-[280px] sm:h-[340px] select-none my-2"
        aria-label="3D RAG Architecture flow: Documents to Retrieval to Context to AI Model to Response"
      />

      {/* Educational 5-Step Pipeline Walkthrough */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-5 gap-2 pt-3 border-t border-stone-200/80">
        {RAG_STAGES.map((stg, idx) => (
          <div
            key={stg.step}
            onClick={() => setCurrentStage(idx)}
            className={`rounded-xl p-3 text-left transition-all cursor-pointer ${
              currentStage === idx
                ? 'bg-white border border-[#3B82F6] shadow-xs'
                : 'hover:bg-white/60 border border-transparent'
            }`}
          >
            <div className="flex items-center justify-between text-[10px] font-semibold tracking-wider text-[#3B82F6]">
              <span>{stg.step}</span>
              <span className="text-stone-300">→</span>
            </div>
            <p className="mt-1 text-xs font-semibold text-[#172033] leading-snug">
              {stg.title}
            </p>
            <p className="mt-1 text-[11px] text-[#596273] leading-relaxed hidden sm:block">
              {stg.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
