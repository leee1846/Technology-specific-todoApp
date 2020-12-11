const todoCategoryElements = Array.from(document.querySelectorAll(".category"));
const todoListContainer = document.querySelector("#todo-lists");

//추가 엘리먼트 함수
const makeTodoElement = function (contents, id) {
  const todoBoxElement = document.createElement("div");
  const todoCheckBoxElement = document.createElement("input");
  const todoContentElement = document.createElement("p");
  const todoContentElementId = document.createElement("span");
  const todoIconBox = document.createElement("div");
  const todoIcon = document.createElement("i");
  const pocketBox = document.createElement("div");
  const pocket = document.createElement("div");
  const pocketIcon = document.createElement("i");
  const pocketContent = document.createElement("span");

  todoContentElementId.textContent = id;
  pocketIcon.className = "far fa-trash-alt";
  pocket.className = "delete-box";
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
  todoContentElement.after(todoContentElementId);
  todoContentElementId.after(todoIconBox);
  todoListContainer.appendChild(todoBoxElement);
};

//처음 로드시 나올 화면 구성

//날짜 선택 구성
const newDate = new Date();
const thisYear = newDate.getFullYear();
const thisMonth = newDate.getMonth() + 1;
let thisDate = newDate.getDate();
const thisDay = newDate.getDay();

const todoDateElement = document.querySelector("#todo-dates");
const today = `${thisMonth}, ${thisDate}, ${thisYear}`;
const defaultSelectedCategory = todoCategoryElements[0];

//첫화면 date
todoDateElement.textContent = today;
defaultSelectedCategory.classList.add("category-active");

//첫화면 todo list
const todayTodoElements = TODOS.filter(function (TODO) {
  if (
    TODO.month === thisMonth &&
    TODO.date === thisDate &&
    TODO.year === thisYear
  ) {
    return true;
  }
});

todayTodoElements.forEach(function ({ contents, id }) {
  makeTodoElement(contents, id);
});

//화살표 엘리먼트
const dateRightArrow = document.querySelector("#right-date");
const dateLeftArrow = document.querySelector("#left-date");

//최상단 카테고리 클릭 이벤트
todoCategoryElements.forEach(function (todoCategoryElement) {
  todoCategoryElement.addEventListener("click", function () {
    //상단 카테고리 click이벤트 (border-bottom) 추가
    const currentSelectedCategory = document.querySelector(".category-active");
    const todoLists = Array.from(todoListContainer.children);

    if (currentSelectedCategory) {
      currentSelectedCategory.classList.remove("category-active");
    }
    this.classList.add("category-active");

    //Year카테고리 클릭시 todolist appear
    if (this.textContent === "Year") {
      const thisYearTodoElements = TODOS.filter(function (TODO) {
        return TODO.year === thisYear;
      });

      todoLists.forEach(function (todoList) {
        todoList.remove();
      });

      thisYearTodoElements.forEach(function ({ contents, id }) {
        makeTodoElement(contents, id);
      });
    }

    //Month카테고리 클릭시 todolist appear
    if (this.textContent === "Month") {
      const thisMonthTodoElements = TODOS.filter(function (TODO) {
        return TODO.month === thisMonth;
      });

      todoLists.forEach(function (todoList) {
        todoList.remove();
      });

      thisMonthTodoElements.forEach(function ({ contents, id }) {
        makeTodoElement(contents, id);
      });
    }

    //Day카테고리 클릭시 todolist appear
    if (this.textContent === "Day") {
      const thisDayTodoElements = TODOS.filter(function (TODO) {
        return TODO.date === thisDate;
      });

      todoLists.forEach(function (todoList) {
        todoList.remove();
      });

      thisDayTodoElements.forEach(function ({ contents, id }) {
        makeTodoElement(contents, id);
      });
    }
  });
});

//인풋내용 추가
const inputAddButton = document.querySelector("#todo-add-container>i");
const todoInputElement = document.querySelector("#todo-add-container > input");

inputAddButton.addEventListener("click", function () {
  const contents = todoInputElement.value;
  let id = TODOS.sort((a, b) => b.id - a.id)[0].id + 1;

  const newTodo = {
    id,
    //추후 수정
    month: thisMonth,
    date: thisDate,
    year: thisYear,
    contents,
  };

  TODOS.push(newTodo);

  makeTodoElement(newTodo.contents, newTodo.id);

  //클릭 후 인풋창 empty하기
  todoInputElement.value = "";
});

//클릭 additional-pocket appear/disappear이벤트
todoListContainer.addEventListener("click", function (event) {
  const currentAdditionalPocket = event.target.nextElementSibling;

  if (event.target.className === "fas fa-ellipsis-h additional-icon") {
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

  //리스트 삭제 이벤트
  const deleteButton = document.querySelectorAll(".delete-box");

  deleteButton.forEach(function (deleteBtn) {
    deleteBtn.addEventListener("click", function (event) {
      event.stopPropagation();

      const currentDeleteContainer = event.currentTarget;
      const currentSelectedTodoList =
        currentDeleteContainer.parentNode.parentNode.parentNode;
      const currentListContent =
        currentDeleteContainer.parentNode.parentNode.previousSibling;

      //TODOS에서 삭제
      const newTODOS = TODOS.filter(function ({ id }) {
        return Number(currentListContent.textContent) !== id;
      });
      TODOS = [...newTODOS];

      //HTML에서 삭제
      if (currentSelectedTodoList.className === "todo-list") {
        currentSelectedTodoList.remove();
      }

      return;
    });
  });
});
