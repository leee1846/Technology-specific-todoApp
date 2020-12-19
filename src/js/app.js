import "../css/reset.css";
import "../css/index.css";

const initApp = () => {
  //처음 로드시 나올 화면 구성
  firstDefaultActions();

  // 최상단 카테고리 클릭 이벤트
  resetTodoListByCategoryClickHandeler();

  // 인풋내용 추가
  addNewListclickHandeler();

  //클릭 additional-pocket appear/disappear이벤트
  editTodoListClickHandeler();

  //투두리스트 찾기 버튼 이벤트
  lookForTodoListsClickHandeler();
};

initApp();
