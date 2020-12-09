const todoCategoryElements = document.querySelectorAll(".category");

todoCategoryElements.forEach(function (todoCategoryElement) {
  todoCategoryElement.addEventListener("click", function () {
    //상단 카테고리 click이벤트 (border-bottom) 추가
    const currentSelectedCategory = document.querySelector(".category-active");

    if (currentSelectedCategory) {
      currentSelectedCategory.classList.remove("category-active");
    }
    this.classList.add("category-active");
  });
});
