import React from "react";
import { View, Text } from "react-native";

export default function Drawer2() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Drawerzada 2</Text>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "darkgreen",
    },
    title: {
        fontSize: 30,
        color: "white",
    },
};