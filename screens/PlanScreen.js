import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Pressable,
    ScrollView
  } from "react-native";
import React from 'react'
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import plans from "../data/plans";

const PlanScreen = () => {
    const data = plans
    return (
        <ScrollView style={{ marginTop: 50 }}>
        <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
                Choose the plan that is right for you
            </Text>

            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                }}
            >
                <Feather name="check" size={24} color="#E50914" />
                <Text style={{ marginLeft: 6, fontSize: 16, fontWeight: "600" }}>
                    Watch all you want Ad free
                </Text>
            </View>

            <View
                style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}
            >
                <Feather name="check" size={24} color="#E50914" />
                <Text style={{ marginLeft: 6, fontSize: 16, fontWeight: "600" }}>
                    Recommendations just for you
                </Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Feather name="check" size={24} color="#E50914" />
                <Text
                    style={{
                        marginLeft: 6,
                        fontSize: 16,
                        fontWeight: "600",
                        marginTop: 3,
                    }}
                >
                    Cancel your Plan anytime
                </Text>
            </View>

            <View style={{ marginTop: 20 }} />
            {data.map((item, index) => (
                <Pressable
                    
                    style={
                     
                            {
                                height: 170,
                                borderRadius: 7,
                                borderColor: "#E50914",
                                borderWidth: 2,
                                padding: 15,
                                margin: 10,
                            }
                    
                    }
                    key={index}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: "#E50914",
                                padding: 10,
                                width: 120,
                                borderRadius: 7,
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: "center",
                                    color: "white",
                                    fontSize: 16,
                                    fontWeight: "600",
                                }}
                            >
                                {item.name}
                            </Text>
                        </View>

                        <Text style={{ fontSize: 18, fontWeight: "600" }}>
                            Price: ₹{item.price}
                        </Text>
                    </View>

                    <View
                        style={{
                            marginTop: 15,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <View>
                            <Text
                                style={{ color: "gray", fontSize: 15, fontWeight: "500" }}
                            >
                                video Quality : {item.videoQuality}
                            </Text>
                            <Text
                                style={{ fontSize: 16, fontWeight: "500", marginTop: 3 }}
                            >
                                Resolution : {item.resolution}
                            </Text>
                        </View>
                        <Fontisto
                            style={{ marginRight: 6 }}
                            name="netflix"
                            size={28}
                            color="black"
                        />
                    </View>

                    <View
                        style={{
                            marginTop: 10,
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Text style={{ fontSize: 16 }}>
                            Devices You can watch On :{" "}
                        </Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            {item.devices.map((device,index) => (
                                <Entypo
                                    style={{ marginRight: 3 }}
                                    name={device.name}
                                    size={21}
                                    color="#E50914"
                                    key={index}
                                />
                            ))}
                        </View>
                    </View>
                </Pressable>
            ))}
        </View>
        </ScrollView>
    )
}

export default PlanScreen

const styles = StyleSheet.create({})