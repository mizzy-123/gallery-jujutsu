document.querySelectorAll(".container .box").forEach((box) => {
  const rootStyles = getComputedStyle(document.documentElement);
  box.addEventListener("mouseover", (e) => {
    const cont = e.currentTarget.closest(".container");
    if (e.currentTarget.classList.contains("box1")) {
      const layout = rootStyles.getPropertyValue("--layout-1");
      cont.style.gridTemplateColumns = layout;
    } else if (e.currentTarget.classList.contains("box2")) {
      const layout = rootStyles.getPropertyValue("--layout-2");
      cont.style.gridTemplateColumns = layout;
    } else if (e.currentTarget.classList.contains("box3")) {
      const layout = rootStyles.getPropertyValue("--layout-3");
      cont.style.gridTemplateColumns = layout;
    } else if (e.currentTarget.classList.contains("box4")) {
      const layout = rootStyles.getPropertyValue("--layout-4");
      cont.style.gridTemplateColumns = layout;
    } else if (e.currentTarget.classList.contains("box5")) {
      const layout = rootStyles.getPropertyValue("--layout-5");
      cont.style.gridTemplateColumns = layout;
    }
  });

  box.addEventListener("mouseout", (e) => {
    const cont = e.currentTarget.closest(".container");
    const layout = rootStyles.getPropertyValue("--layout-0");
    cont.style.gridTemplateColumns = layout;
  });
});
