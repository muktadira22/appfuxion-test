import React from 'react'
import {FlatList as Fl, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const FlatList = ({data, onChooseItem}) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} key={item.description} onPress={() => onChooseItem(item)}>
            <Text style={styles.title}>{item.description}</Text>
        </TouchableOpacity>
    );

    return (
        <Fl
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index}
            contentContainerStyle={styles.container}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingVertical: 8,
        backgroundColor: "#fff",
        borderRadius: 4,
    },
    item: {
        backgroundColor: '#fff',
        marginVertical: 4,
        marginHorizontal: 16,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 0.3,
        borderBottomColor: '#ccc'
    },
    title: {
        fontSize: 16,
        color: "#000"
    },
})

export default FlatList
