// Exercise4
import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-around',
    },
    child: {
        width: 80,
        height: 80,
        textAlign: 'center',
    },
});

const Exercise4 = () => {
    return (
        <View style={styles.parent}>
            <View>
                <Text style={[styles.child, {backgroundColor: 'skyblue'}]}>Square 1</Text>
            </View>
            <View>
                <Text style={[styles.child, {backgroundColor: 'aquamarine'}]}>Square 2</Text>
            </View>
            <View>
                <Text style={[styles.child, {backgroundColor: 'crimson'}]}>Square 3</Text>
            </View>
        </View>
    );
};

export default Exercise4;