import React from "react";
import {View, Text, Button} from "react-native";
import styled from "styled-components/native";
import {StatusBar} from "react-native";
import {BlurView} from "expo-blur";
import Btn from "../components/Auth/Btn";

const LOGO_URL = "https://logopng.net/wp-content/uploads/2020/07/logo-airbnb-png-1.png"

const Container = styled.View`
  flex: 1;
`

const Image = styled.Image`
  position: absolute;
  z-index: -1;
  top: 0;
`

const Logo = styled.Image`
  width: 100px;
  height: 100px;
`

const BtnContainer = styled.View``

export default ({navigation}) => {
	const goToSignUp = () => navigation.navigate("SignUp")
	const goToSignIn = () => navigation.navigate("SignIn")

	return (
		<Container>
			<BlurView tint="light" intensity={30}
			          style={{flex: 1, width: "100%", alignItems: "center", justifyContent: "center"}}>
				<Logo source={{uri: LOGO_URL}}/>
				<BtnContainer>
					<Btn onPress={goToSignUp} text={"Sign Up"} accent={true}/>
					<Btn onPress={goToSignIn} text={"Sign In"} />
				</BtnContainer>
			</BlurView>
			<Image source={require("../assets/loginBg4.jpg")}/>
			<StatusBar barStyle="light-content"/>

		</Container>
	)
};