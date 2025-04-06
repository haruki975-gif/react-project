import styled from "styled-components";

const StyledMain = styled.div`
  width: 80%;
  height: 200px;
  margin: auto;
`;

const StyledDiv2 = styled.div`
  display: flex;
  gap: gap;
  margin: auto;
`;

const StyledImg = styled.div`
  flex: 1;
  padding: 30px;
  background-color: #121212;
  text-align: left;
  margin: 10px;
  color: white;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background: rgba(20, 20, 20, 0.8);
  }
`;

const Home = () => {
  return (
    <>
      <StyledMain>
        <h2>랜더스 바로가기</h2>
        <StyledDiv2>
          <StyledImg 
            onClick={() => window.open("https://www.ticketlink.co.kr/sports#reservation", "_blank")}>
            SSG랜더스 티켓예매<br/>바로가기
          </StyledImg>
          <StyledImg 
            onClick={() => window.open("https://landers.family.ssg.com/", "_blank")}>
            SSG랜더스 온라인샵<br/>by emart
          </StyledImg>
          <StyledImg
            onClick={() => window.open("https://store.ssglanders.com/", "_blank")}>
            SSG랜더스 온라인샵<br/>by hyungji
          </StyledImg>
          <StyledImg
            onClick={() => window.open("https://www.mhstadium.co.kr/fmcs/1", "_blank")}>
            인천 문학경기장<br/>대관 홈페이지 바로가기
          </StyledImg>
        </StyledDiv2>
      </StyledMain>
    </>
  );
};

export default Home;
