import React, {useEffect, useState} from 'react';
import {View, TextInput, Text, Keyboard} from 'react-native';
import MaterialTextField from "../TextField/TextField";
import FlatList from "../../FlatList/FlatList"
import {useDispatch, useSelector} from "react-redux";
import {fetchAutoComplete, fetchMapsDetail, setDescription} from "../../../store/gmaps/gmapsSlice"

const GMapsAutoComplete = () => {
    const {predictions, description} = useSelector(state => state.gmaps)

    const dispatch = useDispatch()

    const handleSearchChange = async text => {
        dispatch(setDescription(text))
        await dispatch(fetchAutoComplete(text))
    };

    const handleChooseItem = async (data) => {
        const placeId = data?.place_id ?? ""
        await dispatch(fetchMapsDetail(placeId))
    }

    return (
        <View>
            <MaterialTextField
                placeholder="Search"
                value={description}
                onChangeText={handleSearchChange}
            />
            {predictions && predictions.length !== 0 &&
                <FlatList
                    data={predictions}
                    onChooseItem={handleChooseItem}
                />
            }
        </View>
    );
};

export default GMapsAutoComplete;
