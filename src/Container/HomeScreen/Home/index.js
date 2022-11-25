import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { SliderBox } from "react-native-image-slider-box";

const HomeScreen = ({ navigation }) => {

    const Facilities = [
        {
            id: 1,
            image: require('../../../Resources/Images/coin.png'),
            product: 'Coin',
        },
        {
            id: 2,
            image: require('../../../Resources/Images/coupon.png'),
            product: 'Coupon',
        },
        {
            id: 3,
            image: require('../../../Resources/Images/credit-card.png'),
            product: 'Credit',
        },
        {
            id: 4,
            image: require('../../../Resources/Images/live.png'),
            product: 'Live',
        },
        {
            id: 5,
            image: require('../../../Resources/Images/whats-new.png'),
            product: 'New',
        },
        {
            id: 6,
            image: require('../../../Resources/Images/camera.png'),
            product: 'Camera',
        },
        {
            id: 7,
            image: require('../../../Resources/Images/game.png'),
            product: 'Game',
        },
    ]

    const FacilitiesData = ({ item }) => {
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

    const DailyUpdate = [
        {
            id: 1,
            image: require('../../../Resources/Images/grocery.jpeg'),
            product: 'Coin',
        },
        {
            id: 2,
            image: require('../../../Resources/Images/watch.jpeg'),
            product: 'Coupon',
        },
        {
            id: 3,
            image: require('../../../Resources/Images/airpod.jpeg'),
            product: 'Credit',
        },
    ]

    const DailyUpdateData = ({ item }) => {
        // console.log("item");
        return (
            <TouchableOpacity style={styles.imgBox}> 
                    <Image source={item.image} style={styles.TopImg1} />
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.screen}>
                <View style={styles.headName}>
                    <View style={styles.searchBar}>
                        <View>
                            <TouchableOpacity style={styles.iconSearch} onPress={() => navigation.navigate('SearchScrn')}>
                                <AntDesign name='search1' color={"#047BD5"} style={styles.searchIcon} />
                                <Text>Search for products</Text>
                            </TouchableOpacity>                       
                        </View>
                        <View style={styles.icon2Des}>
                            <TouchableOpacity >
                                <FontAwesome name='microphone' color={"#047BD5"} style={styles.miceIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <Feather name='camera' color={"#047BD5"} style={styles.miceIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                
                <View>
                    <FlatList
                        
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={Facilities}
                        renderItem={FacilitiesData}
                        keyExtractor={item => item.id}
                    />
                </View>

                <View>
                    <FlatList
                    numColumns={3}
                        // horizontal
                        showsHorizontalScrollIndicator={false}
                        data={DailyUpdate}
                        renderItem={DailyUpdateData}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </View>
    )
}

export default HomeScreen;

