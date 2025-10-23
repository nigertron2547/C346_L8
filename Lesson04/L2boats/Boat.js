import React from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Boat = ({name, description, picture}) => {
    return (
        <View>
            <Text style={{fontWeight:'bold', fontSize: 20, fontFamily: 'monospace'}}>
                <FontAwesome6 name='sailboat' size={35} color='black' />{name}
            </Text>
            <Text>
                {description}
            </Text>
                <Image source={picture} width={150} height={150} />
        </View>
    )
}

export default Boat;