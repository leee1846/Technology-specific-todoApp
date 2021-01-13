import * as Styled from "./TodoLists.style";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleDeleteList,
  deleteList,
  toggleDoneList,
} from "../../store/index";

function TodoLists() {
  const dispatch = useDispatch();

  let todos = useSelector((state) => {
    return state.todoReducer;
  });

  const moreOnClick = (currentId) => {
    dispatch(toggleDeleteList({ id: currentId }));
  };

  const doneOnClick = (currentId) => {
    dispatch(toggleDoneList({ id: currentId }));
  };

  const onDelete = (currentId) => {
    dispatch(deleteList({ id: currentId }));
  };

  return (
    <Styled.ListContainer>
      {todos.map((data) => {
        return (
          <Styled.List done={data.done}>
            <Styled.ListLeft>
              <input type='checkbox' />
              <Styled.TodoContent done={data.done}>
                {data.content}
                <span>
                  {data.year}년 {data.month}월 {data.date}일
                </span>
              </Styled.TodoContent>
            </Styled.ListLeft>
            <Styled.MoreIcon
              fontSize='small'
              onClick={(e) => moreOnClick(data.id)}
            />
            <Styled.MoreContainer clicked={data.clicked}>
              <Styled.DeleteBox onClick={() => onDelete(data.id)}>
                <Styled.DeleteIcon fontSize='small' />
                <p>Delete</p>
              </Styled.DeleteBox>
              <Styled.DoneBox onClick={() => doneOnClick(data.id)}>
                <Styled.CheckIcon fontSize='small' />
                <p>Done</p>
              </Styled.DoneBox>
            </Styled.MoreContainer>
          </Styled.List>
        );
      })}
    </Styled.ListContainer>
  );
}

export default TodoLists;
