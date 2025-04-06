import {
  Container,
  Title,
  Button,
  BoardOuter,
  BoardTitle,
  BoardWriter,
  Board,
  CreateDate,
} from "../styles/Styles";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BoardList = () => {

  const navi = useNavigate();
  const [boards, setBoards] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {

    axios.get("http://localhost/boards", {
      params: {
        page : page,
      },
    })
    .then((response) => {
      console.log(response);
      setBoards([...boards, ...response.data]);
      if(response.data.length < 5){
        setHasMore(false);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }, [page]);


  const handleMore = () => {
    setPage((page) => page + 1);
  }

  return (
    <Container height="600px">
      <Title>게시판</Title>
      <BoardOuter>
        <Button onClick={() => navi("/boardForm")}>새 글 작성</Button>
        {boards.map((board) => (
          <Board 
            key={board.boardNo} 
            onClick={() => navi(`/boards/${board.boardNo}`)}
          >
            <BoardTitle>{board.boardTitle}</BoardTitle>
            <BoardWriter>{board.boardWriter}</BoardWriter>
            <CreateDate>{board.createDate}</CreateDate>
          </Board>
        ))}
        { hasMore && <Button onClick={handleMore}>더보기</Button>}
      </BoardOuter>
    </Container>
  );
};
export default BoardList;