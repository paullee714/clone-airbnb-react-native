import React from "react";
import {View, Text, Button} from "react-native";
import styled from "styled-components/native";
import {StatusBar} from "react-native";
import {BlurView} from "expo-blur";
import Btn from "../../components/Auth/Btn";

// const LOGO_URL = "https://logopng.net/wp-content/uploads/2020/07/logo-airbnb-png-1.png"
const LOGO_URL = "https://vectorified.com/image/airbnb-vector-logo-30.png"
const LOGO_URL_SUB = "https://www.graphicsprings.com/filestorage/stencils/96795a861581521de54774675124a4fe.png?"

const Container = styled.View`
  flex: 1;
`

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
`

const Logo = styled.Image`
  margin-top: 100px;
  width: 100px;
  height: 100px;
`

const BtnContainer = styled.View`
  margin-top: 50px;
`

export default ({navigation}) => {
	const goToSignUp = () => navigation.navigate("SignUp")
	const goToSignIn = () => navigation.navigate("SignIn")

	var randomImages = [
		require('../../assets/mainLoginBg.jpg'),
		require('../../assets/mainLoginBg2.jpg'),
		require('../../assets/mainLoginBg3.jpg'),
		require('../../assets/loginBg.jpg'),
		require('../../assets/loginBg2.jpg'),
		require('../../assets/loginBg4.jpg'),
		require('../../assets/lgoinBg3.jpg'),
	];

	return (
		<Container>
			<BlurView tint="light" intensity={30}
			          style={{flex: 1, width: "100%", alignItems: "center", justifyContent: "center"}}>
				<Logo source={{uri: LOGO_URL}}/>
				{/*<Logo source={{uri: LOGO_URL_SUB}}/>*/}
				<BtnContainer>
					<Btn onPress={goToSignUp} text={"Sign Up"} accent={true}/>
					<Btn onPress={goToSignIn} text={"Sign In"}/>
				</BtnContainer>
			</BlurView>
			{/*<Image source={require("../../assets/test.jpg")}/>*/}
			<Image source={randomImages[Math.floor(Math.random() * randomImages.length)]}/>
			<StatusBar barStyle="light-content"/>

		</Container>
	)
};