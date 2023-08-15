import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Image,
    FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigation } from "@react-navigation/native";
import profiles from "../data/profiles";
import { useContext } from "react";
  import { MovieItems } from "../Context";
const ProfileScreen = () => {
    const navigation = useNavigation();
    const {profile,setProfile} = useContext(MovieItems);
    
    const signOutUser = () => {
        signOut(auth).then(() => {
            navigation.replace("Login");
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
            <Pressable style={{ flexDirection: "row", alignItems: "center", marginTop: 50 }}>
                <Ionicons onPress={() => navigation.goBack()} name="arrow-back" size={24} color="white" marginLeft={12} />
                <Text
                    style={{
                        color: "white",
                        fontSize: 20,
                        fontWeight: "500",
                        marginLeft: 10,
                    }}
                >
                    Profiles and more
                </Text>
            </Pressable>

            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                    style={{ height: 50, width: 120, marginTop: 20 }}
                    source={{
                        uri: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",
                    }}
                />
            </View>

            <View style={{ marginTop: 50, alignItems: "center" }}>
                <Text style={{ color: "gray", fontSize: 16, fontWeight: "600" }}>Who's Watching?</Text>

                <FlatList numColumns={2} data={profiles} renderItem={({ item }) => (
                    <Pressable onPress={()=>{
                        setProfile(item)
                        navigation.replace("Loading")
                    }}
                        style={{ marginHorizontal: 10, padding: 20, marginTop: 10 }}>
                        <Image style={{ width: 110, height: 110, borderRadius: 7, resizeMode: "contain" }} source={{ uri: item.image }} />
                        <Text style={{ textAlign: "center", color: "white", fontSize: 15, fontWeight: "500", marginTop: 10 }}>{item.name}</Text>
                    </Pressable>
                )} />
            </View>

            <Pressable onPress={signOutUser}>
                <Text style={{ fontSize: 18, textAlign: "center", color: "gray", marginTop: 15 }}>Sign Out</Text>
            </Pressable>
        </SafeAreaView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({});