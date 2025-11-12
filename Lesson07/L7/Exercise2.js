import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const Exercise2 = () => {
    const styles = StyleSheet.create (
        {
            greenBox: {
                width: 100,
                height: 100,
                marginTop: 30,
                backgroundColor: 'green',
                borderWidth: 1,
                borderColor: 'black'
            },

            boxText: {
                textAlign: 'center',
                color: 'white'
            },
            title: {
                fontWeight: 'bold'
            }
        }
    )
    return (
        <View style={{marginTop: 30}}>
            <View style={styles.greenBox}>
                <Text style={[styles.boxText, styles.title]}>Who We Are</Text>
            </View>
            <View style={styles.greenBox}>
                <Text style={[styles.boxText, styles.title]}>Our People</Text>
            </View>
            <View style={styles.greenBox}>
                <Text style={[styles.boxText, styles.title]}>Our Campus</Text>
            </View>
        </View>
    );
};

export default Exercise2;