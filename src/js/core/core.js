import { TODOS } from "../../data/todo.data";
import { thisYear, thisMonth, thisDate } from "../util/util.common.js";
import {
  createTodoElement,
  removeCategoryBorderBottom,
  deleteAllTodoLists,
  todoListEditDisplayToggle,
  deleteTodoListClickHandeler,
  changeDateElementTextToDate,
  changeTodoListOfCategory,
} from "../util/util.todo.common.js";

//처음에 나올 화면 함수 [core]
const todoCategoryElements = Array.from(document.querySelectorAll(".category"));
const firstDefaultActions = () => {
  const isYear = thisYear;
  const isMonth = thisMonth;
  const isDate = thisDate;

  //첫 화면 Day 구하기
  changeDateElementTextToDate();

  //첫화면 카테고리 파란선
  const defaultSelectedCategory = todoCategoryElements[0];
  defaultSelectedCategory.classList.add("category-active");

  //첫화면 todo list
  const todayTodoElements = TODOS.filter(
    (TODO) =>
      TODO.month === isMonth && TODO.date === isDate && TODO.year === isYear
  );
  todayTodoElements.forEach(function ({ contents, id, year, month, date }) {
    createTodoElement(contents, id, year, month, date);
  });
};

//카테고리 클릭시 리스트 변경되는 함수 [core]
const resetTodoListByCategoryClickHandeler = () => {
  todoCategoryElements.forEach(function (todoCategoryElement) {
    todoCategoryElement.addEventListener("click", function (event) {
      //상단 카테고리 파란색 보더 삭제/추가
      removeCategoryBorderBottom();
      this.classList.add("category-active");

      //카테고리 클릭시 todolist appear
      changeTodoListOfCategory(this);
    });
  });
};

//리스트 추가 함수 [core]
const addNewListclickHandeler = () => {
  const inputAddButtonElement = document.querySelector("#todo-add-container>i");
  inputAddButtonElement.addEventListener("click", () => {
    const todoInputElement = document.querySelector(
      "#todo-add-container > input"
    );
    const contents = todoInputElement.value;
    const id = TODOS.findIndex((TODO) => {
      return TODO.id === TODOS[TODOS.length - 1].id;
    });

    const isYear = thisYear;
    const isMonth = thisMonth;
    const isDate = thisDate;
    const newTodo = {
      id: id + 2,
      //추후 수정
      month: isMonth,
      date: isDate,
      year: isYear,
      contents,
    };

    //TODOS로 추가
    TODOS.push(newTodo);

    //HTML로 추가
    createTodoElement(
      newTodo.contents,
      newTodo.id,
      newTodo.year,
      newTodo.month,
      newTodo.date
    );

    //클릭 후 인풋창 empty하기
    todoInputElement.value = "";
  });
};

//투두리스트 삭제 함수 [core]
const editTodoListClickHandeler = () => {
  const todoListContainerTag = document.querySelector("#todo-lists");
  todoListContainerTag.addEventListener("click", (event) => {
    //투두리스트 삭제주머니 디스플레이 유/무
    todoListEditDisplayToggle(event);

    //리스트 삭제 클릭이벤트
    deleteTodoListClickHandeler();
  });
};

//투두리스트 찾기 함수
const lookForTodoListsClickHandeler = () => {
  const lookForTodoListsButtonElement = document.querySelector(
    "#todo-find-container>i"
  );
  lookForTodoListsButtonElement.addEventListener("click", () => {
    const lookForInput = document.querySelector("#todo-find-container>input");
    const lookForInpuValue = lookForInput.value;

    //TODOS에 찾기인풋과 같은 리스트 모음
    const foundTodoLists = TODOS.filter(
      (TODO) => TODO.contents === lookForInpuValue
    );

    //리스트모음이 존재할시 html에 리스트 올리기
    if (foundTodoLists.length > 0) {
      deleteAllTodoLists();
      foundTodoLists.forEach(({ contents, id, year, month, date }) => {
        createTodoElement(contents, id, year, month, date);
      });
    } else {
      //리스트모음이 없다면 알림
      window.alert("검색된 todo리스트가 존재하지 않습니다.");
    }
    //체크 후 인풋 포커스 없애기
    lookForInput.value = "";
  });
};

export {
  firstDefaultActions,
  resetTodoListByCategoryClickHandeler,
  addNewListclickHandeler,
  editTodoListClickHandeler,
  lookForTodoListsClickHandeler,
};
