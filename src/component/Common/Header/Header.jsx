import React, { useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import './header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const navi = useNavigate();
  const { auth, logout } = useContext(AuthContext);

  // useEffect 훅을 사용하여 스크롤 이벤트 처리
  useEffect(() => {
    // 스크롤 이벤트 핸들러 정의
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (window.scrollY > 388) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    // 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트 언마운트 시 이벤트 리스너 정리
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // 빈 배열을 넣어 최초 마운트될 때만 실행되게 설정

  return (
    <>
      <div id="wrap">
        <header id="header">
          <div className="inner">
            <nav className="nav">
              <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/map">SSG홈구장</a></li>
                <li><a href="/BaseballMember">선수소개</a></li>
                <li><a href="/boards">게시판</a></li>

                {!auth.isAuthenticated ? (
                  <>
                    <li><a href="/join">회원가입</a></li>
                    <li><a href="/login">로그인</a></li>
                  </>
                ) : (
                  <>
                    <li><a href="/info">마이페이지</a></li>
                    <li><a onClick={logout}>로그아웃</a></li>
                  </>
                )}

              </ul>
            </nav>
          </div>
        </header>
        <div id="visual-img"></div>
      </div>

      <br clear="both" />
    </>
  );
};

export default Header;