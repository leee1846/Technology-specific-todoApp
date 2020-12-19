import { thisYear, thisMonth, thisDate } from "./util.common.js";
import { TODOS } from "../../data/todo.data.js";

//todo리스트 추가 엘리먼트 함수 [todoList 공통]
const todoListContainerElement = document.querySelector("#todo-lists");
const createTodoElement = (contents, id, year, month, date) => {
  const _createTagAndAppendChild = (tagName, className, tagToAppend) => {
    childElement = document.createElement(tagName);

    if (className) {
      childElement.className = className;
    }

    tagToAppend.appendChild(childElement);
    return childElement;
  };

  const _createTagAndAfter = (tagName, text, tagToAfter) => {
    childElement = document.createElement(tagName);
    if (text) {
      childElement.textContent = text;
    }
    tagToAfter.after(childElement);
    return childElement;
  };

  const todoListContainerTag = _createTagAndAppendChild(
    "div",
    "todo-list",
    todoListContainerElement
  );
  const todoListCheckBoxTag = _createTagAndAppendChild(
    "input",
    null,
    todoListContainerTag
  );
  todoListCheckBoxTag.type = "checkbox";
  const todoListContentTag = _createTagAndAfter(
    "p",
    contents,
    todoListCheckBoxTag
  );
  const todoListDateContentTag = _createTagAndAfter(
    "span",
    `${year}년 ${month}월 ${date}일`,
    todoListContentTag
  );
  todoListDateContentTag.className = "TODOS-dates";
  const todoListIdTag = _createTagAndAfter("span", id, childElement);
  todoListIdTag.className = "TODOS-id";
  const todoListEditContainerTag = _createTagAndAfter(
    "div",
    null,
    todoListIdTag
  );
  todoListEditContainerTag.className = "additional-list";
  const todoListTripleDotIconTag = _createTagAndAppendChild(
    "i",
    null,
    todoListEditContainerTag
  );
  todoListTripleDotIconTag.className = "fas fa-ellipsis-h";
  todoListTripleDotIconTag.classList.add("additional-icon");
  const todoListEditPocketTag = _createTagAndAfter(
    "div",
    null,
    todoListTripleDotIconTag
  );
  todoListEditPocketTag.className = "additional-pocket";
  const todoListEditIconContainerTag = _createTagAndAppendChild(
    "div",
    "delete-box",
    todoListEditPocketTag
  );
  const todoListEditIconTag = _createTagAndAppendChild(
    "i",
    "far fa-trash-alt",
    todoListEditIconContainerTag
  );
  const todoListEditContentTag = _createTagAndAfter(
    "span",
    "Delete",
    todoListEditIconTag
  );
  return;
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
const dateCollection = {
  thisYear,
  thisMonth,
  thisDate,
};

const changeDateElementTextToMonth = () => {
  todoDateElement.textContent = `${dateCollection.thisYear}년 ${dateCollection.thisMonth}월`;
};

const changeDateElementTextToDate = () => {
  todoDateElement.textContent = `${dateCollection.thisYear}년 ${dateCollection.thisMonth}월 ${dateCollection.thisDate}일`;
};

const changeDateElementTextToYear = () => {
  todoDateElement.textContent = `${dateCollection.thisYear}년`;
};

//카테고리클릭 후 투두리스트변경과 날짜변경 함수
const changeTodoListOfCategory = function (categoryName) {
  let thisDateTodoElements;
  const isYear = thisYear;
  const isMonth = thisMonth;
  const isDate = thisDate;

  if (categoryName.textContent === "Year") {
    thisDateTodoElements = TODOS.filter(function (TODO) {
      return TODO.year === isYear;
    });
    createTodoListToHTML(thisDateTodoElements);
    changeDateElementTextToYear();
  }
  if (categoryName.textContent === "Month") {
    thisDateTodoElements = TODOS.filter(
      (TODO) => TODO.month === isMonth && TODO.year === isYear
    );
    createTodoListToHTML(thisDateTodoElements);
    changeDateElementTextToMonth();
  }
  if (categoryName.textContent === "Day") {
    thisDateTodoElements = TODOS.filter(
      (TODO) =>
        TODO.month === isMonth && TODO.date === isDate && TODO.year === isYear
    );
    createTodoListToHTML(thisDateTodoElements);
    changeDateElementTextToDate();
  }
};

export {
  createTodoElement,
  removeCategoryBorderBottom,
  deleteAllTodoLists,
  todoListEditDisplayToggle,
  deleteTodoListClickHandeler,
  changeDateElementTextToDate,
  changeTodoListOfCategory,
};
