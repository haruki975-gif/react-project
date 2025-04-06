import { Button, Container, Form, Input, Title } from "../../styles/Styles";
import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {

  const [memberId, setMemberId] = useState("");
  const [memberPw, setMemberPw] = useState("");
  const [msg, setMsg] = useState("");
  const {auth, login} = useContext(AuthContext);
  
  const handleLogin = (e) => {
    e.preventDefault();

    const regexp = /^[a-zA-Z0-9]+$/;

    if(!regexp.test(memberId)){
      setMsg("아이디값이 유효하지 않습니다.");
      return;
    }else{
      setMsg("");
    }

    axios.post("http://localhost/auth/login",{
      memberId : memberId,
      memberPw : memberPw,
    })
    .then((result) => {
      //console.log(result.data);
      const {memberNo, memberId, memberName, accessToken, refreshToken} =
        result.data;
      login(memberNo, memberId, memberName, accessToken, refreshToken);
      /*
      localStorage.setItem("memberId", memberId);
      localStorage.setItem("memberName", memberName);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("memberNo", memberNo);
      */
      //sessionStorage.setItem(); 브라우저 끄면 날아감
      alert("로그인 성공");
      window.location.href = "/";
    })
    .catch((error) => {
      console.log(error);
      alert(error.response.data["error-message"]);
    });
  };
  
  return (
    <>
      <Container>
        <Form onSubmit={handleLogin}>
          <Title>로그인</Title>
          <Input 
            type="text" 
            placeholder="아이디를 입력해주세요." 
            required 
            onChange={(e) => setMemberId(e.target.value)}
            />
            <label style={{fontSize: "14px" , color:"crimson", padding:"4px"}}>{msg}</label>
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            required
            onChange={(e) => setMemberPw(e.target.value)}
          />
          <Button type="submit">로그인하기</Button>
        </Form>
      </Container>
    </>
  );
};
export default Login;