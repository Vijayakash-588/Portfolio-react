import { useEffect, useRef } from "react";
import * as THREE from "three";
import setCharacter from "./utils/character";
import setLighting from "./utils/lighting";
import { useLoading } from "../../context/LoadingProvider";
import {
  handleMouseMove,
  handleHeadRotation,
} from "./utils/mouseUtils";
import setAnimations from "./utils/animationUtils";
import { setProgress } from "../Loading";

type SceneVariant = "default" | "portrait";

interface SceneProps {
  variant?: SceneVariant;
}

const Scene = ({ variant = "default" }: SceneProps) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const { setLoading } = useLoading();

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let isMounted = true;
    let renderer: THREE.WebGLRenderer | null = null;
    let animFrameId: number;
    let resizeObserver: ResizeObserver | null = null;

    const init = (w: number, h: number) => {
      if (!isMounted || !mount) return;

      const scene = new THREE.Scene();
      const aspect = w / h;

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });

      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1;

      mount.appendChild(renderer.domElement);

      const camera = new THREE.PerspectiveCamera(
        14.5,
        aspect,
        0.1,
        1000
      );

      // ===== NEW CAMERA SETTINGS =====
      if (variant === "portrait") {
        camera.position.set(0, 26, 10);
        if (window.innerWidth < 768) {
          camera.zoom = 0.085; // Zoomed out on mobile so the model fits horizontally
        } else {
          camera.zoom = 0.075; // Zoomed out on desktop to show model correctly
        }
      } else if (window.innerWidth > 1200) {
        camera.position.set(0, 26, 10);
        camera.zoom = 3;
      } else {
        camera.position.set(-0.5, 22, 14);
        camera.zoom = 1.3; // Zoomed out so full model fits in the side-by-side column
      }

      camera.lookAt(0, 15, 0);
      camera.updateProjectionMatrix();
      // ===============================

      let headBone: THREE.Object3D | null = null;
      let screenLight: any | null = null;
      let mixer: THREE.AnimationMixer;
      const clock = new THREE.Clock();

      const light = setLighting(scene);

      const progress = setProgress((value: number) =>
        setLoading(value)
      );

      const { loadCharacter } = setCharacter(
        renderer,
        scene,
        camera
      );

      loadCharacter().then((gltf) => {
        if (!isMounted || !gltf) return;

        const animations = setAnimations(gltf);
        mixer = animations.mixer;

        const character = gltf.scene;
        character.position.set(0, 20, 0);

        // ===== NEW MODEL SETTINGS =====
        character.scale.setScalar(1.5);
        character.position.y = 1;

        if (window.innerWidth <= 1200) {
          character.position.x = 0;
          character.position.y = 2.5; // Centered — fits with zoomed-out camera
          character.scale.setScalar(1.5);
        }
        // ==============================

        scene.add(character);

        headBone =
          character.getObjectByName("spine006") || null;

        screenLight =
          character.getObjectByName("screenlight") || null;

        progress.loaded().then(() => {
          if (!isMounted) return;

          light.turnOnLights();
          animations.startIntro();
        });

        const onResize = () => {
          if (!mount || !renderer) return;

          const rw = mount.clientWidth;
          const rh = mount.clientHeight;

          if (rw === 0 || rh === 0) return;

          // Dynamically adjust zoom on resize to keep responsive sizing
          if (variant === "portrait") {
            if (window.innerWidth < 768) {
              camera.zoom = 0.085;
            } else {
              camera.zoom = 0.075;
            }
          }

          camera.aspect = rw / rh;
          camera.updateProjectionMatrix();

          renderer.setSize(rw, rh);
        };

        window.addEventListener("resize", onResize);

        (renderer as any)._onResize = onResize;
      });

      let mouse = { x: 0, y: 0 };

      const interpolation = {
        x: 0.1,
        y: 0.2,
      };

      const onMouseMove = (event: MouseEvent) => {
        handleMouseMove(event, (x, y) => {
          mouse = { x, y };
        });
      };

      document.addEventListener(
        "mousemove",
        onMouseMove
      );

      (renderer as any)._onMouseMove = onMouseMove;

      const animate = () => {
        animFrameId = requestAnimationFrame(animate);

        if (headBone) {
          handleHeadRotation(
            headBone,
            mouse.x,
            mouse.y,
            interpolation.x,
            interpolation.y,
            THREE.MathUtils.lerp
          );

          light.setPointLight(screenLight);
        }

        const delta = clock.getDelta();

        if (mixer) {
          mixer.update(delta);
        }

        renderer!.render(scene, camera);
      };

      animate();
    };

    resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;

        if (width > 0 && height > 0 && !renderer) {
          init(width, height);
          resizeObserver?.disconnect();
        }
      }
    });

    resizeObserver.observe(mount);

    return () => {
      isMounted = false;

      resizeObserver?.disconnect();

      cancelAnimationFrame(animFrameId);

      if (renderer) {
        const onResize = (renderer as any)._onResize;
        const onMouseMove = (renderer as any)._onMouseMove;

        if (onResize) {
          window.removeEventListener(
            "resize",
            onResize
          );
        }

        if (onMouseMove) {
          document.removeEventListener(
            "mousemove",
            onMouseMove
          );
        }

        if (mount.contains(renderer.domElement)) {
          mount.removeChild(renderer.domElement);
        }

        renderer.dispose();
      }
    };
  }, [variant, setLoading]);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        overflow: "hidden",
      }}
    />
  );
};

export default Scene;