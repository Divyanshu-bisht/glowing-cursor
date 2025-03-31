const container = document.querySelector(".hero-bg");
const blob = container.querySelector(".oval-blur-img");
const button = document.querySelector(".button");
let isMouseOverButton = false;

container.addEventListener("mouseenter", () => {
  isMouseOverButton = false;
});

button.addEventListener("mouseenter", () => {
  isMouseOverButton = true;
  blob.style.opacity = "0";
});

button.addEventListener("mouseleave", () => {
  isMouseOverButton = false;
  blob.style.opacity = "1";
});

container.addEventListener("mouseleave", (e) => {
  if (!isMouseOverButton) {
    blob.style.opacity = "1";
    blob.style.transition = "left 0.5s ease, top 0.5s ease";
    blob.style.left = "50%";
    blob.style.top = "50%";

    setTimeout(() => {
      blob.style.transition = "";
    }, 500);
  }
});

container.addEventListener("mousemove", (e) => {
  if (!isMouseOverButton) {
    const { clientX, clientY } = e;
    const offsetX = clientX - container.getBoundingClientRect().left;
    const offsetY = clientY - container.getBoundingClientRect().top;
    blob.style.left = `${offsetX}px`;
    blob.style.top = `${offsetY}px`;
  }
});