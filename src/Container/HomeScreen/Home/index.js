import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, FlatList, Dimensions  } from 'react-native'
import React, { useState } from 'react'
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
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

    const DATA1 = [
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
    const ClothDAta1 = ({ item }) => {
        // console.log("item");
        return (
            <TouchableOpacity style={styles.imgBox}> 
                    <Image source={item.image} style={styles.TopImg1} />
            </TouchableOpacity>
        )
    }
        const images = [
            "https://www.creativefabrica.com/wp-content/uploads/2021/04/26/Creative-Fashion-Sale-Banner-Graphics-11345601-1-1-580x387.jpg",
            "https://www.excelebiz.in/wp-content/uploads/2018/05/banner-1024x427.jpg",
            "https://img.freepik.com/premium-psd/running-shoes-facebook-timeline-cover-web-template_173189-49.jpg?w=1060",
            "https://img.freepik.com/free-vector/horizontal-sale-banner-template_23-2148897328.jpg?w=1060&t=st=1668492826~exp=1668493426~hmac=a44b944352c7ece2b63a21ddbd376d13a521366a4e85c941fbf35d37262ce919",
            "https://img.freepik.com/premium-vector/black-friday-fashion-facebook-cover-banner-template_58780-494.jpg?w=1060",
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a0c9b737352801.573d3df29868a.jpg",
            "https://img.freepik.com/free-psd/horizontal-banner-template-black-friday-clearance_23-2148745446.jpg?w=1060&t=st=1668493058~exp=1668493658~hmac=96080dc6f3b53df993a657f756d2b68017bce5ccc3d4975a3aea36bfdb50d2f8",        
        ]
            
    
    return (
        <View style={styles.container}>

            <View style={styles.screen}>
                <View style={styles.headName}>
                    <View style={styles.searchBar}>
                        <View>
                            <TextInput style={styles.iconSearch}>
                                <AntDesign name='search1' color={"#047BD5"} style={styles.searchIcon} />
                                <Text>Search for products</Text>
                            </TextInput>                       
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
                </View>
                <View>
                <ImageSlider images={images} />
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
                   
                <View style={[styles.screen,{backgroundColor:'red'}]}>
                    <FlatList
                    numColumns={3}
                        // horizontal
                        showsHorizontalScrollIndicator={false}
                        data={DATA1}
                        renderItem={ClothDAta1}
                        keyExtractor={item => item.id}
                    />
                </View>
               
           
           
        </View>
    )
}


export const ImageSlider = ({ images }) => {

    const { width } = Dimensions.get('window');
    const height = width * 0.5;

    const [active, setActive] = useState(0);

    const onScrollChange = ({ nativeEvent }) => {
        const slide = Math.ceil(
            nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
        );
        if (slide !== active) {
            setActive(slide);
        }
    };

    return (
        <View>
            <ScrollView
                pagingEnabled
                horizontal
                onScroll={onScrollChange}
                showsHorizontalScrollIndicator={false}
                style={{ width, height }}>
                {images.map((image, index) => (
                    <Image
                        key={index}
                        source={{ uri: image }}
                        style={styles.slider}
                    />
                ))}
            </ScrollView>
            <View style={styles.pagination}>
                {images.map((i, k) => (
                    <Text key={k} style={k == active ? styles.activeDot : styles.dot}>
                        •
                    </Text>
                ))}
            </View>
        </View>
    );
}

export default HomeScreen;

