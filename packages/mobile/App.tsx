import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { value } from '@golink-clients/common';
export default function App() {
    return (
        <View style={styles.container}>
            <Text>Value from common package: {value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
