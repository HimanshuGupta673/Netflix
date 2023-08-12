import { KeyboardAvoidingView, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React,{useState} from 'react'
import { Input } from "react-native-elements";
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
    const [input, setInput] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black", padding: 10, alignItems: 'center' }}>
            <KeyboardAvoidingView>
                <View style={{ alignItems: "center", justifyContent: "space-between" }}>
                    <Image
                        style={{ height: 50, width: 120, marginTop: 20 }}
                        source={{
                            uri: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                        }}
                    />
                </View>

                <View style={{ width: 320, marginTop: 45 }}>
                    <Input
                        value={input}
                        onChangeText={(text) => setInput(text)}
                        type="email"
                        inputContainerStyle={{ borderBottomWidth: 0 }}
                        placeholder="Email"
                        placeholderTextColor={"white"}
                        style={{
                            width: 330,
                            padding: 15,
                            borderRadius: 5,
                            color: "white",
                            backgroundColor: "gray",
                        }}
                    />

                    <Input
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        type="password"
                        secureTextEntry={true}
                        inputContainerStyle={{ borderBottomWidth: 0 }}
                        placeholder="Password"
                        placeholderTextColor={"white"}
                        style={{
                            width: 330,
                            padding: 15,
                            borderRadius: 5,
                            color: "white",
                            backgroundColor: "gray",
                        }}
                    />
                </View>

                <Pressable
                    onPress={()=>navigation.navigate("Plans",{
                        email:input,
                        password:password
                    })}
                    style={
                        password.length > 4
                            ? 
                            {
                                width: 300,
                                backgroundColor: "red",
                                marginLeft: "auto",
                                marginRight: "auto",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: 14,
                            }
                            : {
                                width: 300,
                                marginLeft: "auto",
                                marginRight: "auto",
                                justifyContent: "center",
                                alignItems: "center",
                                borderColor: "white",
                                borderWidth: 2,
                                padding: 14,
                            }
                    }
                >
                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: 19,
                            fontWeight: "700",
                            color: "white",
                        }}
                    >
                        Register
                    </Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
  )
}

export default SignupScreen

const styles = StyleSheet.create({})