import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TextField = (props) => {
    const { style, ...otherProps } = props;

    return (
        <TextInput
            {...otherProps}
            style={[styles.input, style]}
            placeholderTextColor="#888"
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingHorizontal: 10,
        marginBottom: 10,
        color: '#000',
        backgroundColor: '#fff'
    },
});

export default TextField;
