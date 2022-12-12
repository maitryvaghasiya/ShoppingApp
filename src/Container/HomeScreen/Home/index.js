import { View, Text, Image, ScrollView, TouchableOpacity, FlatList, Dimensions, StatusBar } from 'react-native'
import React, { useState } from 'react'
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
            image: require('../../../Resources/Images/grocery1.jpeg'),
            product: 'Grocery',
            offeritem: "Min.10% Off"
        },
        {
            id: 2,
            image: require('../../../Resources/Images/watch.jpeg'),
            product: 'Watch',
            offeritem: "Sale Tomorrow"
        },
        {
            id: 3,
            image: require('../../../Resources/Images/airpod.jpeg'),
            product: 'Earbudz',
            offeritem: "Up to 50% off"
        },
    ]

    const DailyUpdateData = ({ item }) => {
        // console.log("item");
        return (
            <TouchableOpacity style={styles.imgBox}>
                <Image source={item.image} style={styles.TopImg1} />
                <Text style={styles.Imgtext}>{item.product} </Text>
                <Text style={styles.ImgtextOfr}>{item.offeritem} </Text>
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

    const OfferUpdate = [
        {
            id: 1,
            image: require('../../../Resources/Images/traditional.png'),
            product: 'Indian Wear',
            offeritem: "From Rs.199"
        },
        {
            id: 2,
            image: require('../../../Resources/Images/makeup.png'),
            product: 'Beauty',
            offeritem: "30-70% Off"
        },
        {
            id: 3,
            image: require('../../../Resources/Images/garment.png'),
            product: 'Wrangler',
            offeritem: "Min.70% Off"
        },
        {
            id: 4,
            image: require('../../../Resources/Images/christmas.png'),
            product: 'Christmas',
            offeritem: "From Rs.99"
        },
        {
            id: 5,
            image: require('../../../Resources/Images/smartphone.png'),
            product: 'Mobile',
            offeritem: "0 Cost EMI>"
        },
        {
            id: 6,
            image: require('../../../Resources/Images/gadget.png'),
            product: 'Electronics',
            offeritem: "Up to 80% Off"
        },
    ]

    const OfferUpdateData = ({ item }) => {
        return (
            <TouchableOpacity style={styles.offerImgBox}>
                <Image source={item.image} style={styles.imgOffer} />
                <View style={styles.b1}></View>
                <Text style={styles.Imgtext}>{item.product} </Text>
                <Text style={styles.ImgtextOfr}>{item.offeritem} </Text>
            </TouchableOpacity>
        )
    }

    const Top = [
        {
            id: 1,
            image: require('../../../Resources/Images/smartwatch.png'),
            product: 'Boat SmartWatch',
            offeritem: "Most-Loved"
        },
        {
            id: 2,
            image: require('../../../Resources/Images/hairwig.png'),
            product: 'Hair Wig',
            offeritem: "New Range"
        },
        {
            id: 3,
            image: require('../../../Resources/Images/jeansmen.png'),
            product: 'Men-s Jeans',
            offeritem: "Top Collection"
        },
        {
            id: 4,
            image: require('../../../Resources/Images/rollon.png'),
            product: 'Roll-ons',
            offeritem: "Widest Range"
        },
    ]

    const TopData = ({ item }) => {
        return (
            <TouchableOpacity style={styles.primeImgBox}>
                <Image source={item.image} style={styles.imgPrime} />
                <View style={styles.b1}></View>
                <Text style={styles.Imgtext}>{item.product} </Text>
                <Text style={styles.ImgtextPrime}>{item.offeritem} </Text>
            </TouchableOpacity>
        )
    }

    const SponserPro = [
        {
            id: 1,
            image: require('../../../Resources/Images/bike.jpeg'),
            product: 'BikeDekho',
            offeritem: "Explore Now"
        },
        {
            id: 2,
            image: require('../../../Resources/Images/card1.webp'),
            product: 'Get instant',
            offeritem: "Buy Now"
        },
        {
            id: 3,
            image: require('../../../Resources/Images/card3.jpeg'),
            product: 'GiftCard',
            offeritem: "Buy Now"
        },
        {
            id: 4,
            image: require('../../../Resources/Images/card2.jpeg'),
            product: 'Various Price',
            offeritem: "Buy Now"
        },
        {
            id: 5,
            image: require('../../../Resources/Images/bike2.jpeg'),
            product: 'BikeDekho',
            offeritem: "Explore Now"
        },
        {
            id: 6,
            image: require('../../../Resources/Images/car1.jpeg'),
            product: 'CarDekho',
            offeritem: "Explore Now"
        },
    ]

    const SponserProData = ({ item }) => {
        return (
            <TouchableOpacity style={styles.sponserImgBox}>
                <Image source={item.image} style={styles.imgsponser} />
                <Text style={styles.Imgtext}>{item.product} </Text>
                <Text style={styles.ImgtextOfr}>{item.offeritem} </Text>
            </TouchableOpacity>
        )
    }

    const MelaOffer = [
        {
            id: 1,
            image: require('../../../Resources/Images/fridge.jpeg'),
            product: 'Refridgerators',
            offertext: "No-cost EMI",
            offeritem: "Min.30% Off",

        },
        {
            id: 2,
            image: require('../../../Resources/Images/storagebox.jpeg'),
            product: 'Storage Box',
            offertext: "Best Price",
            offeritem: "Up to 20% off"
        },
        {
            id: 3,
            image: require('../../../Resources/Images/kitchenmat.webp'),
            product: 'Kitchen Mat',
            offertext: "Metro Living",
            offeritem: "Min.50% Off"
        },
        {
            id: 4,
            image: require('../../../Resources/Images/medicinetab.jpeg'),
            product: 'Medicines',
            offertext: "Smooth Delivery",
            offeritem: "Min.30%+1% Cashback"
        },
    ]

    const MelaOfferData = ({ item }) => {
        return (
            <TouchableOpacity style={styles.melaImgBox}>
                <Image source={item.image} style={styles.imgMela} />
                <Text style={styles.Imgtext}>{item.product} </Text>
                <Text style={styles.Imgtext}>{item.offertext} </Text>
                <Text style={styles.ImgtextPrime}>{item.offeritem} </Text>
            </TouchableOpacity>
        )
    }

    const PrimeOffer = [
        {
            id: 1,
            image: require('../../../Resources/Images/babywipe.png'),
            product: 'Baby Wipes',
            offeritem: "Min.30% off"
        },
        {
            id: 2,
            image: require('../../../Resources/Images/homefur.png'),
            product: 'Home Furnishing',
            offeritem: "Min.50% off"
        },
        {
            id: 3,
            image: require('../../../Resources/Images/mosquito.png'),
            product: 'Mosquito Killers',
            offeritem: "Min.30% off"
        },
        {
            id: 4,
            image: require('../../../Resources/Images/handbag.png'),
            product: 'Handbags',
            offeritem: "Top Collection"
        },
    ]

    const PrimeOfferData = ({ item }) => {
        return (
            <TouchableOpacity style={styles.primeImgBox}>
                <Image source={item.image} style={styles.imgPrime} />
                <View style={styles.b1}></View>
                <Text style={styles.Imgtext}>{item.product} </Text>
                <Text style={styles.ImgtextPrime}>{item.offeritem} </Text>
            </TouchableOpacity>
        )
    }

    return (
        <ScrollView style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#047BD5"
            />
            <View style={styles.screen}>
                <View style={styles.headName}>
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

            <View >
                <FlatList
                    numColumns={3}
                    showsHorizontalScrollIndicator={false}
                    data={DailyUpdate}
                    renderItem={DailyUpdateData}
                    keyExtractor={item => item.id}
                />
            </View>

            <View style={styles.offerBgBox}>
                <TouchableOpacity style={styles.offerBox}>
                    <View>
                        <Text style={styles.offerText}>Shop Before Sale Start</Text>
                        <Text style={styles.offerText}>Lowest Prices of the Year!</Text>
                    </View>
                    <View>
                        <AntDesign name='caretright' style={styles.nextIcon} />
                    </View>
                </TouchableOpacity>
                <FlatList
                    numColumns={3}
                    data={OfferUpdate}
                    renderItem={OfferUpdateData}
                    keyExtractor={item => item.id}
                />
            </View>

            <View style={styles.primeBgBox}>
                <TouchableOpacity style={styles.primeBox}>
                    <View>
                        <Text style={styles.offerText}>Top EOSS Selection</Text>
                    </View>
                    <View>
                        <AntDesign name='caretright' style={styles.nextIcon} />
                    </View>
                </TouchableOpacity>
                <View >
                    <FlatList
                        numColumns={2}
                        data={Top}
                        renderItem={TopData}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>

            <View style={styles.sponsorBgBox}>
                <View style={styles.sponsorBox}>
                    <Text style={styles.offerText}>Sponsored</Text>
                </View>
                <FlatList
                    numColumns={3}
                    data={SponserPro}
                    renderItem={SponserProData}
                    keyExtractor={item => item.id}
                />
            </View>

            <View >
                <View >
                    <FlatList
                        numColumns={2}
                        data={MelaOffer}
                        renderItem={MelaOfferData}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>

            <View style={[styles.primeBgBox, { backgroundColor: "#F0AAF0" }]}>
                <TouchableOpacity style={styles.primeBox}>
                    <View>
                        <Text style={styles.offerText}>Shop Monthly Essentials          </Text>
                    </View>
                    <View>
                        <AntDesign name='caretright' style={styles.nextIcon} />
                    </View>
                </TouchableOpacity>
                <View >
                    <FlatList
                        numColumns={2}
                        data={PrimeOffer}
                        renderItem={PrimeOfferData}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>

        </ScrollView>
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

