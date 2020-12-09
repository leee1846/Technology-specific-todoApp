const todoCategoryElements = document.querySelectorAll(".category");
const todoListContainer = document.querySelector("#todo-lists");

//추가 엘리먼트 함수
const makeTodoElement = function (contents) {
  const todoBoxElement = document.createElement("div");
  const todoCheckBoxElement = document.createElement("input");
  const todoContentElement = document.createElement("p");
  const todoIcon = document.createElement("i");
  todoBoxElement.className = "todo-list";
  todoCheckBoxElement.type = "checkbox";
  todoIcon.className = "fas fa-ellipsis-h";
  todoContentElement.textContent = contents;
  todoBoxElement.appendChild(todoCheckBoxElement);
  todoCheckBoxElement.after(todoContentElement);
  todoContentElement.after(todoIcon);
  todoListContainer.appendChild(todoBoxElement);
};

//처음 로드시 나올 화면 구성
const defaultSelectedCategory = todoCategoryElements[0];
defaultSelectedCategory.classList.add("category-active");

//날짜 선택 구성
const currentDatesElement = document.querySelector("#todo-dates");
const getDate = new Date();
const getDay = getDate.getDay();
const today = `${
  getDate.getMonth() + 1
} ${getDate.getDate()}, ${getDate.getFullYear()}`;
currentDatesElement.textContent = today;

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
