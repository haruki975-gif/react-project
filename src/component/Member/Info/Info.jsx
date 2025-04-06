import {
  Button,
  Container,
  Form,
  Input,
  Tab,
  Tabs,
  Title,
} from "../../styles/Styles";
import { useState, useContext } from "react";
import ChangePassword from "./ChangePassword/ChangePassword";
import DeleteMember from "./DeleteMember/DeleteMember";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const {auth} = useContext(AuthContext);
  const [active, setActive] = useState(true);
  const navi = useNavigate();
  const handleToggle = () => {
    setActive((active) => !active);
  };

  if(!auth.isAuthenticated){
    //alert("로그인한 사용자만 이용할 수 있습니다.");
    //window.location.href = "/";
  }

  const handleBack = () => {
    navi(-1);
  };

  return (
    <>
      <Container>
        <Form>
          <Title>{active ? "비밀번호변경" : "회원탈퇴"}</Title>
          <Tabs>
            {/* <Tab onClick={handleToggle} active={active}>
              또다른 메뉴보기
            </Tab> */}
          </Tabs>
          <Input type="text" value={auth.memberId} required readOnly />
          <Input type="text" value={auth.memberName} required readOnly />
          {active ? <ChangePassword /> : <DeleteMember />}
          <Button onClick={handleBack}>뒤로가기</Button>
        </Form>
      </Container>
    </>
  );
};
export default Info;