//todo리스트 추가 엘리먼트 함수 [todoList 공통]
const createTodoElement = (contents, id) => {
  let childElement;

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

  createTagAndAppendChild("div", "todo-list", todoListContainer);
  createTagAndAppendChild("input", null, childElement);
  createTagAndAfter("p", contents, childElement);
  createTagAndAfter("span", id, childElement);
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

//카테고리 클릭시 파란색 보더 삭제 함수 [todo 공통]
const removeCategoryBorderBottom = () => {
  const currentSelectedCategory = document.querySelector(".category-active");
  if (currentSelectedCategory) {
    currentSelectedCategory.classList.remove("category-active");
  }
};

//TODOS에서 카테고리 이름과 같은 리스트 요소 가져온 후 엘리먼트 만들기 [todo 공통]
const getListOfSelectedCategory = (timeFromTODOS, thisTime) => {
  const SelectedListFromTODOS = TODOS.filter(function (TODO) {
    return TODO[timeFromTODOS] === thisTime;
  });

  SelectedListFromTODOS.forEach(function ({ contents, id }) {
    createTodoElement(contents, id);
  });
};

//화면에 기존 카테고리 todolists지우기 [todo 공통]
const editPreviousLists = () => {
  const todoLists = Array.from(todoListContainer.children);
  todoLists.forEach(function (todoList) {
    todoList.remove();
  });
};

//카테고리에 맞는 리스트 가져오기 [todo 공통]
const getCategoryTodoLists = (
  clickedCategory,
  categoryName,
  timeFromTODOS,
  thisTime
) => {
  if (clickedCategory.textContent === categoryName) {
    editPreviousLists();

    getListOfSelectedCategory(timeFromTODOS, thisTime);
  }
};
