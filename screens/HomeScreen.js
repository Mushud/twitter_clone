import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	TextInput
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
	return (
		<View style={[styles.container]}>
			<Text style={{ fontWeight: 'bold', fontSize: 30, paddingHorizontal: 15 }}>
				Settings
			</Text>
			<View
				style={{
					padding: 5,
					marginVertical: 10,
					marginHorizontal: 10,
					backgroundColor: '#C8CACC',
					borderRadius: 10,

					flexDirection: 'row',
					alignItems: 'center'
				}}
			>
				<Ionicons
					name='ios-search'
					size={18}
					color='grey'
					style={{ paddingHorizontal: 10 }}
				/>
				<TextInput
					style={{ flex: 1 }}
					placeholderTextColor='white'
					placeholder='Search here...'
				/>
			</View>
			<View
				style={{
					marginTop: 5,
					padding: 10,
					justifyContent: 'space-between',
					flexDirection: 'row',
					paddingHorizontal: 10,
					backgroundColor: 'white',
					elevation: 1
				}}
			>
				<View style={{ flexDirection: 'row' }}>
					<Image
						source={require('./../assets/images/6.jpg')}
						style={{ width: 70, height: 70, borderRadius: 35 }}
					/>
					<View
						style={{
							flexDirection: 'column',
							justifyContent: 'center',
							paddingHorizontal: 10
						}}
					>
						<Text style={{ fontSize: 25, fontWeight: 'bold' }}>
							Mushud Kofi Abuu
						</Text>
						<Text>Apple ID/ Cloud / Itunes & App Store</Text>
					</View>
				</View>
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<Ionicons name='ios-arrow-forward' size={18} />
				</View>
			</View>
			<View
				style={{
					flexDirection: 'row',
					backgroundColor: 'white',
					marginTop: 20,
					padding: 10,
					justifyContent: 'space-between',
					alignItems: 'center',
					elevation: 1
				}}
			>
				<Text>Finish Setting up your Phone</Text>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<View
						style={{
							backgroundColor: 'red',
							height: 26,
							width: 26,
							borderRadius: 13,
							marginHorizontal: 10,
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<Text style={{ color: 'white', fontWeight: 'bold' }}>1</Text>
					</View>
					<Ionicons name='ios-arrow-forward' size={18} />
				</View>
			</View>
		</View>
	);
}

HomeScreen.navigationOptions = {
	header: null
};

function DevelopmentModeNotice() {
	if (__DEV__) {
		const learnMoreButton = (
			<Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
				Learn more
			</Text>
		);

		return (
			<Text style={styles.developmentModeText}>
				Development mode is enabled: your app will be slower but you can use
				useful development tools. {learnMoreButton}
			</Text>
		);
	} else {
		return (
			<Text style={styles.developmentModeText}>
				You are not in development mode: your app will run at full speed.
			</Text>
		);
	}
}

function handleLearnMorePress() {
	WebBrowser.openBrowserAsync(
		'https://docs.expo.io/versions/latest/workflow/development-mode/'
	);
}

function handleHelpPress() {
	WebBrowser.openBrowserAsync(
		'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f3f3f3'
	},
	developmentModeText: {
		marginBottom: 20,
		color: 'rgba(0,0,0,0.4)',
		fontSize: 14,
		lineHeight: 19,
		textAlign: 'center'
	},
	contentContainer: {
		paddingTop: 30
	},
	welcomeContainer: {
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 20
	},
	welcomeImage: {
		width: 100,
		height: 80,
		resizeMode: 'contain',
		marginTop: 3,
		marginLeft: -10
	},
	getStartedContainer: {
		alignItems: 'center',
		marginHorizontal: 50
	},
	homeScreenFilename: {
		marginVertical: 7
	},
	codeHighlightText: {
		color: 'rgba(96,100,109, 0.8)'
	},
	codeHighlightContainer: {
		backgroundColor: 'rgba(0,0,0,0.05)',
		borderRadius: 3,
		paddingHorizontal: 4
	},
	getStartedText: {
		fontSize: 17,
		color: 'rgba(96,100,109, 1)',
		lineHeight: 24,
		textAlign: 'center'
	},
	tabBarInfoContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		...Platform.select({
			ios: {
				shadowColor: 'black',
				shadowOffset: { width: 0, height: -3 },
				shadowOpacity: 0.1,
				shadowRadius: 3
			},
			android: {
				elevation: 20
			}
		}),
		alignItems: 'center',
		backgroundColor: '#fbfbfb',
		paddingVertical: 20
	},
	tabBarInfoText: {
		fontSize: 17,
		color: 'rgba(96,100,109, 1)',
		textAlign: 'center'
	},
	navigationFilename: {
		marginTop: 5
	},
	helpContainer: {
		marginTop: 15,
		alignItems: 'center'
	},
	helpLink: {
		paddingVertical: 15
	},
	helpLinkText: {
		fontSize: 14,
		color: '#2e78b7'
	}
});
