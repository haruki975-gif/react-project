import './Footer.css';

const Footer = () => {

  return(
    <>
      <footer id="footer">
        <div id="footer-1">
            <a>이용약관 | 이메일주소무단수집거부</a>
        </div>

        <div id="footer-2">
            <p id="p1">
                주식회사 신세계야구단 대표이사 : 김재섭 &nbsp; &nbsp; | &nbsp; &nbsp; 
                주소 : 인천광역시 미추홀구 매소홀로 618(문학동) &nbsp; &nbsp; | &nbsp; &nbsp; 
                티켓문의 : 1588-7890&nbsp; | &nbsp;기타문의 : 1599-6970<br/>
                시즌 운영시간 :  홈경기일 : 10:00 ~ 19:00 &nbsp; &nbsp;
                원정경기일 : 10:00 ~ 17:00(월요일, 홈경기 없는 주말 휴무) &nbsp; &nbsp; | &nbsp; &nbsp; 
                비시즌 운영시간 : 10:00~17:00(주말 및 공휴일 휴무)
            </p> 
            <p id="p2">Copyright &copy; 2021 신세계야구단 All right reserved.<br/></p>
        </div>
      </footer>
    </>
  );
}

export default Footer;