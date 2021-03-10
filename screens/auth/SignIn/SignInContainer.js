import React, { useState } from "react";
import {
    Keyboard
} from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import { userLogin } from "../../../redux/usersSlice";
import utils from "../../../utils";
import SignInPresenter from "./SignInPresenter";


const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const InputContainer = styled.View`
  margin-bottom: 30px;
`;

export default ({ route: { params } }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState(params?.email);
    const [password, setPassword] = useState(params?.password);
    const isFormValid = () => {
        if (email === "" || password === "") {
            alert("이메일과 패스워드를 모두 입력해야합니다.")
            return false;
        }
        if (!utils.isEmail(email)) {
            alert("이메일을 확인해주세요!")
            return false
        }
        return true
    }
    const handleSubmit = () => {
        if (!isFormValid()) {
            return;
        }
        dispatch(userLogin({
            username: email,
            password
        }))
    }
    const dismissKeyboard = () => Keyboard.dismiss();

    return (
        <SignInPresenter
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
        />
    )
}