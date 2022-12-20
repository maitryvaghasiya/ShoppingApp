import { Text, View, ScrollView, TouchableOpacity, FlatList, StatusBar, Image } from "react-native";
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Images from "../../../../Theme/Images";
import LinearGradient from 'react-native-linear-gradient';

const CategoryHome = ({ navigation }) => {
    const OfferUpdate = [
        {
            id: 1,
            image: require('../../../../Resources/Images/traditional.png'),
            product: 'Indian Wear',
            offeritem: "From Rs.199"
        },
        {
            id: 2,
            image: require('../../../../Resources/Images/makeup.png'),
            product: 'Beauty',
            offeritem: "30-70% Off"
        },
        {
            id: 3,
            image: require('../../../../Resources/Images/garment.png'),
            product: 'Wrangler',
            offeritem: "Min.70% Off"
        },
        {
            id: 4,
            image: require('../../../../Resources/Images/christmas.png'),
            product: 'Christmas',
            offeritem: "From Rs.99"
        },
        {
            id: 5,
            image: require('../../../../Resources/Images/smartphone.png'),
            product: 'Mobile',
            offeritem: "0 Cost EMI>"
        },
        {
            id: 6,
            image: require('../../../../Resources/Images/gadget.png'),
            product: 'Electronics',
            offeritem: "Up to 80% Off"
        },
    ]

    const OfferUpdateData = ({ item }) => {
        return (
            <TouchableOpacity style={styles.offerImgBox}>
                <Image source={item.image} style={styles.imgOffer} />
                <View style={styles.b1}></View>
                <Text style={[styles.Imgtext, { textAlign: "center" }]}>{item.product} </Text>
                <Text style={styles.ImgtextOfr}>{item.offeritem} </Text>
            </TouchableOpacity>
        )
    }

    const Category = [
        {
            id: 1,
            image: require('../../../../Resources/Images/offer.png'),
            start: "Extra 10% off",
            product: 'Cookeware',
        },
        {
            id: 2,
            image: require('../../../../Resources/Images/grocery.png'),
            start: "From Rs.79",
            product: 'Home Furnishing',
        },
        {
            id: 3,
            image: require('../../../../Resources/Images/mobile.png'),
            start: "From Rs.99",
            product: 'Accessories',
        },
        {
            id: 4,
            image: require('../../../../Resources/Images/fashion.png'),
            start: "From Rs.59",
            product: 'Home Decor & More',
        },
        {
            id: 5,
            image: require('../../../../Resources/Images/home.png'),
            start: "From Rs.129",
            product: 'Bedsheets & More',
        },
        {
            id: 6,
            image: require('../../../../Resources/Images/toys.png'),
            start: "Extra 10% off",
            product: 'Healthy Cooking',
        },
        {
            id: 7,
            image: require('../../../../Resources/Images/sports.png'),
            start: "From Rs.199",
            product: 'Home Lighting',
        },
        {
            id: 8,
            image: require('../../../../Resources/Images/medicine.png'),
            start: "From Rs.69",
            product: 'Bath & Kitchen',
        },

    ]

    const CategoryData = ({ item }) => {
        console.log("item", item);
        return (

            <TouchableOpacity style={styles.cardBox} >
                <View style={styles.imgCard}>
                    <Image source={item.image} style={styles.productImg} />
                    <View style={styles.start}>
                        <Text style={styles.startText}>{item.start}</Text>
                    </View>
                </View>
                <Text style={styles.Imgtext}>{item.product}</Text>
            </TouchableOpacity>
        )
    }

    const SamsungMobile2 = [
        {
            id: 1,
            image: require('../../../../Resources/Images/m1.png'),
            mob: 'Samsung A74',
            mobPrice: "Rs.14999",
            mPrice: "Rs.17000"
        },
        {
            id: 2,
            image: require('../../../../Resources/Images/m2.png'),
            mob: 'Samsung 9R',
            mobPrice: "Rs.29999",
            mPrice: "Rs.35000"
        },
        {
            id: 3,
            image: require('../../../../Resources/Images/m3.png'),
            mob: 'Samsung 10S',
            mobPrice: "Rs.17999",
            mPrice: "Rs.19000"
        },
        {
            id: 4,
            image: require('../../../../Resources/Images/m1.png'),
            mob: 'Samsung 12',
            mobPrice: "Rs.87999",
            mPrice: "Rs.91000"
        },
        {
            id: 5,
            image: require('../../../../Resources/Images/m5.png'),
            mob: 'Samsung Y21',
            mobPrice: "Rs.20999",
            mPrice: "Rs.23000"
        },
        {
            id: 6,
            image: require('../../../../Resources/Images/m6.png'),
            mob: 'Samsung C35',
            mobPrice: "Rs.17999",
            mPrice: "Rs.20000"
        },
    ]

    const SamsungMobile2Data = ({ item }) => {
        return (
            <TouchableOpacity style={[styles.topImgBox, { width: 120, marginLeft: 5, marginRight: 5, }]}>
                <Image source={item.image} style={[styles.imgTop, { width: "75%" }]} />
                <View style={[styles.b1, { borderColor: "#047BD5" }]}></View>
                <Text style={styles.ImgtextMob}>{item.mob} </Text>
                <Text style={styles.ImgtextMb}>{item.mobPrice} </Text>
                <Text style={styles.priceMob}>{item.mPrice} </Text>
            </TouchableOpacity>
        )
    }

    const Top = [
        {
            id: 1,
            image: require('../../../../Resources/Images/bedsheet.jpeg'),
            product: 'Boat SmartWatch',
            offeritem: "Most-Loved"
        },
        {
            id: 2,
            image: require('../../../../Resources/Images/bedsheet.jpeg'),
            product: 'Hair Wig',
            offeritem: "New Range"
        },
        {
            id: 3,
            image: require('../../../../Resources/Images/bedsheet.jpeg'),
            product: 'Men-s Jeans',
            offeritem: "Top Collection"
        },
        {
            id: 4,
            image: require('../../../../Resources/Images/bedsheet.jpeg'),
            product: 'Roll-ons',
            offeritem: "Widest Range"
        },
        {
            id: 5,
            image: require('../../../../Resources/Images/bedsheet.jpeg'),
            product: 'Boat SmartWatch',
            offeritem: "Most-Loved"
        },
        {
            id: 6,
            image: require('../../../../Resources/Images/bedsheet.jpeg'),
            product: 'Hair Wig',
            offeritem: "New Range"
        },
        {
            id: 7,
            image: require('../../../../Resources/Images/bedsheet.jpeg'),
            product: 'Men-s Jeans',
            offeritem: "Top Collection"
        },
        {
            id: 8,
            image: require('../../../../Resources/Images/bedsheet.jpeg'),
            product: 'Roll-ons',
            offeritem: "Widest Range"
        },
        {
            id: 9,
            image: require('../../../../Resources/Images/bedsheet.jpeg'),
            product: 'Men-s Jeans',
            offeritem: "Top Collection"
        },
        {
            id: 10,
            image: require('../../../../Resources/Images/bedsheet.jpeg'),
            product: 'Roll-ons',
            offeritem: "Widest Range"
        },
    ]

    const TopData = ({ item }) => {
        return (
            <TouchableOpacity style={styles.primeImgBox}>
                <Image source={item.image} style={styles.imgPrime} />

                <Text style={styles.Imgtext1}>{item.product} </Text>
                <Text style={styles.ImgtextPrime}>{item.offeritem} </Text>

            </TouchableOpacity>
        )
    }

    const Top20 = [
        {
            id: 1,
            image: require('../../../../Resources/Images/lunch.jpeg'),
            mob: 'Samsung A74',
            mobPrice: "Rs.14999",

        },
        {
            id: 2,
            image: require('../../../../Resources/Images/pillow.jpeg'),
            mob: 'Samsung 9R',
            mobPrice: "Rs.29999",

        },
        {
            id: 3,
            image: require('../../../../Resources/Images/m3.png'),
            mob: 'Samsung 10S',
            mobPrice: "Rs.17999",

        },
        {
            id: 4,
            image: require('../../../../Resources/Images/m1.png'),
            mob: 'Samsung 12',
            mobPrice: "Rs.87999",

        },
        {
            id: 5,
            image: require('../../../../Resources/Images/m5.png'),
            mob: 'Samsung Y21',
            mobPrice: "Rs.20999",

        },
        {
            id: 6,
            image: require('../../../../Resources/Images/m6.png'),
            mob: 'Samsung C35',
            mobPrice: "Rs.17999",

        },
        {
            id: 7,
            image: require('../../../../Resources/Images/m1.png'),
            mob: 'Samsung A74',
            mobPrice: "Rs.14999",

        },
        {
            id: 8,
            image: require('../../../../Resources/Images/m2.png'),
            mob: 'Samsung 9R',
            mobPrice: "Rs.29999",

        },
        {
            id: 9,
            image: require('../../../../Resources/Images/m3.png'),
            mob: 'Samsung 10S',
            mobPrice: "Rs.17999",

        },
        {
            id: 10,
            image: require('../../../../Resources/Images/m1.png'),
            mob: 'Samsung 12',
            mobPrice: "Rs.87999",

        },
        {
            id: 11,
            image: require('../../../../Resources/Images/m5.png'),
            mob: 'Samsung Y21',
            mobPrice: "Rs.20999",

        },
        {
            id: 12,
            image: require('../../../../Resources/Images/m6.png'),
            mob: 'Samsung C35',
            mobPrice: "Rs.17999",

        },
        {
            id: 13,
            image: require('../../../../Resources/Images/m1.png'),
            mob: 'Samsung A74',
            mobPrice: "Rs.14999",

        },
        {
            id: 14,
            image: require('../../../../Resources/Images/m2.png'),
            mob: 'Samsung 9R',
            mobPrice: "Rs.29999",

        },
        {
            id: 15,
            image: require('../../../../Resources/Images/m3.png'),
            mob: 'Samsung 10S',
            mobPrice: "Rs.17999",

        },
        {
            id: 16,
            image: require('../../../../Resources/Images/m1.png'),
            mob: 'Samsung 12',
            mobPrice: "Rs.87999",

        },
    ]

    const Top20Data = ({ item }) => {
        return (
            <TouchableOpacity style={styles.ImgBox20}>
                <View style={styles.img20Box}>
                    <Image source={item.image} style={styles.img20} />
                </View>
                <Text style={[styles.Imgtext, { textAlign: "center" }]}>{item.mob} </Text>
                <Text style={styles.ImgtextOfr}>{item.mobPrice} </Text>
            </TouchableOpacity>
        )
    }

    const CrazyDeal = [
        {
            id: 1,
            image: require('../../../../Resources/Images/bedsheet.jpeg'),
            product: 'Boat SmartWatch',
            offeritem: "Most-Loved"
        },
        {
            id: 2,
            image: require('../../../../Resources/Images/bedsheet.jpeg'),
            product: 'Hair Wig',
            offeritem: "New Range"
        },
        {
            id: 3,
            image: require('../../../../Resources/Images/bedsheet.jpeg'),
            product: 'Men-s Jeans',
            offeritem: "Top Collection"
        },
        {
            id: 4,
            image: require('../../../../Resources/Images/bedsheet.jpeg'),
            product: 'Roll-ons',
            offeritem: "Widest Range"
        },
    ]

    const CrazyDealData = ({ item }) => {
        return (
            <TouchableOpacity style={styles.crazyImgBox}>
                <Image source={item.image} style={styles.imgCrazy} />

                <Text style={styles.ImgtextCrazy}>{item.product} </Text>
                <Text style={styles.ImgtextC1}>{item.offeritem} </Text>
                <View style={styles.b1}></View>
                <View style={styles.verticleLine}></View>

            </TouchableOpacity>
        )
    }


    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#047BD5"
            />
            <View style={styles.headName}>
                <View style={styles.iconDes}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <MaterialIcons name='arrow-back-ios' style={styles.backIcon} size={18} />
                    </TouchableOpacity>
                    <Text style={styles.headText}>Big Saving Days</Text>
                </View>
                <View style={styles.iconDes}>
                    <TouchableOpacity onPress={() => navigation.navigate('SearchScrn')}>
                        <AntDesign name='search1' color={"#fff"} style={styles.searchIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <FontAwesome name='microphone' color={"#fff"} style={styles.miceIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Entypo name='camera' color={"#fff"} style={styles.miceIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <MaterialIcons name='shopping-cart' color={"#fff"} style={styles.miceIcon} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View>
                    <Image source={Images.homesale} style={styles.saleImg} />
                </View>

                <View >
                    <View style={styles.headBox}>

                        <Text style={styles.headMob}>HAR DIN UTSAV DEALS</Text>
                        <Text style={styles.headTextMob}>Refresh Every 1 Hour</Text>

                    </View>
                    <View style={styles.offerBgBox}>
                        <FlatList
                            numColumns={3}
                            data={OfferUpdate}
                            renderItem={OfferUpdateData}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
                <View >
                    <FlatList
                        numColumns={4}
                        showsHorizontalScrollIndicator={false}
                        data={Category}
                        renderItem={CategoryData}
                        keyExtractor={item => item.id}
                    />
                </View>
                <TouchableOpacity style={styles.bigAds}>
                    <View style={styles.partAds}>
                        <View style={{ marginLeft: 20 }}>
                            <Text style={styles.nameMob}>Cozy Winter Essentials</Text>
                            <View style={styles.price}>
                                <Text style={styles.nameMob1}>Up to 80% off</Text>
                            </View>
                            <Text style={styles.detailMob}>Blenkets, Comforters & More</Text>
                            <LinearGradient
                                start={{ x: 0.1, y: 0.1 }} end={{ x: 0.7, y: 1.0 }}
                                locations={[0.1, 0.75, 1]}
                                colors={['#FFEE58', '#FDD835', '#F9AB25']}
                                style={styles.linearGradient}>
                                <View style={{ height: 25, width: 100 }}>
                                    <Text style={styles.buttonText}>
                                        Shop Now
                                    </Text>
                                </View>
                            </LinearGradient>
                        </View>
                        <Image source={Images.bedsheet} style={styles.mobileImg} />
                    </View>
                </TouchableOpacity>

                <View>
                    <View style={styles.headBox}>

                        <Text style={styles.headMob}>HAR DIN UTSAV DEALS</Text>
                        <Text style={styles.headTextMob}>Refresh Every 1 Hour</Text>

                    </View>
                    <View >
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={SamsungMobile2}
                            renderItem={SamsungMobile2Data}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
                <View>
                    <View style={styles.headBox}>

                        <Text style={styles.headMob}>HAR DIN UTSAV DEALS</Text>
                        <Text style={styles.headTextMob}>Refresh Every 1 Hour</Text>

                    </View>
                    <View style={styles.primeBgBox}>
                        <View >
                            <FlatList
                                numColumns={2}
                                data={Top}
                                renderItem={TopData}
                                keyExtractor={item => item.id}
                            />
                        </View>
                    </View>
                </View>
                <View >
                    <View style={styles.headBox}>
                        <Text style={styles.headMob}>TOP 20 BESTSELLERS</Text>
                    </View>
                    <View style={styles.top20BgBox}>
                        <FlatList
                            numColumns={4}
                            data={Top20}
                            renderItem={Top20Data}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
                <View >
                    <View style={styles.crazyBgBox}>
                        <View style={styles.heading}>
                            <View>
                                <Text style={styles.dealText}>Crazy Deals</Text>
                            </View>
                            <TouchableOpacity style={styles.viewBox}>
                                <Text style={styles.viewText}>View All</Text>
                            </TouchableOpacity>
                        </View>
                        <View >
                            <FlatList
                                numColumns={2}
                                data={CrazyDeal}
                                renderItem={CrazyDealData}
                                keyExtractor={item => item.id}
                            />

                        </View>
                    </View>
                </View>
                <View >
                    <View style={[styles.crazyBgBox,{backgroundColor:"#C8268D"}]}>
                        <View style={styles.heading}>
                            <View>
                                <Text style={styles.dealText}>TikTok Deals</Text>
                            </View>
                            <TouchableOpacity style={styles.viewBox}>
                                <Text style={styles.viewText}>View All</Text>
                            </TouchableOpacity>
                        </View>
                        <View >
                            <FlatList
                                numColumns={2}
                                data={CrazyDeal}
                                renderItem={CrazyDealData}
                                keyExtractor={item => item.id}
                            />

                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}


export default CategoryHome;