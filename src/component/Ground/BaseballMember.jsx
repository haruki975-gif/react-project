import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const StyledMapDiv = styled.div`
  width: 800px;
  margin: 35px auto;
  min-height: ${(props) => (props.height ? props.height : "600px;")};
  height: auto;
  padding: 20px;
  background-color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(151, 151, 151, 0.6);
`;
const StyledContent = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  padding: 20px 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Tab = styled.div`
  display: flex;
  margin-top: 20px;
`;
const TabButton = styled.div`
  padding: 10px 70px;
  background-color: ${(props) => (props.active ? 'rgb(44, 44, 44)' : '#ccc')};
  color: white;
  border: 1px solid #bbb;
  cursor: pointer;
  &:hover {
    background-color:rgb(94, 94, 94);
  }
`;

// 선수 세부 틀
const PlayerContainer = styled.div`
  border: 1px solid #ccc;
  width: 32%;
  height: 350px;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;
const PlayerNo = styled.div`
  font-size: 18px; 
  float: left;
`;
const PlayerPosition = styled.div`
  font-size: 18px;
  color: lightgray;
  float: right;
`;
const PlayerName = styled.h3`
  margin-top: 10px;
  margin-bottom: 0px;
  font-size: 21px;
  font-weight: bold;
`;
const PlayerImg = styled.div`
  width: 200px;
  height: 240px;
  border: 1px solid #ccc;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PlayerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


const BaseballMember = () => {
  const [activeTab, setActiveTab] = useState("투수");
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost/players")
    .then((response) => {
      //console.log(response.data);
      setPlayers(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return(
    <>
      <StyledMapDiv>
        <h2><a style={{color:"crimson"}}>SSG LANDERS PLAYERS</a> 선수 소개</h2>

        <Tab>
          <TabButton active={activeTab === '투수'} onClick={() => setActiveTab('투수')}>
            투수
          </TabButton>
          <TabButton active={activeTab === '포수'} onClick={() => setActiveTab('포수')}>
            포수
          </TabButton>
          <TabButton active={activeTab === '내야수'} onClick={() => setActiveTab('내야수')}>
            내야수
          </TabButton>
          <TabButton active={activeTab === '외야수'} onClick={() => setActiveTab('외야수')}>
            외야수
          </TabButton>
        </Tab>

        {activeTab === '투수' && (
          <StyledContent>
            {players
              .filter((player) => player.playerPosition === '투수')
              .map((player) => (
                <PlayerContainer key={player.playerIdx}>
                  <PlayerNo>NO. {player.playerNo}</PlayerNo> 
                  <PlayerPosition>{player.playerPosition}</PlayerPosition><br />
                  <PlayerName>{player.playerName}</PlayerName><br />
                  <PlayerImg key={player.playerIdx}>
                      <PlayerImage src={`./image/p/p_${player.playerNo}.png`} alt={player.playerName} />
                  </PlayerImg>
                </PlayerContainer>
            ))}
          </StyledContent>
        )}

        {activeTab === '포수' && (
          <StyledContent>
            {players
              .filter((player) => player.playerPosition === '포수')
              .map((player) => (
                <PlayerContainer key={player.playerIdx}>
                  <PlayerNo>NO. {player.playerNo}</PlayerNo> 
                  <PlayerPosition>{player.playerPosition}</PlayerPosition><br />
                  <PlayerName>{player.playerName}</PlayerName><br />
                  <PlayerImg key={player.playerIdx}>
                      <PlayerImage src={`./image/c/c_${player.playerNo}.png`} alt={player.playerName} />
                  </PlayerImg>
                </PlayerContainer>
            ))}
          </StyledContent>
        )}

        {activeTab === '내야수' && (
          <StyledContent>
            {players
              .filter((player) => player.playerPosition === '내야수')
              .map((player) => (
                <PlayerContainer key={player.playerIdx}>
                  <PlayerNo>NO. {player.playerNo}</PlayerNo> 
                  <PlayerPosition>{player.playerPosition}</PlayerPosition><br />
                  <PlayerName>{player.playerName}</PlayerName><br />
                  <PlayerImg key={player.playerIdx}>
                      <PlayerImage src={`./image/i/i_${player.playerNo}.png`} alt={player.playerName} />
                  </PlayerImg>
                </PlayerContainer>
            ))}
          </StyledContent>
        )}

        {activeTab === '외야수' && (
          <StyledContent>
            {players
              .filter((player) => player.playerPosition === '외야수')
              .map((player) => (
                <PlayerContainer key={player.playerIdx}>
                  <PlayerNo>NO. {player.playerNo}</PlayerNo> 
                  <PlayerPosition>{player.playerPosition}</PlayerPosition><br />
                  <PlayerName>{player.playerName}</PlayerName><br />
                  <PlayerImg key={player.playerIdx}>
                      <PlayerImage src={`./image/o/o_${player.playerNo}.png`} alt={player.playerName} />
                  </PlayerImg>
                </PlayerContainer>
            ))}
          </StyledContent>
        )}
      </StyledMapDiv>
    </>
  );
};

export default BaseballMember;
