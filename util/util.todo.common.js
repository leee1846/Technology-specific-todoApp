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
