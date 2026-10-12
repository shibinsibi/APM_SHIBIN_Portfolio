import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';

export type MilestoneId = 'education' | 'certifications' | 'experience';

interface JourneyPath3DProps {
  className?: string;
  activeMilestoneId: MilestoneId;
  onSelectMilestone: (id: MilestoneId) => void;
}

interface MilestoneNodeConfig {
  id: MilestoneId;
  index: number;
  label: string;
  sub: string;
  angle: number; // Angle around orbit (radians)
  radius: number;
  yOffset: number;
}

const NODES_CONFIG: MilestoneNodeConfig[] = [
  {
    id: 'education',
    index: 0,
    label: '01 · EDUCATION',
    sub: 'B.E. & PGDM / MBA',
    angle: -Math.PI * 0.75, // Back left / front left
    radius: 3.1,
    yOffset: -0.4,
  },
  {
    id: 'certifications',
    index: 1,
    label: '02 · CERTIFICATIONS',
    sub: 'Salesforce, Akeneo, AI PM',
    angle: -Math.PI * 0.08, // Center-top / elevated
    radius: 3.0,
    yOffset: 0.65,
  },
  {
    id: 'experience',
    index: 2,
    label: '03 · EXPERIENCE',
    sub: 'Zensar · Almost 4 Years SFCC',
    angle: Math.PI * 0.62, // Right foreground
    radius: 3.2,
    yOffset: -0.25,
  },
];

export const JourneyPath3D: React.FC<JourneyPath3DProps> = ({
  className = '',
  activeMilestoneId,
  onSelectMilestone,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<MilestoneId | null>(null);

  // Store active id in ref for animation frame loop
  const activeIdRef = useRef<MilestoneId>(activeMilestoneId);
  useEffect(() => {
    activeIdRef.current = activeMilestoneId;
  }, [activeMilestoneId]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // SCENE & CAMERA
    const scene = new THREE.Scene();
    const width = container.clientWidth || 640;
    const height = container.clientHeight || 420;

    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(0, 2.2, 8.4);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // LIGHTING: Sophisticated Architectural Light
    const ambientLight = new THREE.AmbientLight(0xfffcf5, 1.25);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff5ea, 1.8);
    keyLight.position.set(5, 7, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xdbeafe, 0.7);
    fillLight.position.set(-6, 2, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xd9b88c, 0.5);
    rimLight.position.set(0, -4, -4);
    scene.add(rimLight);

    // ROOT OBJECT GROUP
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // ==========================================
    // 1. CENTRAL OBJECT: MINIMAL METALLIC & FROSTED CORE
    // ==========================================
    const coreGroup = new THREE.Group();
    rootGroup.add(coreGroup);

    // Core Outer Brushed Slate Ring
    const outerRingGeo = new THREE.TorusGeometry(1.35, 0.035, 24, 80);
    const darkMetalMat = new THREE.MeshStandardMaterial({
      color: 0x172033,
      metalness: 0.85,
      roughness: 0.25,
    });
    const outerRing = new THREE.Mesh(outerRingGeo, darkMetalMat);
    outerRing.rotation.x = Math.PI / 2.3;
    coreGroup.add(outerRing);

    // Core Inner Champagne / Warm Gold Ring
    const innerRingGeo = new THREE.TorusGeometry(1.05, 0.025, 20, 72);
    const goldMetalMat = new THREE.MeshStandardMaterial({
      color: 0xd9b88c,
      metalness: 0.9,
      roughness: 0.2,
    });
    const innerRing = new THREE.Mesh(innerRingGeo, goldMetalMat);
    innerRing.rotation.x = Math.PI / 3.2;
    innerRing.rotation.y = Math.PI / 6;
    coreGroup.add(innerRing);

    // Core Frosted Glass Disc (Lens of intent)
    const coreDiscGeo = new THREE.CylinderGeometry(0.72, 0.72, 0.08, 48);
    const frostedGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.7,
      opacity: 0.85,
      transparent: true,
      roughness: 0.2,
      ior: 1.45,
      metalness: 0.05,
    });
    const coreDisc = new THREE.Mesh(coreDiscGeo, frostedGlassMat);
    coreDisc.rotation.x = Math.PI / 2;
    coreGroup.add(coreDisc);

    // Tiny Center Pivot Sphere
    const centerSphereGeo = new THREE.SphereGeometry(0.14, 24, 24);
    const centerSphereMat = new THREE.MeshStandardMaterial({
      color: 0x172033,
      metalness: 0.95,
      roughness: 0.15,
    });
    const centerSphere = new THREE.Mesh(centerSphereGeo, centerSphereMat);
    coreGroup.add(centerSphere);

    // ==========================================
    // 2. CONNECTING CURVED ORBIT / PATH
    // ==========================================
    const orbitCurvePoints: THREE.Vector3[] = [];
    const segments = 120;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      const rx = 3.3;
      const rz = 2.6;
      // Gently undulating Y coordinate
      const y = Math.sin(theta * 1.5 + 0.4) * 0.45;
      orbitCurvePoints.push(new THREE.Vector3(Math.cos(theta) * rx, y, Math.sin(theta) * rz));
    }

    const orbitPath = new THREE.CatmullRomCurve3(orbitCurvePoints, true);
    const orbitTubeGeo = new THREE.TubeGeometry(orbitPath, 160, 0.02, 10, true);
    const orbitMat = new THREE.MeshStandardMaterial({
      color: 0xc4b59d,
      metalness: 0.4,
      roughness: 0.5,
      transparent: true,
      opacity: 0.75,
    });
    const orbitMesh = new THREE.Mesh(orbitTubeGeo, orbitMat);
    rootGroup.add(orbitMesh);

    // Subtle Secondary Ghost Ellipse
    const ghostRingGeo = new THREE.RingGeometry(3.05, 3.08, 90);
    const ghostRingMat = new THREE.MeshBasicMaterial({
      color: 0xd9b88c,
      transparent: true,
      opacity: 0.25,
      side: THREE.DoubleSide,
    });
    const ghostRing = new THREE.Mesh(ghostRingGeo, ghostRingMat);
    ghostRing.rotation.x = Math.PI / 2.15;
    rootGroup.add(ghostRing);

    // ==========================================
    // 3. THREE FLOATING GLASS-LIKE MILESTONE NODES
    // ==========================================
    const nodeGroups: Map<MilestoneId, THREE.Group> = new Map();
    const hitMeshes: THREE.Mesh[] = [];

    // Helper: Canvas texture for node title
    const createTextTexture = (title: string, sub: string, isSelected: boolean) => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      ctx.clearRect(0, 0, 512, 256);

      // Card-like background pill
      ctx.fillStyle = isSelected ? 'rgba(23, 32, 51, 0.94)' : 'rgba(255, 255, 255, 0.92)';
      ctx.strokeStyle = isSelected ? 'rgba(59, 130, 246, 0.8)' : 'rgba(217, 184, 140, 0.6)';
      ctx.lineWidth = 4;

      const x = 20, y = 20, w = 472, h = 216, r = 24;
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Top Milestone Step Title
      ctx.font = 'bold 36px "Times New Roman", serif';
      ctx.fillStyle = isSelected ? '#FFFFFF' : '#172033';
      ctx.textAlign = 'center';
      ctx.fillText(title, 256, 95);

      // Subtitle
      ctx.font = '500 24px -apple-system, BlinkMacSystemFont, "Inter", sans-serif';
      ctx.fillStyle = isSelected ? '#93C5FD' : '#596273';
      ctx.fillText(sub, 256, 145);

      // Click indicator badge
      ctx.font = '600 18px -apple-system, BlinkMacSystemFont, "Inter", sans-serif';
      ctx.fillStyle = isSelected ? '#60A5FA' : '#A07A4A';
      ctx.fillText(isSelected ? 'ACTIVE VIEW · CLICK TO RE-FOCUS' : 'CLICK TO EXPLORE', 256, 185);

      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;
      return texture;
    };

    NODES_CONFIG.forEach((cfg) => {
      const nodeGroup = new THREE.Group();
      nodeGroup.userData = { id: cfg.id };

      // Compute base position along orbit
      const rx = 3.3;
      const rz = 2.6;
      const x = Math.cos(cfg.angle) * rx;
      const z = Math.sin(cfg.angle) * rz;
      const y = cfg.yOffset;

      nodeGroup.position.set(x, y, z);

      // A. Floating Glass Milestone Disc (Pedestal)
      const glassBaseGeo = new THREE.CylinderGeometry(0.72, 0.72, 0.1, 36);
      const glassBaseMat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        transmission: 0.8,
        roughness: 0.15,
        ior: 1.45,
        opacity: 0.9,
        transparent: true,
      });
      const glassBase = new THREE.Mesh(glassBaseGeo, glassBaseMat);
      nodeGroup.add(glassBase);

      // B. Metallic Accent Bezel
      const bezelGeo = new THREE.TorusGeometry(0.74, 0.02, 16, 48);
      const bezelMat = new THREE.MeshStandardMaterial({
        color: cfg.id === activeIdRef.current ? 0x3b82f6 : 0xd9b88c,
        metalness: 0.8,
        roughness: 0.3,
      });
      const bezel = new THREE.Mesh(bezelGeo, bezelMat);
      bezel.rotation.x = Math.PI / 2;
      nodeGroup.add(bezel);

      // C. Central Indicator Node
      const centerNodeGeo = new THREE.SphereGeometry(0.2, 24, 24);
      const centerNodeMat = new THREE.MeshStandardMaterial({
        color: cfg.id === activeIdRef.current ? 0x3b82f6 : 0x172033,
        metalness: 0.9,
        roughness: 0.2,
      });
      const centerNode = new THREE.Mesh(centerNodeGeo, centerNodeMat);
      centerNode.position.y = 0.12;
      nodeGroup.add(centerNode);

      // D. Active Subtle Pulsing Ring
      const pulseRingGeo = new THREE.RingGeometry(0.26, 0.32, 32);
      const pulseRingMat = new THREE.MeshBasicMaterial({
        color: 0x3b82f6,
        transparent: true,
        opacity: cfg.id === activeIdRef.current ? 0.8 : 0.0,
        side: THREE.DoubleSide,
      });
      const pulseRing = new THREE.Mesh(pulseRingGeo, pulseRingMat);
      pulseRing.rotation.x = Math.PI / 2;
      pulseRing.position.y = 0.14;
      pulseRing.name = 'pulseRing';
      nodeGroup.add(pulseRing);

      // E. Invisible Hit Mesh for reliable clicking/hovering (must be transparent, NOT visible: false)
      const hitGeo = new THREE.SphereGeometry(1.5, 16, 16);
      const hitMat = new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 0.001, // Raycaster requires material.visible !== false
        depthWrite: false,
      });
      const hitMesh = new THREE.Mesh(hitGeo, hitMat);
      hitMesh.userData = { id: cfg.id };
      nodeGroup.add(hitMesh);
      hitMeshes.push(hitMesh);

      // F. Floating Label Plate / Billboard
      const textTexture = createTextTexture(
        cfg.label,
        cfg.sub,
        cfg.id === activeIdRef.current
      );
      if (textTexture) {
        const labelGeo = new THREE.PlaneGeometry(1.8, 0.9);
        const labelMat = new THREE.MeshBasicMaterial({
          map: textTexture,
          transparent: true,
          side: THREE.DoubleSide,
          depthTest: true,
        });
        const labelMesh = new THREE.Mesh(labelGeo, labelMat);
        labelMesh.position.set(0, 0.9, 0);
        labelMesh.name = 'labelMesh';
        nodeGroup.add(labelMesh);
      }

      // Vertical Stems connecting node to orbit plane
      const stemGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.6, 12);
      const stemMat = new THREE.MeshStandardMaterial({
        color: 0x94a3b8,
        metalness: 0.6,
        roughness: 0.4,
      });
      const stem = new THREE.Mesh(stemGeo, stemMat);
      stem.position.y = -0.3;
      nodeGroup.add(stem);

      rootGroup.add(nodeGroup);
      nodeGroups.set(cfg.id, nodeGroup);
    });

    // ==========================================
    // 4. SUBTLE AMBIENT PARTICLES (Micro Depth-of-Field)
    // ==========================================
    const particlesCount = 48;
    const particlePositions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 10;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 4;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particlesMat = new THREE.PointsMaterial({
      color: 0xd9b88c,
      size: 0.045,
      transparent: true,
      opacity: 0.35,
    });
    const particles = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particles);

    // ==========================================
    // 5. INTERACTION & RAYCASTING
    // ==========================================
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-999, -999);

    const updateMouse = (clientX: number, clientY: number) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    };

    const checkIntersection = (): MilestoneId | null => {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(hitMeshes, true);
      if (intersects.length > 0) {
        let obj: THREE.Object3D | null = intersects[0].object;
        while (obj) {
          if (obj.userData?.id) {
            return obj.userData.id as MilestoneId;
          }
          obj = obj.parent;
        }
      }
      return null;
    };

    const onPointerMove = (e: MouseEvent) => {
      updateMouse(e.clientX, e.clientY);
      const targetId = checkIntersection();
      if (targetId) {
        renderer.domElement.style.cursor = 'pointer';
        setHoveredId(targetId);
      } else {
        renderer.domElement.style.cursor = 'default';
        setHoveredId(null);
      }
    };

    let startX = 0;
    let startY = 0;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      startX = clientX;
      startY = clientY;
    };

    const onPointerUp = (e: MouseEvent | TouchEvent) => {
      const clientX =
        'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
      const clientY =
        'changedTouches' in e ? e.changedTouches[0].clientY : e.clientY;
      const dist = Math.hypot(clientX - startX, clientY - startY);
      if (dist > 10) return; // Ignore drag rotation

      updateMouse(clientX, clientY);
      const targetId = checkIntersection();
      if (targetId) {
        onSelectMilestone(targetId);
      }
    };

    const onClick = (e: MouseEvent) => {
      updateMouse(e.clientX, e.clientY);
      const targetId = checkIntersection();
      if (targetId) {
        onSelectMilestone(targetId);
      }
    };

    renderer.domElement.addEventListener('mousemove', onPointerMove);
    renderer.domElement.addEventListener('mousedown', onPointerDown);
    renderer.domElement.addEventListener('mouseup', onPointerUp);
    renderer.domElement.addEventListener('touchstart', onPointerDown, { passive: true });
    renderer.domElement.addEventListener('touchend', onPointerUp, { passive: true });
    renderer.domElement.addEventListener('click', onClick);

    // ==========================================
    // 6. ANIMATION & CAMERA SMOOTH TARGETING
    // ==========================================
    let animationFrameId: number;
    let clock = new THREE.Clock();

    // Target rotation based on active milestone
    const getTargetRotationForId = (id: MilestoneId): { x: number; y: number } => {
      switch (id) {
        case 'education':
          return { x: 0.15, y: 0.85 };
        case 'certifications':
          return { x: 0.28, y: 0.05 };
        case 'experience':
          return { x: 0.12, y: -0.75 };
        default:
          return { x: 0.15, y: 0 };
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera / root group rotation toward target orientation
      const targetRot = getTargetRotationForId(activeIdRef.current);
      if (!prefersReducedMotion) {
        rootGroup.rotation.y += (targetRot.y - rootGroup.rotation.y) * 0.045;
        rootGroup.rotation.x += (targetRot.x - rootGroup.rotation.x) * 0.045;

        // Subtle gentle idle breathing of the entire orbit
        rootGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.06;

        // Slow core rotation
        coreGroup.rotation.y = elapsedTime * 0.15;
        outerRing.rotation.z = elapsedTime * 0.1;
        innerRing.rotation.z = -elapsedTime * 0.14;

        // Floating node bobbing & label billboarding toward camera
        NODES_CONFIG.forEach((cfg) => {
          const grp = nodeGroups.get(cfg.id);
          if (grp) {
            const isSelected = cfg.id === activeIdRef.current;
            // Float offset
            grp.position.y =
              cfg.yOffset +
              Math.sin(elapsedTime * 1.4 + cfg.index * 1.8) * 0.08 +
              (isSelected ? 0.15 : 0);

            // Scale emphasis for active milestone
            const targetScale = isSelected ? 1.15 : 1.0;
            grp.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08);

            // Pulse ring expansion
            const pulse = grp.getObjectByName('pulseRing') as THREE.Mesh;
            if (pulse && pulse.material) {
              const pMat = pulse.material as THREE.MeshBasicMaterial;
              if (isSelected) {
                pMat.opacity = 0.5 + Math.sin(elapsedTime * 3) * 0.35;
                pulse.scale.setScalar(1 + Math.sin(elapsedTime * 3) * 0.1);
              } else {
                pMat.opacity = 0;
              }
            }

            // Billboard label to face camera
            const label = grp.getObjectByName('labelMesh') as THREE.Mesh;
            if (label) {
              label.quaternion.copy(camera.quaternion);
            }
          }
        });
      } else {
        // Reduced motion: immediate orientation, no oscillations
        rootGroup.rotation.y = targetRot.y;
        rootGroup.rotation.x = targetRot.x;
        NODES_CONFIG.forEach((cfg) => {
          const grp = nodeGroups.get(cfg.id);
          if (grp) {
            const isSelected = cfg.id === activeIdRef.current;
            grp.scale.setScalar(isSelected ? 1.15 : 1.0);
            const label = grp.getObjectByName('labelMesh') as THREE.Mesh;
            if (label) label.quaternion.copy(camera.quaternion);
          }
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    // RESIZE HANDLING
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || 640;
      const newHeight = container.clientHeight || 420;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('mousemove', onPointerMove);
      renderer.domElement.removeEventListener('mousedown', onPointerDown);
      renderer.domElement.removeEventListener('mouseup', onPointerUp);
      renderer.domElement.removeEventListener('touchstart', onPointerDown);
      renderer.domElement.removeEventListener('touchend', onPointerUp);
      renderer.domElement.removeEventListener('click', onClick);

      // Disposal
      orbitTubeGeo.dispose();
      orbitMat.dispose();
      outerRingGeo.dispose();
      innerRingGeo.dispose();
      coreDiscGeo.dispose();
      darkMetalMat.dispose();
      goldMetalMat.dispose();
      frostedGlassMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [onSelectMilestone]);

  return (
    <div className={`relative w-full h-[380px] sm:h-[440px] lg:h-[480px] select-none ${className}`}>
      {/* 3D Canvas Mount Point */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
};
