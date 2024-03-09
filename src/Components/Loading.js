import { ActivityIndicator, BackHandler, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loading = ({ setLoading }) => {
	return (
		<View style={styles.container}>

			<Pressable
				onPress={() => (setLoading(false))}
				style={styles.closebtn}>
				<Text style={styles.closeText}>
					x
				</Text>

			</Pressable>

			<ActivityIndicator size="large" />
			<Text>Loading...</Text>
		</View>
	)
}

export default Loading

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		height: "100%",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white"
	},
	closebtn: {
		backgroundColor: "black",
		width: 50,
		height: 50,
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
		position: "absolute",
		top: 50,
		right: 20
	},
	closeText: {
		color: "white",
		fontWeight: "bold",
		fontSize: 17
	}
})