import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Animates the character model on scroll
export const setCharTimeline = (character) => {
  if (!character) return;

  gsap.fromTo(
    character.rotation,
    { y: -0.3 },
    {
      y: 0.3,
      ease: "none",
      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "bottom center",
        scrub: 1.5,
      },
    }
  );
};

// Animates all sections on scroll
export const setAllTimeline = () => {
  // Fade in sections on scroll
  gsap.utils.toArray(".section-reveal").forEach((section) => {
    gsap.fromTo(
      section,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
};
