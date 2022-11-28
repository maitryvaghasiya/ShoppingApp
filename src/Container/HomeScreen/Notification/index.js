import { View, Text, Image, ScrollView, TouchableOpacity, StatusBar, FlatList } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import styles from './style';

const NotificationScreen = () => {

    const Notification = [
        {
            id: 1,
            Offer: <MaterialCommunityIcons name='brightness-percent' size={16} color={"#047BD5"} />,
            HeadInfo: 'Planning A Trip? Let Us Help!',
            Info: 'Book Flight Tickets Hotel And shsope out travel store now >>',
            image: require('../../../Resources/Images/fliplogo.png'),
        },
        {
            id: 2,
            Offer: <MaterialCommunityIcons name='brightness-percent' size={16} color={"#047BD5"} />,
            HeadInfo: 'Planning A Trip? Let Us Help!',
            Info: 'Book Flight Tickets Hotel And shsope out travel store now >>',
            image: require('../../../Resources/Images/fliplogo.png'),
        },
        {
            id: 3,
            Offer: <MaterialCommunityIcons name='brightness-percent' size={16} color={"#047BD5"} />,
            HeadInfo: 'Planning A Trip? Let Us Help!',
            Info: 'Book Flight Tickets Hotel And shsope out travel store now >>',
            image: require('../../../Resources/Images/fliplogo.png'),
        }
    ]


    const NotificationData = ({ item }) => {
        return (
            <View>
                <View style={styles.flexDeraction}>
                    <View>
                        <TouchableOpacity>
                            <Text style={styles.offerLogo}>{item.Offer}</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={styles.HeadBox}>
                            <View><Text style={styles.HeadInfoText}>{item.HeadInfo}</Text></View>
                            <View><Text style={styles.HeadText}>{item.Info}</Text></View>
                        </View>
                    </View>
                    <View>
                        <Image source={item.image} style={styles.LogoImage} />
                    </View>

                </View>
                   <View style={{alignSelf:'center'}}>

                   <View style={styles.line}></View>
                   </View>

            </View>


        )
    }
    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#047BD5"
            />
            <View style={styles.headName}>
                <Text style={styles.headText}>Notification (3)</Text>
            </View>

            <View >
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={Notification}
                    renderItem={NotificationData}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

export default NotificationScreen;
