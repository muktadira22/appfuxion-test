import React from 'react';
import {StyleSheet, SafeAreaView, View, Dimensions} from "react-native";

const deviceHeight = Dimensions.get("window").height

const Layout = ({children}) => {
    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                {children}
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: deviceHeight,
        width: 420,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
});

export default Layout;
