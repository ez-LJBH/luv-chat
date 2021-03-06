import { BsPerson, BsLock } from "react-icons/bs";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as Styled from "./styled";

const Login = ({ setIsDrawable }) => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const login = useCallback(
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

      sessionStorage.setItem("jwt", "luv-chat-dummy-token");
      setIsDrawable(true);
      navigate("/");
    },
    [id, navigate, password, setIsDrawable]
  );

  const focusInput = useCallback((e) => {
    const target = e.target;
    const parentDiv = target.closest(".parent-div");
    const inputTag = parentDiv.getElementsByTagName("input")[0];
    inputTag.focus();
  }, []);

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const goJoin = useCallback(() => {
    navigate("/join");
  }, [navigate]);

  return (
    <Styled.Container>
      <div>
        <Styled.Header>Luv-Chat</Styled.Header>
        <Styled.Box>
          <Styled.Form onSubmit={login}>
            <div>
              <div className="parent-div" onClick={focusInput}>
                <BsPerson style={{ fontSize: "20px", color: "#7a7272" }} />
                {!id && <Styled.PlaceHolder>아이디</Styled.PlaceHolder>}
                <input type="text" value={id} onChange={onChangeId} />
              </div>
              <div className="parent-div" onClick={focusInput}>
                <BsLock style={{ fontSize: "20px", color: "#7a7272" }} />
                {!password && <Styled.PlaceHolder>비밀번호</Styled.PlaceHolder>}
                <input
                  type="password"
                  value={password}
                  onChange={onChangePassword}
                />
              </div>
            </div>
            <div>
              <button>로그인</button>
            </div>
          </Styled.Form>
        </Styled.Box>
        <Styled.Footer>
          <div>비밀번호 찾기</div>
          <div>아이디 찾기</div>
          <div onClick={goJoin}>회원가입</div>
        </Styled.Footer>
      </div>
    </Styled.Container>
  );
};

export default Login;
