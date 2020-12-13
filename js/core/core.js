//카테고리 클릭시 리스트 변경되는 함수 [core]
const resetTodoListByCategory = function () {
  //상단 카테고리 파란색 보더 삭제/추가
  removeCategoryBorderBottom();
  this.classList.add("category-active");

  //Year카테고리 클릭시 todolist appear
  getCategoryTodoLists(this, "Year", "year", thisYear);

  //Month카테고리 클릭시 todolist appear
  getCategoryTodoLists(this, "Month", "month", thisMonth);

  //Day카테고리 클릭시 todolist appear
  getCategoryTodoLists(this, "Day", "date", thisDate);
};

//리스트 추가 함수 [core]
const addNewList = function () {
  const todoInputElement = document.querySelector(
    "#todo-add-container > input"
  );
  const contents = todoInputElement.value;
  const id = TODOS.sort((a, b) => b.id - a.id)[0].id + 1;

  const newTodo = {
    id,
    //추후 수정
    month: thisMonth,
    date: thisDate,
    year: thisYear,
    contents,
  };
  TODOS.sort((a, b) => a.id - b.id);
  TODOS.push(newTodo);

  createTodoElement(newTodo.contents, newTodo.id);

  //클릭 후 인풋창 empty하기
  todoInputElement.value = "";
};

//투두리스트 삭제 함수 [core]
const editTodoList = function (event) {
  //투두리스트 삭제주머니 디스플레이 유/무
  todoListEditDisplayToggle(event);

  //리스트 삭제 이벤트
  deleteTodoListClickHandeler();
};

//처음에 나올 화면 함수 [core]
const firstDefaultActions = () => {
  //첫 화면 월 구하기
  firstDefaultDay();
  //첫화면 date
  const todoDateElement = document.querySelector("#todo-dates");
  todoDateElement.textContent = today;
  //첫화면 카테고리 파란선
  const defaultSelectedCategory = todoCategoryElements[0];
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
    createTodoElement(contents, id);
  });
};