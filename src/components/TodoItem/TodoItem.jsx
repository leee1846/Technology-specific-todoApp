import * as Styled from "./TodoItem.style.js";
import MoreBox from "./../MoreBox/MoreBox";

const TodoItem = ({
  todoItem,
  currentNumber,
  index,
  isShow,
  setCurrentIndex,
  provided,
}) => {
  const onMoreButtonClick = (e, index, isShow) => {
    if (isShow) {
      setCurrentIndex(-1);
    } else {
      setCurrentIndex(index);
    }
  };

  return (
    <Styled.ListContainer
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <Styled.Left done={todoItem.done}>
        <Styled.Content>
          {currentNumber}. {todoItem.content}
        </Styled.Content>
        <Styled.Date>{todoItem.dates}</Styled.Date>
      </Styled.Left>
      <Styled.More onClick={(e) => onMoreButtonClick(e, index, isShow)} />
      <MoreBox todoItem={todoItem} isShow={isShow} />
    </Styled.ListContainer>
  );
};

export default TodoItem;
