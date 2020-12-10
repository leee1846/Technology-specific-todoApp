const todoCategoryElements = Array.from(document.querySelectorAll(".category"));
const todoListContainer = document.querySelector("#todo-lists");
const newDate = new Date();
const thisYear = newDate.getFullYear();
const thisMonth = newDate.getMonth() + 1;
const thisDate = newDate.getDate();

//추가 엘리먼트 함수
const makeTodoElement = function (contents) {
  const todoBoxElement = document.createElement("div");
  const todoCheckBoxElement = document.createElement("input");
  const todoContentElement = document.createElement("p");
  const todoIconBox = document.createElement("div");
  const todoIcon = document.createElement("i");
  const pocketBox = document.createElement("div");
  const pocket = document.createElement("div");
  const pocketIcon = document.createElement("i");
  const pocketContent = document.createElement("span");

  pocketIcon.className = "far fa-trash-alt";
  pocket.className = "additional-box";
  pocketBox.className = "additional-pocket";
  todoBoxElement.className = "todo-list";
  todoIconBox.className = "additional-list";
  todoCheckBoxElement.type = "checkbox";
  todoIcon.className = "fas fa-ellipsis-h";
  todoIcon.classList.add("additional-icon");
  todoContentElement.textContent = contents;
  pocketContent.textContent = "Delete";

  pocket.appendChild(pocketIcon);
  pocketIcon.after(pocketContent);
  pocketBox.appendChild(pocket);
  todoIconBox.appendChild(todoIcon);
  todoIcon.after(pocketBox);
  todoBoxElement.appendChild(todoCheckBoxElement);
  todoCheckBoxElement.after(todoContentElement);
  todoContentElement.after(todoIconBox);
  todoListContainer.appendChild(todoBoxElement);
};

//처음 로드시 나올 화면 구성
const defaultSelectedCategory = todoCategoryElements[0];
defaultSelectedCategory.classList.add("category-active");

const today = `${thisMonth} ${thisDate}, ${thisYear}`;
const todayTodoElements = TODOS.filter(function (TODO) {
  return TODO.date === today;
});

todayTodoElements.forEach(function ({ contents }) {
  makeTodoElement(contents);
});

//날짜 선택 구성
// const currentDatesElement = document.querySelector("#todo-dates");
// const getDay = newDate.getDay();
// console.log(newDate.setDate(10));
// const makeDates = function (minusDate, minusMonth, minusYear) {
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

//인풋내용 추가
const inputAddButton = document.querySelector("#todo-add-container>i");
const todoInputElement = document.querySelector("#todo-add-container > input");

inputAddButton.addEventListener("click", function () {
  const contents = todoInputElement.value;
  const id = TODOS.sort((a, b) => b.id - a.id)[0].id + 1;

  const newTodo = {
    id,
    //추후 수정
    date: today,
    contents,
  };

  TODOS.push(newTodo);

  makeTodoElement(newTodo.contents);

  //클릭 후 인풋창 empty하기
  todoInputElement.value = "";
});

//클릭 additional-pocket appear/disappear이벤트
todoListContainer.addEventListener("click", function (event) {
  if (event.target.className === "fas fa-ellipsis-h additional-icon") {
    const currentAdditionalPocket = event.target.nextElementSibling;

    if (window.getComputedStyle(currentAdditionalPocket).display === "none") {
      const additionalPockets = document.querySelectorAll(".additional-pocket");
      additionalPockets.forEach(function (pocket) {
        pocket.style.display = "none";
      });

      currentAdditionalPocket.style.display = "block";
    } else {
      currentAdditionalPocket.style.display = "none";
    }
  }
});

// //리스트 삭제 이벤트
// const deleteButton = document.querySelectorAll(".additional-box");
// deleteButton.addEventListener("click", function () {
//   console.log(123);
// });
