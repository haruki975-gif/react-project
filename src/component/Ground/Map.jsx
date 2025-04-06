import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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
const StyledMap = styled.div`
  width: 100%;
  height: 400px;
  margin: auto;
  border-radius: 15px;
  box-sizing: border-box;
`;
const StyledContent = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  padding: 20px;
`;
const Tab = styled.div`
  display: flex;
  margin-top: 20px;
`;
const TabButton = styled.div`
  padding: 10px 20px;
  background-color: ${(props) => (props.active ? 'rgb(44, 44, 44)' : '#ccc')};
  color: white;
  border: 1px solid #bbb;
  cursor: pointer;
  &:hover {
    background-color:rgb(94, 94, 94);
  }
`;

const Map = () => {
  const [activeTab, setActiveTab] = useState('bus');

  useEffect(() => {
    const loadKakaoMap = () => {
      if (window.kakao && window.kakao.maps) {
        const mapContainer = document.getElementById('map');
        const mapOption = {
          center: new window.kakao.maps.LatLng(37.437170, 126.693305),
          level: 2,
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        const markerPosition = new window.kakao.maps.LatLng(37.437170, 126.693305);
        const marker = new window.kakao.maps.Marker({ position: markerPosition });
        marker.setMap(map);
      } else {
        console.error('카카오 맵 API가 로드되지 않았습니다.');
      }
    };
  
    if (window.kakao && window.kakao.maps) {
      loadKakaoMap(); // API가 이미 로드된 경우 바로 실행
    } else {
      const script = document.createElement('script');
      script.onload = loadKakaoMap;
      document.head.appendChild(script);
    }
  
  }, []); // 컴포넌트가 처음 마운트될 때만 실행

  return (
    <>
      <StyledMapDiv>
        <h2>찾아오시는 길</h2>
        <StyledMap id="map"></StyledMap>

        <Tab>
          <TabButton active={activeTab === 'bus'} onClick={() => setActiveTab('bus')}>
            시내 버스 이용
          </TabButton>
          <TabButton active={activeTab === 'station'} onClick={() => setActiveTab('station')}>
            정류장 안내
          </TabButton>
          <TabButton active={activeTab === 'expressBus'} onClick={() => setActiveTab('expressBus')}>
            고속버스 이용
          </TabButton>
          <TabButton active={activeTab === 'airport'} onClick={() => setActiveTab('airport')}>
            인천 국제공항 이용
          </TabButton>
          <TabButton active={activeTab === 'highway'} onClick={() => setActiveTab('highway')}>
            고속도로 이용
          </TabButton>
        </Tab>

        {activeTab === 'bus' && (
          <StyledContent>
            - 부평역 111-2번 → 문학경기장 하차<br />
            - 주안역 63, 522번 → 문학경기장(박태환수영장) 하차<br />
            - 선학역 63, 522, 523, 754, 780-2번 → 문학경기장(박태환수영장) 하차<br />
            - 동막역 6, 303, 304번 → 문학경기장(박태환수영장) 하차<br />
            - 제물포역 4, 63번 → 문학경기장 하차<br />
            - 인하대역 5, 27, 111-2번 → 문학경기장 하차<br />
            - 석천사거리역 11번 → 문학경기장 하차<br />
            - 인천논현역 27번 → 문학경기장 하차
          </StyledContent>
        )}

        {activeTab === 'station' && (
          <StyledContent>
            - 문학경기장 [북문쪽] : 4, 5, 11, 27, 46, 82, 111-2, 515 번<br />
            - 문학경기장(박태환수영장) [동문쪽] : 63, 754, 780-2, 522, 523, 303 번
          </StyledContent>
        )}

        {activeTab === 'expressBus' && (
          <StyledContent>
            - 인천종합터미널 → 인천터미널 역에서 인천지하철 환승 → 문학경기장 역 하차<br />
            - 인천종합터미널 → 도보 (약 10분 소요) → 문학경기장
          </StyledContent>
        )}

        {activeTab === 'airport' && (
          <StyledContent>
            - 인천공항 → 공항고속도로 → 서울외곽순환고속도로 → 장수IC → 제2경인고속도로 → 남동IC → 문학경기장<br />
            - 인천공항 → 공항고속도로 → 북인천IC → 경인고속도로 서인천IC 진입 → 경인고속도로 종점 → 제2경인고속도로 → 문학IC → 문학경기장
          </StyledContent>
        )}

        {activeTab === 'highway' && (
          <StyledContent>
            - 경인고속도로 : 도화 IC → 동양장사거리 → 문학경기장<br />
            - 제2경인고속도로 : 서창IC → 남동IC → 문학IC → 문학경기장<br />
            - 서해안고속도로 : 서창IC → 남동IC → 문학IC → 문학경기장<br />
            - 서울외곽순환고속도로 : 장수IC → 수원방향 → 서창IC → 남동IC → 문학IC → 문학경기장
          </StyledContent>
        )}
      </StyledMapDiv>
    </>
  );
};

export default Map;
