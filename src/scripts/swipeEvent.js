const SWIPE_TYPES = {
  swipe: "swipe",
  left: "swipeleft",
  right: "swiperight",
  up: "swipeup",
  down: "swipedown",
};

const SWIPE_THRESHOLD = 100;

function registerSwipeEvent(element) {
  element.addEventListener("touchstart", (e) => {
    const startingTouch = e.touches[0];
    let endingTouch = e.touches[0];
    const moveHandler = (e) => {
      endingTouch = e.touches[0];
    };
    const swipeHandler = (e) => {
      const xDelta = endingTouch.clientX - startingTouch.clientX;
      const yDelta = endingTouch.clientY - startingTouch.clientY;
      if (xDelta > SWIPE_THRESHOLD)
        element.dispatchEvent(
          new CustomEvent(SWIPE_TYPES.right, {
            detail: {
              startingTouch,
              endingTouch,
            },
          })
        );
      else if (xDelta < -SWIPE_THRESHOLD)
        element.dispatchEvent(
          new CustomEvent(SWIPE_TYPES.left, {
            detail: {
              startingTouch,
              endingTouch,
            },
          })
        );
      if (yDelta > SWIPE_THRESHOLD)
        element.dispatchEvent(
          new CustomEvent(SWIPE_TYPES.down, {
            detail: {
              startingTouch,
              endingTouch,
            },
          })
        );
      else if (yDelta < -SWIPE_THRESHOLD)
        element.dispatchEvent(
          new CustomEvent(SWIPE_TYPES.up, {
            detail: {
              startingTouch,
              endingTouch,
            },
          })
        );
      element.removeEventListener("touchmove", moveHandler);
      element.removeEventListener("touchend", swipeHandler);
    };
    element.addEventListener("touchmove", moveHandler);
    element.addEventListener("touchend", swipeHandler);
  });
}
