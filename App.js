import React, {useState} from 'react';
import {AppLoading} from "expo";
import {Text, Image} from "react-native";
import {Asset} from "expo-asset";
import {Ionicons} from "@expo/vector-icons";
import * as Font from 'expo-font';
import Gate from "./components/Gate";
import {Provider} from "react-redux";
import store from "./redux/store";

const cacheImages = images => images.map(image => {
	if (typeof image === "string") {
		return Image.prefetch(image)
	} else {
		return Asset.fromModule(image).downloadAsync();
	}
});

const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font));

export default function App() {
	const [isReady, setIsReady] = useState(false)
	const handleFinish = () => setIsReady(true)
	const loadAssets = async () => {
		const images = [
			require("./assets/loginBg.jpg"),
			"https://logopng.net/wp-content/uploads/2020/07/logo-airbnb-png-1.png"
		];
		const fonts = [
			Ionicons.font
		]
		const imagePromises = cacheImages(images);
		const fontPromises = cacheFonts(fonts);
		return Promise.all([...fontPromises, ...imagePromises])
	}
	return isReady ? (
		<Provider store={store}>
			<Gate/>
		</Provider>
	) : (
		<AppLoading onError={console.error} onFinish={handleFinish} startAsync={loadAssets}/>);
}
