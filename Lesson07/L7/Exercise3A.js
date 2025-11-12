import React from 'react';
import {View, Text, StyleSheet} from "react-native";


const Exercise3A = () => {
    const styles = StyleSheet.create({
        parent: {
            flexDirection: 'row',
            backgroundColor: '#F5fcff',
            borderColor: '0099AA',
            borderWidth: 5
        },
        child: {
            borderWidth: 2,
            textAlign: 'center',
            fontSize: 24
        }
    })

    return (
        <View style={styles.parent}>
            <Text style={[styles.child, {backgroundColor: 'green'}]}>Child One</Text>
            <Text style={[styles.child, {backgroundColor: 'green'}]}>Child Two</Text>
            <Text style={[styles.child, {backgroundColor: 'green'}]}>Child Three</Text>
        </View>
    )
}

export default Exercise3A;