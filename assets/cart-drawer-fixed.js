function cartDrawerFixed() {
  const cartSummaryWrapper = document.querySelector(".cart-summary-wrapper");
  const cartSummaryWrapperClone = document.querySelector(
    ".cart-summary-wrapper--clone"
  );

  cartSummaryWrapperClone.style.height =
    cartSummaryWrapper.offsetHeight + 16 + "px";
}

function updateCartWrapperOnResize() {
  function debounce(func, delay) {
    let timer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        func.apply(context, args);
      }, delay);
    };
  }

  window.addEventListener("resize", debounce(cartDrawerFixed, 300));
}

cartDrawerFixed();
updateCartWrapperOnResize();
