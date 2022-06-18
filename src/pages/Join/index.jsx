import React, { useCallback, useState } from "react";
import { BsLock, BsPerson } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import * as Styled from "./styled";

const Join = ({ setIsDrawable }) => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordChk, setPasswordChk] = useState("");

  const join = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (!id) {
        alert("아이디를 입력해주세요!");
        return false;
      }

      if (!password) {
        alert("비밀번호를 입력해주세요!");
        return false;
      }

      if (password !== passwordChk) {
        alert("비밀번호를 확인해주세요!");
        return false;
      }

      sessionStorage.setItem("jwt", "luv-chat-dummy-token");
      setIsDrawable(true);
      navigate("/");
    },
    [id, navigate, password, passwordChk, setIsDrawable]
  );

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onChangePasswordChk = useCallback((e) => {
    setPasswordChk(e.target.value);
  }, []);

  const goLogin = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <Styled.Container>
      <div>
        <Styled.Header>Luv-Chat</Styled.Header>
        <Styled.Box>
          <Styled.Form onSubmit={join}>
            <div>
              <div>
                <BsPerson style={{ fontSize: "20px", color: "#7a7272" }} />
                {!id && <Styled.PlaceHolder>아이디</Styled.PlaceHolder>}
                <input type="text" value={id} onChange={onChangeId} />
              </div>
              <div>
                <BsLock style={{ fontSize: "20px", color: "#7a7272" }} />
                {!password && <Styled.PlaceHolder>비밀번호</Styled.PlaceHolder>}
                <input
                  type="password"
                  value={password}
                  onChange={onChangePassword}
                />
              </div>
              <div>
                <BsLock style={{ fontSize: "20px", color: "#7a7272" }} />
                {!passwordChk && (
                  <Styled.PlaceHolder>비밀번호 확인</Styled.PlaceHolder>
                )}
                <input
                  type="password"
                  value={passwordChk}
                  onChange={onChangePasswordChk}
                />
              </div>
            </div>
            <div>
              <button>회원가입</button>
            </div>
          </Styled.Form>
        </Styled.Box>
        <Styled.Footer>
          <div>비밀번호 찾기</div>
          <div>아이디 찾기</div>
          <div onClick={goLogin}>로그인</div>
        </Styled.Footer>
      </div>
    </Styled.Container>
  );
};

export default Join;
