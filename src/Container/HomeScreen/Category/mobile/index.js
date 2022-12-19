import { Text, View, ScrollView, TouchableOpacity, FlatList, StatusBar, Image } from "react-native";
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Images from "../../../../Theme/Images";
import { SliderBox } from "react-native-image-slider-box";

const CategoryMobile = ({ navigation }) => {

    const images = [
        "https://www.creativefabrica.com/wp-content/uploads/2021/04/26/Creative-Fashion-Sale-Banner-Graphics-11345601-1-1-580x387.jpg",
        "https://www.excelebiz.in/wp-content/uploads/2018/05/banner-1024x427.jpg",
        "https://img.freepik.com/premium-psd/running-shoes-facebook-timeline-cover-web-template_173189-49.jpg?w=1060",
        "https://img.freepik.com/free-vector/horizontal-sale-banner-template_23-2148897328.jpg?w=1060&t=st=1668492826~exp=1668493426~hmac=a44b944352c7ece2b63a21ddbd376d13a521366a4e85c941fbf35d37262ce919",
        "https://img.freepik.com/premium-vector/black-friday-fashion-facebook-cover-banner-template_58780-494.jpg?w=1060",
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a0c9b737352801.573d3df29868a.jpg",
        "https://img.freepik.com/free-psd/horizontal-banner-template-black-friday-clearance_23-2148745446.jpg?w=1060&t=st=1668493058~exp=1668493658~hmac=96080dc6f3b53df993a657f756d2b68017bce5ccc3d4975a3aea36bfdb50d2f8",
    ]

    const BrandMobile = [
        {
            id: 1,
            image: require('../../../../Resources/Images/vivo.webp'),
        },
        {
            id: 2,
            image: require('../../../../Resources/Images/onepls.jpeg'),
        },
        {
            id: 3,
            image: require('../../../../Resources/Images/samsung.webp'),
        },
        {
            id: 4,
            image: require('../../../../Resources/Images/iphone.webp'),
        },
        {
            id: 5,
            image: require('../../../../Resources/Images/mi.png'),
        },
        {
            id: 6,
            image: require('../../../../Resources/Images/oppo.webp'),
        },
        {
            id: 7,
            image: require('../../../../Resources/Images/motorola.webp'),
        },
        {
            id: 8,
            image: require('../../../../Resources/Images/poco.png'),
        },
        {
            id: 9,
            image: require('../../../../Resources/Images/micromax.jpeg'),
        },
    ]

    const BrandMobileData = ({ item }) => {
        // console.log("item");
        return (
            <View>
                <TouchableOpacity>
                    <Image source={item.image} style={styles.TopImg} />
                </TouchableOpacity>
            </View>
        )
    }

    const OfferMobile = [
        {
            id: 1,
            image: require('../../../../Resources/Images/m11.png'),
            product: 'Up to rs.750 off',
            offeritem: "on Supercoins"
        },
        {
            id: 2,
            image: require('../../../../Resources/Images/m12.png'),
            product: 'Ab Phone Pe',
            offeritem: "NO Cost EMI>"
        },
        {
            id: 3,
            image: require('../../../../Resources/Images/m13.png'),
            product: 'Best Exchange',
            offeritem: "Price are Live"
        },

    ]

    const OfferMobileData = ({ item }) => {
        return (
            <TouchableOpacity style={styles.offerImgBox}>
                <Image source={item.image} style={styles.imgOffer} />
                <View style={styles.b1}></View>
                <Text style={styles.Imgtext}>{item.product} </Text>
                <Text style={styles.ImgtextOfr}>{item.offeritem} </Text>
            </TouchableOpacity>
        )
    }

    const TopMobile = [
        {
            id: 1,
            image: require('../../../../Resources/Images/m1.png'),
            mob: 'Oppo A74',
            mobPrice: "Rs.14999",
            mPrice: "Rs.17000"
        },
        {
            id: 2,
            image: require('../../../../Resources/Images/m2.png'),
            mob: 'Oneplus 9R',
            mobPrice: "Rs.29999",
            mPrice: "Rs.35000"
        },
        {
            id: 3,
            image: require('../../../../Resources/Images/m3.png'),
            mob: 'Redmi 10S',
            mobPrice: "Rs.17999",
            mPrice: "Rs.19000"
        },
        {
            id: 4,
            image: require('../../../../Resources/Images/m4.png'),
            mob: 'iPhone 12',
            mobPrice: "Rs.87999",
            mPrice: "Rs.91000"
        },
        {
            id: 5,
            image: require('../../../../Resources/Images/m5.png'),
            mob: 'Vivo Y21',
            mobPrice: "Rs.20999",
            mPrice: "Rs.23000"
        },
        {
            id: 6,
            image: require('../../../../Resources/Images/m6.png'),
            mob: 'Realme C35',
            mobPrice: "Rs.17999",
            mPrice: "Rs.20000"
        },
        {
            id: 7,
            image: require('../../../../Resources/Images/m1.png'),
            mob: 'Moto G52',
            mobPrice: "Rs.14999",
            mPrice: "Rs.17000"
        },
        {
            id: 8,
            image: require('../../../../Resources/Images/m2.png'),
            mob: 'Samsung s10',
            mobPrice: "Rs.84999",
            mPrice: "Rs.90000"
        },
        {
            id: 9,
            image: require('../../../../Resources/Images/m3.png'),
            mob: 'Poco F1',
            mobPrice: "Rs.12999",
            mPrice: "Rs.16000"
        },
        {
            id: 10,
            image: require('../../../../Resources/Images/m4.png'),
            mob: 'iPhone 11',
            mobPrice: "Rs.52999",
            mPrice: "Rs.59000"
        },
    ]

    const TopMobileData = ({ item }) => {
        return (
            <TouchableOpacity style={styles.topImgBox}>
                <Image source={item.image} style={styles.imgTop} />
                <View style={[styles.b1, { borderColor: "#047BD5" }]}></View>
                <Text style={styles.ImgtextMob}>{item.mob} </Text>
                <Text style={styles.ImgtextMb}>{item.mobPrice} </Text>
                <Text style={styles.priceMob}>{item.mPrice} </Text>
            </TouchableOpacity>
        )
    }

    const Premium = [
        {
            id: 1,
            image: require('../../../../Resources/Images/m4.png'),
            mob: 'iPhone 11',
            details: "Smart.Powerful.Helpful",
            mobPrice: "From Rs.69999",
            mPrice: "Rs.75000"

        },
        {
            id: 2,
            image: require('../../../../Resources/Images/m6.png'),
            mob: 'Vivo V21',
            details: "Smart.Powerful.Helpful",
            mobPrice: "From Rs.40999",
            mPrice: "Rs.44000"
        },
        {
            id: 3,
            image: require('../../../../Resources/Images/m2.png'),
            mob: 'Samsung S21',
            details: "Smart.Powerful.Helpful",
            mobPrice: "From Rs.89999",
            mPrice: "Rs.99000"
        },
        {
            id: 4,
            image: require('../../../../Resources/Images/m3.png'),
            mob: 'Poco F3',
            details: "Smart.Powerful.Helpful",
            mobPrice: "From Rs.21999",
            mPrice: "Rs.25000"
        },
    ]

    const PremiumData = ({ item }) => {
        return (
            <TouchableOpacity style={styles.melaImgBox}>
                <Image source={item.image} style={styles.imgMela} />
                <Text style={styles.textMob}>{item.mob} </Text>
                <Text style={styles.textDetail}>{item.details} </Text>
                <Text style={[styles.textMob, { fontSize: 17 }]}>{item.mobPrice} </Text>
                <Text style={styles.priceMob}>{item.mPrice} </Text>
            </TouchableOpacity>
        )
    }

    const MobileDtl = [
        {
            id: 1,
            image: require('../../../../Resources/Images/m1.png'),
            mob: 'Oppo A74',
            mobPrice: "Rs.14999",
            mPrice: "Rs.17000"
        },
        {
            id: 2,
            image: require('../../../../Resources/Images/m2.png'),
            mob: 'Oneplus 9R',
            mobPrice: "Rs.29999",
            mPrice: "Rs.35000"
        },
        {
            id: 3,
            image: require('../../../../Resources/Images/m3.png'),
            mob: 'Redmi 10S',
            mobPrice: "Rs.17999",
            mPrice: "Rs.19000"
        },
        {
            id: 4,
            image: require('../../../../Resources/Images/m4.png'),
            mob: 'iPhone 12',
            mobPrice: "Rs.87999",
            mPrice: "Rs.91000"
        },
        {
            id: 5,
            image: require('../../../../Resources/Images/m5.png'),
            mob: 'Vivo Y21',
            mobPrice: "Rs.20999",
            mPrice: "Rs.23000"
        },
        {
            id: 6,
            image: require('../../../../Resources/Images/m6.png'),
            mob: 'Realme C35',
            mobPrice: "Rs.17999",
            mPrice: "Rs.20000"
        },
        {
            id: 7,
            image: require('../../../../Resources/Images/m1.png'),
            mob: 'Moto G52',
            mobPrice: "Rs.14999",
            mPrice: "Rs.17000"
        },
        {
            id: 8,
            image: require('../../../../Resources/Images/m2.png'),
            mob: 'Samsung s10',
            mobPrice: "Rs.84999",
            mPrice: "Rs.90000"
        },
        {
            id: 9,
            image: require('../../../../Resources/Images/m3.png'),
            mob: 'Poco F1',
            mobPrice: "Rs.12999",
            mPrice: "Rs.16000"
        },
        {
            id: 10,
            image: require('../../../../Resources/Images/m4.png'),
            mob: 'iPhone 11',
            mobPrice: "Rs.52999",
            mPrice: "Rs.59000"
        },
    ]

    const MobileDtlData = ({ item }) => {
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

    const RangeMobile = [
        {
            id: 1,
            image: require('../../../../Resources/Images/m6.png'),
            mob: 'Vivo Y21',
            details: "Smart.Powerful.Helpful",
            mobPrice: "From Rs.13999",
            mPrice: "Rs.17000"

        },
        {
            id: 2,
            image: require('../../../../Resources/Images/m1.png'),
            mob: 'Oppo V21',
            details: "Smart.Powerful.Helpful",
            mobPrice: "From Rs.12999",
            mPrice: "Rs.16000"
        },
        {
            id: 3,
            image: require('../../../../Resources/Images/m2.png'),
            mob: 'Samsung J11',
            details: "Smart.Powerful.Helpful",
            mobPrice: "From Rs.11999",
            mPrice: "Rs.14000"
        },
        {
            id: 4,
            image: require('../../../../Resources/Images/m3.png'),
            mob: 'Oneplus Nord CE',
            details: "Smart.Powerful.Helpful",
            mobPrice: "From Rs.19999",
            mPrice: "Rs.22000"
        },
    ]

    const RangeMobileData = ({ item }) => {
        return (
            <TouchableOpacity style={styles.melaImgBox}>
                <Image source={item.image} style={styles.imgMela} />
                <Text style={styles.textMob}>{item.mob} </Text>
                <Text style={styles.textDetail}>{item.details} </Text>
                <Text style={[styles.textMob, { fontSize: 17 }]}>{item.mobPrice} </Text>
                <Text style={styles.priceMob}>{item.mPrice} </Text>
            </TouchableOpacity>
        )
    }

    const RealmeMobile1 = [
        {
            id: 1,
            image: require('../../../../Resources/Images/m2.png'),
            mob: 'Realme 6A',
            details: "Smart.Powerful.Helpful",
            mobPrice: "From Rs.7999",
            mPrice: "Rs.10999"

        },
        {
            id: 2,
            image: require('../../../../Resources/Images/m6.png'),
            mob: 'Realme 10A',
            details: "Smart.Powerful.Helpful",
            mobPrice: "From Rs.9999",
            mPrice: "Rs.13000"
        },
        {
            id: 3,
            image: require('../../../../Resources/Images/m3.png'),
            mob: 'Realme 7A',
            details: "Smart.Powerful.Helpful",
            mobPrice: "From Rs.7999",
            mPrice: "Rs.10999"

        },
        {
            id: 4,
            image: require('../../../../Resources/Images/m5.png'),
            mob: 'Realme 11F',
            details: "Smart.Powerful.Helpful",
            mobPrice: "From Rs.9999",
            mPrice: "Rs.13000"
        },
    ]

    const RealmeMobile1Data = ({ item }) => {
        return (
            <TouchableOpacity style={styles.melaImgBox}>
                <Image source={item.image} style={styles.imgMela} />
                <Text style={styles.textMob}>{item.mob} </Text>
                <Text style={styles.textDetail}>{item.details} </Text>
                <Text style={[styles.textMob, { fontSize: 17 }]}>{item.mobPrice} </Text>
                <Text style={styles.priceMob}>{item.mPrice} </Text>
            </TouchableOpacity>
        )
    }

    const RealmeMobile2 = [
        {
            id: 1,
            image: require('../../../../Resources/Images/m1.png'),
            mob: 'Realme A74',
            mobPrice: "Rs.14999",
            mPrice: "Rs.17000"
        },
        {
            id: 2,
            image: require('../../../../Resources/Images/m2.png'),
            mob: 'Realme 9R',
            mobPrice: "Rs.29999",
            mPrice: "Rs.35000"
        },
        {
            id: 3,
            image: require('../../../../Resources/Images/m3.png'),
            mob: 'Realme 10S',
            mobPrice: "Rs.17999",
            mPrice: "Rs.19000"
        },
        {
            id: 4,
            image: require('../../../../Resources/Images/m1.png'),
            mob: 'Realme 12',
            mobPrice: "Rs.87999",
            mPrice: "Rs.91000"
        },
        {
            id: 5,
            image: require('../../../../Resources/Images/m5.png'),
            mob: 'Realme Y21',
            mobPrice: "Rs.20999",
            mPrice: "Rs.23000"
        },
        {
            id: 6,
            image: require('../../../../Resources/Images/m6.png'),
            mob: 'Realme C35',
            mobPrice: "Rs.17999",
            mPrice: "Rs.20000"
        },
    ]

    const RealmeMobile2Data = ({ item }) => {
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

    const SamsungMobile1 = [
        {
            id: 1,
            image: require('../../../../Resources/Images/m2.png'),
            mob: 'Samsung 6A',
            details: "Smart.Powerful.Helpful",
            mobPrice: "From Rs.7999",
            mPrice: "Rs.10999"

        },
        {
            id: 2,
            image: require('../../../../Resources/Images/m6.png'),
            mob: 'Samsung 10A',
            details: "Smart.Powerful.Helpful",
            mobPrice: "From Rs.9999",
            mPrice: "Rs.13000"
        },
        {
            id: 3,
            image: require('../../../../Resources/Images/m3.png'),
            mob: 'Samsung 7A',
            details: "Smart.Powerful.Helpful",
            mobPrice: "From Rs.7999",
            mPrice: "Rs.10999"

        },
        {
            id: 4,
            image: require('../../../../Resources/Images/m5.png'),
            mob: 'Samsung 11F',
            details: "Smart.Powerful.Helpful",
            mobPrice: "From Rs.9999",
            mPrice: "Rs.13000"
        },
    ]

    const SamsungMobile1Data = ({ item }) => {
        return (
            <TouchableOpacity style={styles.melaImgBox}>
                <Image source={item.image} style={styles.imgMela} />
                <Text style={styles.textMob}>{item.mob} </Text>
                <Text style={styles.textDetail}>{item.details} </Text>
                <Text style={[styles.textMob, { fontSize: 17 }]}>{item.mobPrice} </Text>
                <Text style={styles.priceMob}>{item.mPrice} </Text>
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
                    <Text style={styles.headText}>Mobile Phones</Text>
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
                    <Image source={Images.mobilesale} style={styles.saleImg} />
                </View>
                <View>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={BrandMobile}
                        renderItem={BrandMobileData}
                        keyExtractor={item => item.id}
                    />
                </View>
                {/* <View>
                    <ImageSlider images={images} />
                </View> */}

                <View style={styles.offerBgBox}>
                    <TouchableOpacity style={styles.offerBox}>
                        <Text style={styles.offerText}>MAKE BIGGEST SAVINGS OF THE YEAR</Text>
                    </TouchableOpacity>
                    <FlatList
                        numColumns={3}
                        data={OfferMobile}
                        renderItem={OfferMobileData}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View >
                    <Text style={styles.headMob}>Top 10 Breaking Hits</Text>
                </View>
                <View >
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={TopMobile}
                        renderItem={TopMobileData}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View >
                    <View style={styles.flowerBox}>
                        <Ionicons name='flower' color={"#461073"} style={styles.flower} />
                        <Text style={styles.headMob}>Premium SmartPhones</Text>
                        <Ionicons name='flower' color={"#461073"} style={styles.flower} />
                    </View>
                    <View >
                        <FlatList
                            numColumns={2}
                            data={Premium}
                            renderItem={PremiumData}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.bigAds}>
                    <View style={styles.partAds}>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.nameMob}>Google Pixel 7</Text>
                            <View style={styles.price}>
                                <Text style={styles.nameMob}>From Rs.49,999*</Text>
                                <Text style={styles.mainPrice}>Rs.59,999</Text>
                            </View>
                            <Text style={styles.detailMob}>Simply Powerful | Super Helpful</Text>
                            <View style={styles.emiBox}>
                                <Text style={styles.pay}>Pay Only</Text>
                                <Text style={styles.emiPay}>Rs.8,333/m</Text>
                            </View>
                        </View>
                        <View style={styles.mobileBox}></View>
                        <Image source={Images.mobile1} style={styles.mobileImg} />
                    </View>
                </TouchableOpacity>
                <View >
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={MobileDtl}
                        renderItem={MobileDtlData}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View >
                    <View style={styles.flowerBox}>
                        <Ionicons name='flower' color={"#461073"} style={styles.flower} />
                        <Text style={styles.headMob}>Best of 5G</Text>
                        <Ionicons name='flower' color={"#461073"} style={styles.flower} />
                    </View>
                    <View >
                        <FlatList
                            numColumns={2}
                            data={Premium}
                            renderItem={PremiumData}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.bigAds}>
                    <View style={styles.partAds}>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.nameMob}>Oneplus Nord 2</Text>
                            <View style={styles.price}>
                                <Text style={styles.nameMob}>From Rs.34,999*</Text>
                                <Text style={styles.mainPrice}>Rs.49,999</Text>
                            </View>
                            <Text style={styles.detailMob}>Simply Powerful | Super Helpful</Text>
                            <View style={styles.emiBox}>
                                <Text style={styles.pay}>Pay Only</Text>
                                <Text style={styles.emiPay}>Rs.6,313/m</Text>
                            </View>
                        </View>
                        <View style={styles.mobileBox}></View>
                        <Image source={Images.mobile3} style={styles.mobileImg} />
                    </View>
                </TouchableOpacity>
                <View >
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={MobileDtl}
                        renderItem={MobileDtlData}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View >
                    <View style={styles.flowerBox}>
                        <Ionicons name='flower' color={"#461073"} style={styles.flower} />
                        <Text style={styles.headMob}>Deals Between 10k-20k</Text>
                        <Ionicons name='flower' color={"#461073"} style={styles.flower} />
                    </View>
                    <View >
                        <FlatList
                            numColumns={2}
                            data={RangeMobile}
                            renderItem={RangeMobileData}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.bigAds}>
                    <View style={styles.partAds}>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.nameMob}>MI 10i</Text>
                            <View style={styles.price}>
                                <Text style={styles.nameMob}>From Rs.17,999*</Text>
                                <Text style={styles.mainPrice}>Rs.19,999</Text>
                            </View>
                            <Text style={styles.detailMob}>Simply Powerful | Super Helpful</Text>
                            <View style={styles.emiBox}>
                                <Text style={styles.pay}>Pay Only</Text>
                                <Text style={styles.emiPay}>Rs.3,299/m</Text>
                            </View>
                        </View>
                        <View style={styles.mobileBox}></View>
                        <Image source={Images.mobile4} style={styles.mobileImg} />
                    </View>
                </TouchableOpacity>
                <View >
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={MobileDtl}
                        renderItem={MobileDtlData}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View >
                    <View style={styles.flowerBox}>
                        <Text style={styles.headMob}>Deals on Your Favourite Brands</Text>
                    </View>
                    <View style={styles.mainBox}>
                        <View style={styles.b2}></View>
                        <View style={styles.realmeBox}>
                            <Text style={styles.realmeMob}>realme</Text>
                        </View>
                        <View style={styles.b2}></View>
                    </View>
                    <View>
                        <View >
                            <FlatList
                                numColumns={2}
                                data={RealmeMobile1}
                                renderItem={RealmeMobile1Data}
                                keyExtractor={item => item.id}
                            />
                        </View>
                        <View >
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={RealmeMobile2}
                                renderItem={RealmeMobile2Data}
                                keyExtractor={item => item.id}
                            />
                        </View>
                    </View>
                    <View style={styles.mainBox}>
                        <View style={styles.b2}></View>
                        <View style={[styles.realmeBox,{backgroundColor:"#2111BB"}]}>
                            <Text style={styles.realmeMob}>Samsung</Text>
                        </View>
                        <View style={styles.b2}></View>
                    </View>
                    <View>
                        <View >
                            <FlatList
                                numColumns={2}
                                data={SamsungMobile1}
                                renderItem={SamsungMobile1Data}
                                keyExtractor={item => item.id}
                            />
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
                </View>


            </ScrollView>
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

export default CategoryMobile;