const todoCategoryElements = Array.from(document.querySelectorAll(".category"));
const todoListContainer = document.querySelector("#todo-lists");
const dateRightArrow = document.querySelector("#right-date");
const dateLeftArrow = document.querySelector("#left-date");
const inputAddButton = document.querySelector("#todo-add-container>i");

//처음 로드시 나올 화면 구성
firstDefaultActions();

//---- 최상단 카테고리 클릭 이벤트
todoCategoryElements.forEach(function (todoCategoryElement) {
  todoCategoryElement.addEventListener("click", resetTodoListByCategory);
});
//---- 인풋내용 추가
inputAddButton.addEventListener("click", addNewList);
//----클릭 additional-pocket appear/disappear이벤트
todoListContainer.addEventListener("click", editTodoList);
