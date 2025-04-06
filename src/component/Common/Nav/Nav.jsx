import { StyledNav, NavLink } from "./Nav.styles";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Nav = () => {
  const navi = useNavigate();
  const { auth, logout } = useContext(AuthContext);

  return (
    <StyledNav>
      <NavLink onClick={() => navi("/")}>Home</NavLink>

      <NavLink onClick={() => navi("/map")}>SSG홈구장</NavLink>
      <NavLink onClick={() => navi("/BaseballMember")}>선수소개</NavLink>

      {!auth.isAuthenticated ? (
        <>
          <NavLink onClick={() => navi("/join")}>회원가입</NavLink>
          <NavLink onClick={() => navi("/login")}>로그인</NavLink>
        </>
      ) : (
        <>
          <NavLink onClick={() => navi("/info")}>내정보</NavLink>
          <NavLink onClick={logout}>로그아웃</NavLink>
        </>
      )}

      <NavLink onClick={() => navi("/boards")}>게시판</NavLink>
    </StyledNav>
  );
};
export default Nav;