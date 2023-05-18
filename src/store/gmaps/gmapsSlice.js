import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {GOOGLE_MAPS_API_KEY} from "../../config";

export const fetchAutoComplete = createAsyncThunk('gmaps/fetchAutocomplete', async (text) => {
    const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${GOOGLE_MAPS_API_KEY}&input=${text}`,
    );
    return await response.json()
})

export const fetchMapsDetail = createAsyncThunk('gmaps/fetchMapsDetail', async (placeId) => {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?key=${GOOGLE_MAPS_API_KEY}&place_id=${placeId}`;
    const response = await fetch(url)
    return await response.json()
})

const initialState = {
    latitude: -6.8168,
    longitude: 107.1425,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
    description: "",
    predictions: [],
    history: [],
}
export const gmapsSlice = createSlice({
    name: 'gmaps',
    initialState,
    reducers: {
        setDescription: (state, action) => {
            state.description = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAutoComplete.fulfilled, (state, action) => {
                state.predictions = action.payload.predictions ?? []
            })
            .addCase(fetchMapsDetail.fulfilled, (state, action) => {
                const result = action.payload.result
                const {lat, lng} = result.geometry.location
                const description = result.formatted_address
                state.description = description
                state.latitude = lat
                state.longitude = lng
                state.predictions = []
            })
    }
});

export const {setDescription} = gmapsSlice.actions;

export default gmapsSlice.reducer;
