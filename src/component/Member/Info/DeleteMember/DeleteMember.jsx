import { Input, Button } from "../../../styles/Styles";
import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";

const DeleteMember = () => {

  const { auth } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [memberPw, setMemberPw] = useState("");

  const handleDeleteMember = (e) => {
    e.preventDefault();
    
    axios
      .delete("http://localhost/members",
      {
        data: { memberPw },
      },
      {
        header: {
          Authorization: `Bearer ${auth.accessToken}`,
        },
      }
    )
    .then(() => {
      alert("탈퇴되었습니다.");
      window.location.href = "/";
    })
    .catch((error) => {
      setError(
        error.response.data["error-message"] || "회원탈퇴 중 오류 발생"
      );
    });
  };

  return (
    <>
      <Input
        type="password"
        placeholder="탈퇴를 원하시면 비밀번호를 입력해주세요."
        required
        onChange={(e) => setMemberPw(e.target.value)}
      />
      <label style={{ color: "crimson", padding: "7px" }}>{error}</label>
      <Button
        type="button"
        style={{ backgroundColor: "skyblue" }}
        onClick={handleDeleteMember}
      >
        회원 탈퇴하기
      </Button>
    </>
  );
};
export default DeleteMember;