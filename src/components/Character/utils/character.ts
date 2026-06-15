import * as THREE from "three";
import { GLTF, GLTFLoader } from "three-stdlib";
import { setAllTimeline } from "../../utils/GsapScroll";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();

  const loadCharacter = () => {
    return new Promise<GLTF | null>((resolve, reject) => {
      loader.load(
        "/models/character.recovered.glb",
        async (gltf) => {
          const character = gltf.scene;
          await renderer.compileAsync(character, camera, scene);

          // Show ALL meshes — no whitelist, so face/eyes are always visible.
          // Only force opacity=1 to override any animation-driven 0-opacity.
          const meshNames: string[] = [];
          character.traverse((child: any) => {
            if (child.isMesh) {
              const mesh = child as THREE.Mesh;
              meshNames.push(child.name);
              child.visible = true;
              child.castShadow = true;
              child.receiveShadow = true;
              mesh.frustumCulled = false; // Disable frustum culling for testing

              const materials = Array.isArray(mesh.material)
                ? mesh.material
                : [mesh.material];
              
              const matInfo = materials.map((mat: any) => {
                if (!mat) return "null";
                return {
                  name: mat.name,
                  opacity: mat.opacity,
                  transparent: mat.transparent,
                  depthWrite: mat.depthWrite,
                  color: mat.color ? mat.color.getHexString() : "none",
                  visible: mat.visible,
                };
              });

              if (!child.name.startsWith("KEYS") && !child.name.startsWith("Keyboard")) {
                console.log(`[Mesh Detail] ${child.name}:`, {
                  type: child.type,
                  visible: child.visible,
                  materialCount: materials.length,
                  materials: matInfo,
                  morphTargetInfluences: child.morphTargetInfluences,
                });
              }

              // Only override opacity — leave transparent/depthWrite untouched
              // so we don't break materials that need alpha blending (hair, eyes)
              materials.forEach((mat: any) => {
                if (mat && mat.opacity < 0.95) {
                  mat.opacity = 1;
                  mat.needsUpdate = true;
                }
              });
            }
          });
          console.log("[Character] Mesh names:", meshNames);

          resolve(gltf);
          setAllTimeline();
          const footR = character.getObjectByName("footR");
          const footL = character.getObjectByName("footL");
          if (footR) footR.position.y = 3.36;
          if (footL) footL.position.y = 3.36;
        },
        undefined,
        (error) => {
          console.error("Error loading GLTF model:", error);
          reject(error);
        }
      );
    });
  };

  return { loadCharacter };
};

export default setCharacter;

