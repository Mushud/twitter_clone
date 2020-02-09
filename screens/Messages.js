import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Messages extends React.Component {
	render() {
		return (
			<View>
				<Text style={styles.textStyle}>Messages</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 35,
		fontWeight: 'bold',
		backgroundColor: 'red'
	}
});
