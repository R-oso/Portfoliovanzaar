const auraCursor = document.createElement("div");
auraCursor.classList.add("aura_cursor");
document.body.appendChild(auraCursor);

document.addEventListener("mousemove", (e) => {
  auraCursor.style.left = `${e.clientX}px`;
  auraCursor.style.top = `${e.clientY}px`;
});
