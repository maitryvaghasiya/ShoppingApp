import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'

import styles from './style';

const HomeScreen = ({navigation}) => {
    const DATA = [
        {
            id: 1,
            image: require('../../../Resources/Images/supercoin.png'),
            product: 'Super Coin',
        },
        {
            id: 2,
            // image: require('../assets/images/men.jpg'),
            product: 'Coupons',
        },
        {
            id: 3,
            // image: require('../assets/images/newkid.jpeg'),
            product: 'Credit',
        },
        {
            id: 4,
            // image: require('../assets/images/kurat.jpg'),
            product: 'Live',
        },
        {
            id: 5,
            // image: require('../assets/images/jwallary.jpg'),
            product: 'Whats New?',
        },
        {
            id: 6,
            // image: require('../assets/images/heelssss.jpg'),
            product: 'heels',
        },
        {
            id: 7,
            // image: require('../assets/images/westen.jpg'),
            product: 'westen',
        }

    ]

    const ClothDAta = ({ item }) => {
        console.log("item");
        return (

            <TouchableOpacity>
                <View style={styles.Pricecard}>
                    <Image source={item.image} style={styles.TopImg} />
                    <Text style={styles.Imgtext}>{item.product} </Text>
                </View>
            </TouchableOpacity>

        )

    }
    return (
        <View style={styles.container}>
            <View style={styles.screen}>
                <View>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={DATA}
                        renderItem={ClothDAta}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </View>
    )
}

export default HomeScreen;