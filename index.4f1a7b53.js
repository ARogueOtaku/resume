const SWIPE_TYPES={swipe:"swipe",left:"swipeleft",right:"swiperight",up:"swipeup",down:"swipedown"},SWIPE_THRESHOLD=100;function registerSwipeEvent(t){t.addEventListener("touchstart",(e=>{const n=e.touches[0];let i=e.touches[0];const o=t=>{i=t.touches[0]},s=e=>{const c=i.clientX-n.clientX,E=i.clientY-n.clientY;c>100?t.dispatchEvent(new CustomEvent(SWIPE_TYPES.right,{detail:{startingTouch:n,endingTouch:i}})):c<-100&&t.dispatchEvent(new CustomEvent(SWIPE_TYPES.left,{detail:{startingTouch:n,endingTouch:i}})),E>100?t.dispatchEvent(new CustomEvent(SWIPE_TYPES.down,{detail:{startingTouch:n,endingTouch:i}})):E<-100&&t.dispatchEvent(new CustomEvent(SWIPE_TYPES.up,{detail:{startingTouch:n,endingTouch:i}})),t.removeEventListener("touchmove",o),t.removeEventListener("touchend",s)};t.addEventListener("touchmove",o),t.addEventListener("touchend",s)}))}