import React, {useState} from "react";
import {StatusBar, KeyboardAvoidingView} from "react-native";
import styled from "styled-components/native";
import { createAccount } from "../../api";
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input";
import DismissKeyboard from "../../components/DismissKeyboard";
import { isEmail } from "../../utils";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 30px;
`;

export default ({navigation: {navigate}}) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const isFormValid = () => {
		if(firstName === "" || lastName === "" || email === "" || password === ""){
			alert("모든 필드는 필수로 작성해야 합니다")
			return false
		}
		if(!isEmail(email)){
			alert("이메일 형식을 확인 해 주세요")
			return false
		}
		return true;
	}
	const handleSubmit = async() => {
		if(!isFormValid()){
			return ;
		}
		setLoading(true);
		try{
			const { status } = await createAccount({
				first_name: firstName,
				last_name: lastName,
				email,
				username: email,
				password
			});
			if(status === 201){
				alert("회원가입이 완료되었습니다. 로그인 해 주세요")
				navigate("SignIn",{email,password});
			}
			// go to sign in
		}catch(e){
			alert("이메일이 이미 사용 중 입니다.")
			console.warn(e)
		}finally{
			setLoading(false)
		}
	}
	return (
		<DismissKeyboard>
			<Container>
				<StatusBar barStyle="dark-content"/>
				<KeyboardAvoidingView behavior="position">
					<InputContainer>
						<Input
							value={firstName}
							placeholder="First Name"
							autoCapitalize="words"
							stateFn={setFirstName}
						/>
						<Input
							value={lastName}
							placeholder="Last Name"
							autoCapitalize="words"
							stateFn={setLastName}
						/>
						<Input
							keyboardType={"email-address"}
							value={email}
							placeholder="Email"
							autoCapitalize="none"
							stateFn={setEmail}
						/>
						<Input
							value={password}
							placeholder="Password"
							isPassword={true}
							stateFn={setPassword}
						/>
					</InputContainer>
					<Btn text={"Sign Up"} accent onPress={handleSubmit}></Btn>
				</KeyboardAvoidingView>
			</Container>
		</DismissKeyboard>
	);
};
