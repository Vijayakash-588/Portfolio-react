import * as THREE from "three";
import { GLTF } from "three-stdlib";
import { eyebrowBoneNames, typingBoneNames } from "../../../data/boneData";

const setAnimations = (gltf: GLTF) => {
  let character = gltf.scene;
  let mixer = new THREE.AnimationMixer(character);

  // Cache the filtered intro clip inside the animations guard so we never
  // call .find() on a potentially null/undefined gltf.animations.
  let cachedIntroClip: THREE.AnimationClip | null = null;

  if (gltf.animations && gltf.animations.length > 0) {
    const rawIntro = gltf.animations.find(
      (clip) => clip.name === "introAnimation"
    );
    // Strip opacity/morph tracks so face & eyes aren't hidden by the animation
    cachedIntroClip = rawIntro ? filterOutOpacityTracks(rawIntro) : null;

    if (cachedIntroClip) {
      const introAction = mixer.clipAction(cachedIntroClip);
      introAction.setLoop(THREE.LoopOnce, 1);
      introAction.clampWhenFinished = true;
      introAction.play();
    }

    const clipNames = ["key1", "key2", "key5", "key6"];
    clipNames.forEach((name) => {
      const clip = THREE.AnimationClip.findByName(gltf.animations, name);
      if (clip) {
        const action = mixer?.clipAction(clip);
        action!.play();
        action!.timeScale = 1.2;
      } else {
        console.error(`Animation "${name}" not found`);
      }
    });

    let typingAction: THREE.AnimationAction | null = null;
    typingAction = createBoneAction(gltf, mixer, "typing", typingBoneNames);
    if (typingAction) {
      typingAction.enabled = true;
      typingAction.play();
      typingAction.timeScale = 1.2;
    }
  }

  function startIntro() {
    // Reuse the same cached clip — same UUID → same mixer action (no conflicts)
    if (cachedIntroClip) {
      const introAction = mixer.clipAction(cachedIntroClip);
      introAction.clampWhenFinished = true;
      introAction.reset().play();
    }
    setTimeout(() => {
      if (!gltf.animations || !gltf.animations.length) return;
      const blink = gltf.animations.find((clip) => clip.name === "Blink");
      if (blink) mixer.clipAction(blink).play().fadeIn(0.5);
    }, 2500);
  }

  function hover(gltf: GLTF, hoverDiv: HTMLDivElement) {
    let eyeBrowUpAction = createBoneAction(
      gltf,
      mixer,
      "browup",
      eyebrowBoneNames
    );
    let isHovering = false;
    if (eyeBrowUpAction) {
      eyeBrowUpAction.setLoop(THREE.LoopOnce, 1);
      eyeBrowUpAction.clampWhenFinished = true;
      eyeBrowUpAction.enabled = true;
    }
    const onHoverFace = () => {
      if (eyeBrowUpAction && !isHovering) {
        isHovering = true;
        eyeBrowUpAction.reset();
        eyeBrowUpAction.enabled = true;
        eyeBrowUpAction.setEffectiveWeight(4);
        eyeBrowUpAction.fadeIn(0.5).play();
      }
    };
    const onLeaveFace = () => {
      if (eyeBrowUpAction && isHovering) {
        isHovering = false;
        eyeBrowUpAction.fadeOut(0.6);
      }
    };
    if (!hoverDiv) return;
    hoverDiv.addEventListener("mouseenter", onHoverFace);
    hoverDiv.addEventListener("mouseleave", onLeaveFace);
    return () => {
      hoverDiv.removeEventListener("mouseenter", onHoverFace);
      hoverDiv.removeEventListener("mouseleave", onLeaveFace);
    };
  }

  return { mixer, startIntro, hover };
};

const createBoneAction = (
  gltf: GLTF,
  mixer: THREE.AnimationMixer,
  clip: string,
  boneNames: string[]
): THREE.AnimationAction | null => {
  const AnimationClip = THREE.AnimationClip.findByName(gltf.animations, clip);
  if (!AnimationClip) {
    console.error(`Animation "${clip}" not found in GLTF file.`);
    return null;
  }
  const filteredClip = filterAnimationTracks(AnimationClip, boneNames);
  return mixer.clipAction(filteredClip);
};

const filterAnimationTracks = (
  clip: THREE.AnimationClip,
  boneNames: string[]
): THREE.AnimationClip => {
  const filteredTracks = clip.tracks.filter((track) =>
    boneNames.some((boneName) => track.name.includes(boneName))
  );
  return new THREE.AnimationClip(
    clip.name + "_filtered",
    clip.duration,
    filteredTracks
  );
};

/**
 * Removes material opacity / morphTarget tracks from an animation clip.
 * This prevents the intro animation from hiding face/eyes meshes.
 */
const filterOutOpacityTracks = (
  clip: THREE.AnimationClip
): THREE.AnimationClip => {
  const allowed = clip.tracks.filter((track) => {
    const name = track.name.toLowerCase();
    return (
      !name.includes(".material.opacity") &&
      !name.includes(".morphtargetinfluences") &&
      !name.includes("opacity") &&
      !name.includes("visible")
    );
  });
  return new THREE.AnimationClip(
    clip.name + "_no_opacity",
    clip.duration,
    allowed
  );
};

export default setAnimations;
