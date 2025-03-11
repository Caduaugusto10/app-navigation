import React from "react"; 
import { View, Text } from "react-native"; 


export default function Caduzada7() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Página Caduzada7</Text>
        </View>
    );
}


const styles = {
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "darkblue",
    },
    title: {
        fontSize: 30,
        color: "white", 
    },
};