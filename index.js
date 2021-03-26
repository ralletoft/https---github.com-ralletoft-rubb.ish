gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ duration: 0 });
// ScrollTrigger.defaults({ markers: true });

// const sections = gsap.utils.toArray("section");
const sections = [...document.querySelectorAll("[data-hue]")];

sections.forEach((section, i) => {
  const hue = section.dataset.hue;

  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    onEnter: () => gsap.to("body", { "--hue": hue }),
    onEnterBack: () => gsap.to("body", { "--hue": hue }),
  });
});
