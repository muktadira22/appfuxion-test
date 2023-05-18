import React from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
} from 'react-native';
import MapView, {Marker} from "react-native-maps";
import {useSelector} from "react-redux";

import GoogleMapsAutoComplete from './src/components/Form/GMapsAutoComplete/GMapsAutoComplete';
import Layout from "./src/components/Layout/Layout";

//get screen height
const deviceWidth = Dimensions.get("window").width

function App() {
    const {gmaps} = useSelector((state) => state)

    return (
        <Layout>
            <MapView
                style={styles.map}
                region={{
                    latitude: gmaps.latitude,
                    longitude: gmaps.longitude,
                    latitudeDelta: gmaps.latitudeDelta,
                    longitudeDelta: gmaps.longitudeDelta,
                }}
            >
                <Marker
                    coordinate={{latitude: gmaps.latitude, longitude: gmaps.longitude}}
                    title={gmaps.description}
                ></Marker>
            </MapView>
            <View style={styles.formMap}>
                <GoogleMapsAutoComplete/>
            </View>
        </Layout>
    );
}

const styles = StyleSheet.create({
    formMap: {
        padding: 10,
        width: deviceWidth
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
export default App;
