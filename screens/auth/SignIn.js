import React,{ useState } from "react";
import {
	StatusBar,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard
} from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input";
import DismissKeyboard from "../../components/DismissKeyboard";
import { userLogin } from "../../redux/usersSlice";
import { isEmail } from "../../utils";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const InputContainer = styled.View`
  margin-bottom: 30px;
`;

export default ({route:{params}}) => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState(params?.email);
	const [password, setPassword] = useState(params?.password);
	const isFormValid = () => {
		if (email === "" || password === ""){
			alert("이메일과 패스워드를 모두 입력해야합니다.")
			return false;
		}
		if(!isEmail(email)){
			alert("이메일을 확인해주세요!")
			return false
		}
		return true
	}
	const handleSubmit = () => {
		if(!isFormValid()){
			return ;
		}
		dispatch(userLogin({
			username: email,
			password
		}))
	}
	const dismissKeyboard = () => Keyboard.dismiss();

	return (
		<DismissKeyboard>
			<Container>
				<StatusBar barStyle="dark-content" />
				<KeyboardAvoidingView behavior="position">
					<InputContainer>
						<Input
							value={email}
							keyboardType="email-address"
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
					<Btn text={"Sign In"} accent onPress={handleSubmit}></Btn>
				</KeyboardAvoidingView>
			</Container>
		</DismissKeyboard>
	)
}