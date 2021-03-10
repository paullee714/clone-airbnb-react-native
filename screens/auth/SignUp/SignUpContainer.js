import React, { useState } from "react";
import styled from "styled-components/native";
import api from "../../../api";
import utils from "../../../utils";
import SignUpPresenter from "./SignUpPresenter";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 30px;
`;

export default ({ navigation: { navigate } }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const isFormValid = () => {
        if (firstName === "" || lastName === "" || email === "" || password === "") {
            alert("모든 필드는 필수로 작성해야 합니다")
            return false
        }
        if (!utils.isEmail(email)) {
            alert("이메일 형식을 확인 해 주세요")
            return false
        }
        return true;
    }
    const handleSubmit = async () => {
        if (!isFormValid()) {
            return;
        }
        setLoading(true);
        try {
            const { status } = await api.createAccount({
                first_name: firstName,
                last_name: lastName,
                email,
                username: email,
                password
            });
            if (status === 201) {
                alert("회원가입이 완료되었습니다. 로그인 해 주세요")
                navigate("SignIn", { email, password });
            }
            // go to sign in
        } catch (e) {
            alert("이메일이 이미 사용 중 입니다.")
            console.warn(e)
        } finally {
            setLoading(false)
        }
    }
    return (
        <SignUpPresenter
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
        />
    )

};
