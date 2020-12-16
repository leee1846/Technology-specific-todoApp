const todoCategoryElements = Array.from(document.querySelectorAll(".category"));
const todoListContainerElement = document.querySelector("#todo-lists");
const dateRightArrowElement = document.querySelector("#right-date");
const dateLeftArrowElement = document.querySelector("#left-date");
const inputAddButtonElement = document.querySelector("#todo-add-container>i");
const lookForTodoListsButtonElement = document.querySelector(
  "#todo-find-container>i"
);

const initApp = () => {
  //처음 로드시 나올 화면 구성
  firstDefaultActions();

  // 최상단 카테고리 클릭 이벤트
  todoCategoryElements.forEach(function (todoCategoryElement) {
    todoCategoryElement.addEventListener("click", resetTodoListByCategory);
  });

  // 인풋내용 추가
  inputAddButtonElement.addEventListener("click", addNewList);

  //클릭 additional-pocket appear/disappear이벤트
  todoListContainerElement.addEventListener("click", editTodoList);

  //화살표 클릭시 바뀌는 날짜 이벤트
  // dateRightArrow.addEventListener("click", a);

  //투두리스트 찾기 버튼 이벤트
  lookForTodoListsButtonElement.addEventListener("click", lookForTodoLists);
};

initApp();
