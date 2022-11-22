import { Text, View, ScrollView, TouchableOpacity, FlatList, TouchableWithoutFeedback, TouchableHighlight, StatusBar, Image, } from "react-native";
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CategoryScreen = () => {

    const Category = [
        {
            id: 1,
            image: require('../../../Resources/Images/offer.png'),
            product: 'Offer',
        },
        {
            id: 2,
            image: require('../../../Resources/Images/grocery.png'),
            product: 'Grocery',
        },
        {
            id: 3,
            image: require('../../../Resources/Images/mobile.png'),
            product: 'Mobile',
        },
        {
            id: 4,
            image: require('../../../Resources/Images/fashion.png'),
            product: 'Fashion',
        },
        {
            id: 5,
            image: require('../../../Resources/Images/home.png'),
            product: 'Home',
        },
        {
            id: 6,
            image: require('../../../Resources/Images/toys.png'),
            product: 'Toys',
        },
        {
            id: 7,
            image: require('../../../Resources/Images/sports.png'),
            product: 'Sports',
        },
        {
            id: 8,
            image: require('../../../Resources/Images/medicine.png'),
            product: 'Medicine',
        },
        {
            id: 9,
            image: require('../../../Resources/Images/appliance.png'),
            product: 'Appliance',
        },
        {
            id: 10,
            image: require('../../../Resources/Images/beauty.png'),
            product: 'Beauty',
        },
        {
            id: 11,
            image: require('../../../Resources/Images/sofa.png'),
            product: 'Furniture',
        },
        {
            id: 12,
            image: require('../../../Resources/Images/gift.png'),
            product: 'Gift',
        },
    ]

    const CategoryData = ({ item }) => {
        // console.log("item");
        return (

            <TouchableOpacity style={styles.cardBox}>
                <View style={styles.imgCard}>
                    <Image source={item.image} style={styles.productImg} />
                </View>
                <Text style={styles.Imgtext}>{item.product}</Text>
            </TouchableOpacity>
        )
    }

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
            <TouchableOpacity style={styles.cardBox}>
                <View style={styles.imgCard}>
                    <Image source={item.image} style={styles.productImg} />
                </View>
                <Text style={styles.Imgtext}>{item.product}</Text>

            </TouchableOpacity>
        )
    }

    const Trending = [
        {
            id: 1,
            image: require('../../../Resources/Images/handcraft.png'),
            detail: 'Samarth Craft',
            text:"Handcarft, Art & more"
        },
        {
            id: 2,
            image: require('../../../Resources/Images/winter.png'),
            detail: 'Happy Winter',
            text:"Clothing, Decor & more"
        },
        {
            id: 3,
            image: require('../../../Resources/Images/store.png'),
            detail: 'Big Store',
            text:"Brand Across the world"
        },
        {
            id: 4,
            image: require('../../../Resources/Images/couple.png'),
            detail: 'Wedding Store',
            text:"Lahenga, Saree & more"
        },
        {
            id: 5,
            image: require('../../../Resources/Images/travel.png'),
            detail: 'Travel Store',
            text:"See the world with ease"
        },
        {
            id: 6,
            image: require('../../../Resources/Images/lauch.png'),
            detail: 'Launch Hub',
            text:"New Launching"
        },
    ]

    const TrendingData = ({ item }) => {
        // console.log("item");
        return (
            <TouchableOpacity style={styles.trendingBox}>
                <View style={styles.trendImgCard}>
                    <Image source={item.image} style={styles.trendImg} />
                </View>
                <View style={styles.tradeDetail}>
                    <Text style={styles.tradeText}>{item.detail}</Text>
                    <MaterialIcons name="navigate-next" size={30} color={"black"} style={styles.nextIcon}/>
                </View>
                <Text style={styles.detailText}>{item.text}</Text>
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
                <Text style={styles.headText}>All Categoris</Text>
                <View style={styles.iconDes}>
                    <TouchableOpacity >
                        <AntDesign name='search1' color={"#fff"} style={styles.searchIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <FontAwesome name='microphone' color={"#fff"} style={styles.miceIcon} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={styles.screen}>
                <View >
                    <FlatList
                        // horizontal
                        numColumns={4}
                        showsHorizontalScrollIndicator={false}
                        data={Category}
                        renderItem={CategoryData}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={styles.border}></View>
                <View>
                    <Text style={styles.moreHead}>More on Flipkart</Text>
                </View>
                <View >
                    <FlatList
                        // horizontal
                        numColumns={4}
                        showsHorizontalScrollIndicator={false}
                        data={Facilities}
                        renderItem={FacilitiesData}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={styles.border}></View>
                <View>
                    <Text style={styles.moreHead}>Trending Store</Text>
                </View>
                <View >
                    <FlatList
                        // horizontal
                        numColumns={2}
                        showsHorizontalScrollIndicator={false}
                        data={Trending}
                        renderItem={TrendingData}
                        keyExtractor={item => item.id}
                    />
                </View>
            </ScrollView>
        </View>

    )
}

export default CategoryScreen;