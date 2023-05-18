import {configureStore} from '@reduxjs/toolkit';
import gmapsReducer from './gmaps/gmapsSlice'

export default configureStore({
    reducer: {
        gmaps: gmapsReducer
    },
});
