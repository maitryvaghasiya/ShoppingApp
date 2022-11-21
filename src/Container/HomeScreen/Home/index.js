import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'

import styles from './style';

const HomeScreen = ({ navigation }) => {
    const DATA = [
        {
            id: 1,
            image: require('../../../Resources/Images/coin.png'),
            product: 'coin',
        },
        {
            id: 2,
            image: require('../../../Resources/Images/coupon.png'),
            product: 'coupen',
        },
        {
            id: 3,
            image: require('../../../Resources/Images/credit-card.png'),
            product: 'credit',
        },
        {
            id: 4,
            image: require('../../../Resources/Images/live.png'),
            product: 'Live',
        },
        {
            id: 5,
            image: require('../../../Resources/Images/whats-new.png'),
            product: 'Whats New?',
        },
        {
            id: 6,
            image: require('../../../Resources/Images/camera.png'),
            product: 'heels',
        },
        {
            id: 7,
            image: require('../../../Resources/Images/game-control.png'),
            product: 'westen',
        }

    ]

    const ClothDAta = ({ item }) => {
        // console.log("item");
        return (
                <View>
                <TouchableOpacity>
                    <View style={styles.Pricecard}>
                        <Image source={item.image} style={styles.TopImg} />
                    </View>
                    <View>
                        <Text style={styles.Imgtext}>{item.product} </Text>
                    </View>
                </TouchableOpacity>
                </View>
        )
    }  

    const DATA1 = [
        {
            id: 1,
            image1: require('../../../Resources/Images/grocery.jpeg'),
            product1: 'coin',
        },
        {
            id: 2,
            image1: require('../../../Resources/Images/watch.jpeg'),
            product1: 'coupen',
        },
        {
            id: 3,
            image1: require('../../../Resources/Images/earpodes.webp'),
            product1: 'credit',
        },
       
    ]

   

    const ClothDAta1= ({ item }) => {
        // console.log("item");
        return (
            <TouchableOpacity>
            <View  style={styles.FlatList1}>
            <Image source={item.image1} style={styles.TopImg1} />
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
                <View>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={DATA1}
                        renderItem={ClothDAta1}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </View>
    )
}

export default HomeScreen;

