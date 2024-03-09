import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import Loading from '../Components/Loading';
// import img from "./../../assets/login"

export default function Login({ navigation }) {

	const [email, setEmail] = useState("")
	const [pass, setPass] = useState("")
	const [loading, setLoading] = useState(false)

	function getLoad() {
		if (pass.trim() !== "" && email.trim() !== "") setLoading(true)
	}

	return (
		<>

			<StatusBar style="auto" />
			<View style={styles.container}>
				<View style={styles.img}>
					<Image
						source={require('../../assets/login.jpg')}
						style={{ width: 200, height: 100 }}
					></Image>
				</View>

				<View style={styles.form}>
					<Text style={styles.title}>
						Welcome
					</Text>

					<Text>Email:</Text>
					<TextInput
						placeholder='Emaili daxil et'
						inputMode="email"
						style={styles.input}
						value={email}
						onChangeText={setEmail}
					/>
					<Text>Password:</Text>
					<TextInput
						secureTextEntry={true}
						placeholder='Parolu daxil et '
						style={styles.input}
						value={pass}
						onChangeText={setPass}
					// keyboardType='numeric'
					/>

					<View style={{ alignItems: "center" }}>
						<Pressable
							onPress={getLoad}
							style={({ pressed }) => [{
								backgroundColor: pressed ? "red" : "cyan",
								margin: "auto"

							}, styles.button]}
						>

							<Text >
								Daxil ol
							</Text>
						</Pressable>


					</View>

					<View style={{ alignItems: "center" }}>
						<Pressable
							onPress={() =>
								navigation.navigate('SingUp')
							}
							style={({ pressed }) => [{
								backgroundColor: pressed ? "#888" : "silver",

							}, styles.button]}
						>

							<Text >
								Qeydiyyatdan kec
							</Text>
						</Pressable>


					</View>
				</View>

			</View>

			{loading && <Loading setLoading={setLoading} />}
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		// justifyContent: 'center',
	},
	input: {
		borderWidth: 2,
		borderColor: "gray",
		borderRadius: 5,
		backgroundColor: "#eee",
		width: "100%",
		paddingVertical: 5,
		paddingHorizontal: 10,
		marginVertical: 10,
		textAlign: "center"
	},
	button: {
		width: "50%",
		marginTop: 20,
		marginHorizontal: "auto",
		height: 40,
		padding: 10,
		// backgroundColor: "cyan",
		borderWidth: 1,
		borderRadius: 15,
		borderColor: "blue",
		alignItems: "center",
		justifyContent: "center"
	},
	form: {
		width: "80%",
		marginHorizontal: "auto",
		marginTop: 50
		// alignItems: "center"

	},
	title: {
		fontSize: 25,
		fontWeight: "900",
		textAlign: "center",
		marginBottom: 20
	},
	img: {
		marginTop: 200
	}
});
