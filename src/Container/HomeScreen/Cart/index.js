import { View, Text, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';

const CartScreen = () => {

    const AddProduct = [
        {
            id: 1,
            image: require('../../../Resources/Images/jeans1.webp'),
            productName: "Kotty Regular Women Jeans",
            size: 28,
            mrPrice: 700,
            price: 300,
            rating: 4
        },
        {
            id: 2,
            image: require('../../../Resources/Images/kurti1.jpeg'),
            productName: "Della Women fancy Kurti",
            size: 28,
            mrPrice: 700,
            price: 300,
            rating: 4.3
        },
        {
            id: 3,
            image: require('../../../Resources/Images/shirt1.jpeg'),
            productName: "Men Regular Casual Shirt",
            size: 28,
            mrPrice: 700,
            price: 300,
            rating: 3.8
        },
    ]

    const AddProductData = ({ item }) => {
        return (
            <TouchableOpacity>
                <View style={styles.productBox}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.imgBox}>
                            <Image source={item.image} style={styles.proImg}></Image>
                        </View>
                        <View style={{ width: "65%" }}>
                            <View>
                                <Text style={styles.Hname}>{item.productName}</Text>
                                <Text style={styles.itemSize}>Size: {item.size}</Text>
                            </View >
                            <View style={styles.prizeBox}>
                                <View style={{ flexDirection: "row", }}>
                                    <Text style={styles.mPname}>Rs.{item.mrPrice}</Text>
                                    <Text style={styles.pName}>Rs. {item.price}</Text>
                                </View >
                                <View style={[styles.addbtn]}>
                                    <TouchableOpacity
                                    >
                                        <Text style={styles.addtext}>-</Text>
                                    </TouchableOpacity>
                                    <Text>1</Text>
                                    <TouchableOpacity
                                    >
                                        <Text style={styles.addtext}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", }}>
                                <Text style={styles.pRating}>{item.rating} <FontAwesome name='star' color={"#047BD5"} size={15} /></Text>
                            </View >
                        </View>
                    </View>
                    <View style={styles.box}>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <MaterialIcons name='delete' color={"grey"} size={17} />
                            <Text style={{ color: "grey" }}>Remove</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <MaterialCommunityIcons name='lightning-bolt' color={"grey"} size={20} />
                            <Text style={{ color: "grey" }}>Buy this Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.headName}>
                <Text style={styles.headText}>My Cart</Text>
            </View>
            <ScrollView style={styles.screen}>
                <View style={styles.add1}>
                    <View style={styles.locatBox}>
                        <View style={styles.locatIcon}>
                            <Ionicons name={'ios-location-sharp'} style={styles.locat} />
                        </View>
                        <View>
                            <View>
                                <Text style={styles.delText}>Delivery to</Text>
                            </View>
                            <View>
                                <Text style={styles.addTextd}>303, Third Floor, Happy residency, Near Sarthana, Varachha, Surat 395006</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignItems: "flex-end" }}>
                        <TouchableOpacity
                            style={[styles.addbtn1, { marginLeft: 15 }]}
                        >
                            <Text style={styles.addtext1}>Change</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <FlatList
                        data={AddProduct}
                        renderItem={AddProductData}
                        keyExtractor={item => item.id}
                    >
                    </FlatList>
                </View>

                <View style={styles.billBox}>
                    <View style={{ marginRight: 18, marginLeft: 18 }}>
                        <View style={{ marginTop: 10, marginBottom: 10 }}>
                            <Text style={styles.detailBox}>Price Details</Text>
                        </View>
                        <View>
                            <View style={styles.billDetail}>
                                <Text style={styles.textDl}>Price </Text>
                                <Text style={styles.textDl}>Rs. 700 </Text>
                            </View>
                            <View style={styles.billDetail}>
                                <Text style={styles.textDl}>Discount </Text>
                                <Text style={styles.textDl}>-Rs. 400 </Text>
                            </View>
                            <View style={styles.billDetail}>
                                <Text style={styles.textDl}>Delivery Charges </Text>
                                <Text style={styles.textDl}>Free Delivery </Text>
                            </View>
                            <View style={styles.border}></View>

                            <View style={styles.billDetail}>
                                <Text style={styles.textDlt}>Total amount</Text>
                                <Text style={styles.textDlt}>Rs. 900</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView >

            <View style={styles.LBtn}>
                <TouchableOpacity style={styles.stBtn}>
                    <Text style={styles.lText}>Rs. 900</Text>
                    <Text style={styles.lText}>Place Order </Text>
                </TouchableOpacity>
            </View>

        </View >
    )
}

export default CartScreen;