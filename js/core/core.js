//카테고리 클릭시 리스트 변경되는 함수 [core]
const resetTodoListByCategory = function () {
  //상단 카테고리 파란색 보더 삭제/추가
  removeCategoryBorderBottom();
  this.classList.add("category-active");

  //Year카테고리 클릭시 todolist appear
  if (this.textContent === "Year") {
    const thisYearTodoElements = TODOS.filter(function (TODO) {
      return TODO.year === thisYear;
    });

    createTodoListToHTML(thisYearTodoElements);

    changeDateElementTextToYear();
  }

  //Month카테고리 클릭시 todolist appear
  if (this.textContent === "Month") {
    const thisMonthTodoElements = TODOS.filter(
      (TODO) => TODO.month === thisMonth && TODO.year === thisYear
    );

    createTodoListToHTML(thisMonthTodoElements);

    changeDateElementTextToMonth();
  }

  //Day카테고리 클릭시 todolist appear
  if (this.textContent === "Day") {
    const todayTodoElements = TODOS.filter(
      (TODO) =>
        TODO.month === thisMonth &&
        TODO.date === thisDate &&
        TODO.year === thisYear
    );
    createTodoListToHTML(todayTodoElements);

    changeDateElementTextToDate();
  }
};

//리스트 추가 함수 [core]
const addNewList = () => {
  const todoInputElement = document.querySelector(
    "#todo-add-container > input"
  );
  const contents = todoInputElement.value;
  const id = TODOS.sort((a, b) => b.id - a.id)[0].id + 1;
  console.log(monthNameNumber);
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
  createTodoElement(
    newTodo.contents,
    newTodo.id,
    newTodo.year,
    newTodo.month,
    newTodo.date
  );

  //클릭 후 인풋창 empty하기
  todoInputElement.value = "";
};

//투두리스트 삭제 함수 [core]
const editTodoList = (event) => {
  //투두리스트 삭제주머니 디스플레이 유/무
  todoListEditDisplayToggle(event);

  //리스트 삭제 클릭이벤트
  deleteTodoListClickHandeler();
};

//처음에 나올 화면 함수 [core]
const firstDefaultActions = () => {
  //첫 화면 Day 구하기
  changeDateElementTextToDate();

  //첫화면 카테고리 파란선
  const defaultSelectedCategory = todoCategoryElements[0];
  defaultSelectedCategory.classList.add("category-active");

  //첫화면 todo list
  const todayTodoElements = TODOS.filter(
    (TODO) =>
      TODO.month === thisMonth &&
      TODO.date === thisDate &&
      TODO.year === thisYear
  );
  todayTodoElements.forEach(function ({ contents, id, year, month, date }) {
    createTodoElement(contents, id, year, month, date);
  });
};

//투두리스트 찾기 함수
const lookForTodoLists = () => {
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
      createTodoElement2(contents, id, year, month, date);
    });
  }

  //리스트모음이 없다면 알림
  window.alert("검색된 todo리스트가 존재하지 않습니다.");
};

//보류 클로저 질문????????
//isDate가 함수안으로 들어오고 클로저 사용방법?
let isDate = thisDate;
a = () => {
  const categoryName = document.querySelector(".category-active").textContent;
  if (categoryName === "Day") {
    todoDateElement.textContent =
      (isDate -= 1) + ", " + Months[monthNameNumber] + " " + thisYear;
    console.log(thisDate);
  }
  console.log(TODOS);
};
