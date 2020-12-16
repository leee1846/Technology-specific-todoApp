//todo리스트 추가 엘리먼트 함수 [todoList 공통]
const createTodoElement = (contents, id, year, month, date) => {
  const createTagAndAppendChild = (tagName, className, tagToAppend) => {
    childElement = document.createElement(tagName);

    className
      ? (childElement.className = className)
      : (childElement.type = "checkbox");

    tagToAppend.appendChild(childElement);
    return childElement;
  };

  const createTagAndAfter = (tagName, text, tagToAfter) => {
    childElement = document.createElement(tagName);
    if (text) {
      childElement.textContent = text;
    }
    tagToAfter.after(childElement);
    return childElement;
  };

  createTagAndAppendChild("div", "todo-list", todoListContainerElement);
  createTagAndAppendChild("input", null, childElement);
  createTagAndAfter("p", contents, childElement);
  createTagAndAfter("span", `${year}년 ${month}월 ${date}일`, childElement);
  childElement.className = "TODOS-dates";
  createTagAndAfter("span", id, childElement);
  childElement.className = "TODOS-id";
  createTagAndAfter("div", null, childElement);
  childElement.className = "additional-list";
  createTagAndAppendChild("i", null, childElement);
  childElement.className = "fas fa-ellipsis-h";
  childElement.classList.add("additional-icon");
  createTagAndAfter("div", null, childElement);
  childElement.className = "additional-pocket";
  createTagAndAppendChild("div", "delete-box", childElement);
  createTagAndAppendChild("i", "far fa-trash-alt", childElement);
  createTagAndAfter("span", "Delete", childElement);
};

//카테고리 클릭시 파란색 보더 삭제 함수 [todoList 공통]
const removeCategoryBorderBottom = () => {
  const currentSelectedCategory = document.querySelector(".category-active");
  if (currentSelectedCategory) {
    currentSelectedCategory.classList.remove("category-active");
  }
};

//기존 투두리스트 모두 삭제 함수
const deleteAllTodoLists = () => {
  const todoLists = Array.from(todoListContainerElement.children);
  todoLists.forEach(function (todoList) {
    todoList.remove();
  });
};

//카테고리 클릭시 나올 투두리스트 만들기 함수
const createTodoListToHTML = (categoryPeriod) => {
  //기존 투두리스트 모두 삭제
  deleteAllTodoLists();

  //카테고리에 맞는 투두리스트 HTML에 적용
  categoryPeriod.forEach(function ({ contents, id, year, month, date }) {
    createTodoElement(contents, id, year, month, date);
  });
};

//삭제주머니 전부 지우는 함수
const deleteAllAdditionalPocket = () => {
  const additionalPockets = document.querySelectorAll(".additional-pocket");

  additionalPockets.forEach(function (pocket) {
    pocket.style.display = "none";
  });
};

//투두리스트 삭제주머니 디스플레이 유/무 함수 [todoList 공통]
const todoListEditDisplayToggle = (event) => {
  const currentAdditionalPocket = event.target.nextElementSibling;

  if (event.target.className === "fas fa-ellipsis-h additional-icon") {
    if (window.getComputedStyle(currentAdditionalPocket).display === "none") {
      deleteAllAdditionalPocket();
      currentAdditionalPocket.style.display = "block";
    } else {
      currentAdditionalPocket.style.display = "none";
    }
  }
};

//TODOS에서 리스트 삭제 함수 [todoList 공통]
const DeleteListFromTODOS = (event) => {
  const currentDeleteContainer = event.currentTarget;
  const currentListContent =
    currentDeleteContainer.parentNode.parentNode.previousSibling;

  const newTODOS = TODOS.filter(function ({ id }) {
    return Number(currentListContent.textContent) !== id;
  });

  TODOS = [...newTODOS];
};

//HTML에서 리스트 삭제 함수 [todoList 공통]
const deleteListFromHTML = (event) => {
  const currentDeleteContainer = event.currentTarget;
  const currentSelectedTodoList =
    currentDeleteContainer.parentNode.parentNode.parentNode;

  if (currentSelectedTodoList.className === "todo-list") {
    currentSelectedTodoList.remove();
  }
};

//delete버튼 클릭시 삭제되는 이벤트 함수 [todoList 공통]
const deleteTodoListClickHandeler = () => {
  const deleteButton = document.querySelectorAll(".delete-box");
  deleteButton.forEach(function (deleteBtn) {
    deleteBtn.addEventListener("click", function (event) {
      event.stopPropagation();

      //TODOS에서 삭제
      DeleteListFromTODOS(event);

      //HTML에서 삭제
      deleteListFromHTML(event);
      return;
    });
  });
};

//화면 월단위태그 HTML에 붙이기  [todoList 공통]
const todoDateElement = document.querySelector("#today-category");
let monthNameNumber = thisMonth - 1;

const changeDateElementTextToMonth = () => {
  todoDateElement.textContent = `${thisYear}년 ${thisMonth}월`;
};

changeDateElementTextToDate = () => {
  todoDateElement.textContent = `${thisYear}년 ${thisMonth}월 ${thisDate}일`;
};

const changeDateElementTextToYear = () => {
  todoDateElement.textContent = `${thisYear}년`;
};

// todoListContainer
