import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity, SectionList, Image, Button} from 'react-native';

const datasource = [
    {
        data:[
            {name: 'Joseph Robinette Biden Jr', source: require('./img/Joe_Biden_presidential_portrait.jpg')},
            {name: 'Kamala Devi Harris', source: require('./img/Kamala_Harris_Vice_Presidential_Portrait.jpg')}
        ],
        title: '46th Presidential Administration'
    },
    {
        data:[
            {name: 'Donald Trump', source: require('./img/trump.jpg')},
            {name: 'Mike Pence', source: require('./img/Mike_Pence_official_Vice_Presidential_portrait.jpg')}
        ],
        title: '45th Presidential Administration'
    },
    {
        data: [
            {name: 'Barack Hussein Obama II', source: require('./img/44_barack_obama.jpg')},
            {name: 'Joseph Robinette Biden Jr', source: require('./img/vp_portrait.jpg')}
        ],
        title: '44th Presidential Administration'
    }
];

const styles = StyleSheet.create({
    opacityStyle: {
        borderWidth: 1,
    },
    textStyle: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: 'deepskyblue'
    },
    cardStyle: {
        backgroundColor: 'skyblue',
        borderWidth: 1,
        borderColor: 'black'
    },
    imageStyle: {
        alignSelf: 'center',
        marginBottom: 20,
        marginRight: 20,
        width: 200,
        height: 300
    },
    addButtonStyle: {
        backgroundColor: 'blue',
        borderWidth: 1,
        borderColor: 'black',
        margin: 20,
        alignItems: 'center',
        padding: 10
    },
    buttonTextStyle: {
        textTransform: 'uppercase',
        color: 'white',
        fontWeight: 'bold'
    }


});


const renderItem = ({ item }) => {

    return (
        <TouchableOpacity style={styles.opacityStyle}>
            <View style={styles.cardStyle}>
                <Text style={styles.textStyle}>{item.name}</Text>
                <Image source={item.source} style={styles.imageStyle}/>
            </View>
        </TouchableOpacity>
    );
};

// Amend code to display header icon etc
const MyApp = () => {
    return (
        <View style={{marginTop: 30, marginBottom: 50}}>
            <TouchableOpacity style={styles.addButtonStyle}>
                <View>
                    <Text style={styles.buttonTextStyle}>
                        Add Administration
                    </Text>
                </View>
            </TouchableOpacity>

            <SectionList
                contentContainerStyle={{padding:10}}
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={ ( {section: {title}}) => (
                    <Text style={styles.headerText}>
                        {title}
                    </Text>
                )}
            />
        </View>
    );
};

export default MyApp;


