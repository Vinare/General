export const timeline = () => {
  const timeline = document.querySelector(".timeline");

  if (timeline) {
    const timelineItems = timeline.querySelectorAll(".timeline-item");
    const title = document.querySelector(".our-time-title");
    const items = [...timelineItems, title];

    let docRect = document.body.getBoundingClientRect();
    let isDownx = true;
    let activeIndex = 0;

    const checkActive = () => {
      const docRectTemp = document.body.getBoundingClientRect();

      if (docRectTemp.y > docRect.y) {
        isDownx = false;
      } else {
        isDownx = true;
      }

      docRect = document.body.getBoundingClientRect();

      items.forEach((i, idx) => {
        const rect = i.getBoundingClientRect();

        if (
          rect &&
          rect.y > 0 &&
          rect.y < document.documentElement.clientHeight / 2
        ) {
          if (isDownx) {
            if (idx > activeIndex) {
              activeIndex = idx;
            }
            i.classList.remove("-active");
          } else {
            if (idx < activeIndex) {
              activeIndex = idx;
            }
            i.classList.remove("-active");
          }
          items[activeIndex].classList.add("-active");
        } else {
            i.classList.remove("-active");
        }
      });
    };

    document.addEventListener("scroll", checkActive);
    checkActive();
  }
};
