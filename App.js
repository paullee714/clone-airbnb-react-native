import React, {useState} from 'react';
import {AppLoading} from "expo";
import {Text, Image} from "react-native";
import {Asset} from "expo-asset";

const cacheImages = images => images.map(image => {
	if (typeof image === "string") {
		return Image.prefetch(image)
	}else{
        return Asset.fromModule(image).downloadAsync();
    }
})

export default function App() {
	const [isReady, setIsReady] = useState(false)
	const handleFinish = () => setIsReady(true)
	const loadAssets = async () => {
		const images = [
			require("./assets/loginBg.jpg"),
			"https://logopng.net/wp-content/uploads/2020/07/logo-airbnb-png-1.png"
		];
		console.log(cacheImages(images))
	}
	return isReady ? (<Text>I'M ready</Text>) : (
		<AppLoading onError={console.error} onFinish={handleFinish} startAsync={loadAssets}/>);
}
