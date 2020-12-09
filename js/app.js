const todoCategoryElements = Array.from(document.querySelectorAll(".category"));
const todoListContainer = document.querySelector("#todo-lists");

// //추가 엘리먼트 함수
// const makeTodoElement = function (contents) {
//   const todoBoxElement = document.createElement("div");
//   const todoCheckBoxElement = document.createElement("input");
//   const todoContentElement = document.createElement("p");
//   const todoIcon = document.createElement("i");
//   todoBoxElement.className = "todo-list";
//   todoCheckBoxElement.type = "checkbox";
//   todoIcon.className = "fas fa-ellipsis-h";
//   todoContentElement.textContent = contents;
//   todoBoxElement.appendChild(todoCheckBoxElement);
//   todoCheckBoxElement.after(todoContentElement);
//   todoContentElement.after(todoIcon);
//   todoListContainer.appendChild(todoBoxElement);
// };

//처음 로드시 나올 화면 구성
const defaultSelectedCategory = todoCategoryElements[0];
defaultSelectedCategory.classList.add("category-active");

//날짜 선택 구성
// const currentDatesElement = document.querySelector("#todo-dates");
const newDate = new Date();
// const getDay = newDate.getDay();
// console.log(newDate.setDate(10));
// const makeDates = function (minusDate, minusMonth, minusYear) {
//   const getDate = newDate.getDate() - minusDate;
//   const getMonth = newDate.getMonth() + 1 - minusMonth;
//   const getYear = newDate.getFullYear() - minusYear;
//   const today = `${getMonth} ${getDate}, ${getYear}`;
//   return today;
// };

// currentDatesElement.textContent = newDate.setDate(1);

//날짜 화살표 이벤트
// const dateLeftArrow = document.querySelector("#left-date");
// let dateNumber = 1;
// dateLeftArrow.addEventListener("click", function () {
//   const selectedCategoryValue = todoCategoryElements.find(function (element) {
//     return element.className !== "category";
//   }).textContent;

//   if (selectedCategoryValue === "Day") {
//     currentDatesElement.textContent = makeDates(dateNumber++, 0, 0);
//     console.log(makeDates.getDate);
//   }
// });

const daterightArrow = document.querySelector("#right-date");

//최상단 카테고리 클릭 이벤트
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

//인풋내용 추가
const inputAddButton = document.querySelector("#todo-add-container>i");
const todoInputElement = document.querySelector("#todo-add-container > input");

inputAddButton.addEventListener("click", function () {
  const contents = todoInputElement.value;
  const id = TODOS.sort((a, b) => b.id - a.id)[0].id + 1;

  const newTodo = {
    id,
    date: newDate.getDate(),
    month: newDate.getMonth() + 1,
    year: newDate.getFullYear(),
    contents,
  };

  TODOS.push(newTodo);

  makeTodoElement(newTodo.contents);

  //클릭 후 인풋창 empty하기
  todoInputElement.value = "";
});
