import { View, Text, Image, ScrollView, TouchableOpacity, StatusBar, FlatList } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';

const NotificationScreen = () => {

    const Notification = [
        {
            id: 1,
            Offer: <MaterialCommunityIcons name='brightness-percent' size={20} color={"#047BD5"} />,
            HeadInfo: 'Planning A Trip? Let Us Help!',
            Info: 'Book Flight Tickets Hotel And out travel store now >>',
            image: require('../../../Resources/Images/fliplogo.png'),
        },
        {
            id: 2,
            Offer: <MaterialCommunityIcons name='brightness-percent' size={20} color={"#047BD5"} />,
            HeadInfo: 'Planning A Trip? Let Us Help!',
            Info: 'Book Flight Tickets Hotel And out travel store now >>',
            image: require('../../../Resources/Images/fliplogo.png'),
        },
        {
            id: 3,
            Offer: <MaterialCommunityIcons name='brightness-percent' size={20} color={"#047BD5"} />,
            HeadInfo: 'Planning A Trip? Let Us Help!',
            Info: 'Book Flight Tickets Hotel And shse out travel store now >>',
            image: require('../../../Resources/Images/fliplogo.png'),
        },
        {
            id: 4,
            Offer: <MaterialCommunityIcons name='brightness-percent' size={20} color={"#047BD5"} />,
            HeadInfo: 'Planning A Trip? Let Us Help!',
            Info: 'Book Flight Tickets Hotel And out travel store now >>',
            image: require('../../../Resources/Images/fliplogo.png'),
        },
        {
            id: 5,
            Offer: <MaterialCommunityIcons name='brightness-percent' size={20} color={"#047BD5"} />,
            HeadInfo: 'Planning A Trip? Let Us Help!',
            Info: 'Book Flight Tickets Hotel And out travel store now >>',
            image: require('../../../Resources/Images/fliplogo.png'),
        },
        {
            id: 6,
            Offer: <MaterialCommunityIcons name='brightness-percent' size={20} color={"#047BD5"} />,
            HeadInfo: 'Planning A Trip? Let Us Help!',
            Info: 'Book Flight Tickets Hotel And shse out travel store now >>',
            image: require('../../../Resources/Images/fliplogo.png'),
        },
        {
            id: 7,
            Offer: <MaterialCommunityIcons name='brightness-percent' size={20} color={"#047BD5"} />,
            HeadInfo: 'Planning A Trip? Let Us Help!',
            Info: 'Book Flight Tickets Hotel And out travel store now >>',
            image: require('../../../Resources/Images/fliplogo.png'),
        },
        {
            id: 8,
            Offer: <MaterialCommunityIcons name='brightness-percent' size={20} color={"#047BD5"} />,
            HeadInfo: 'Planning A Trip? Let Us Help!',
            Info: 'Book Flight Tickets Hotel And out travel store now >>',
            image: require('../../../Resources/Images/fliplogo.png'),
        },
        {
            id: 9,
            Offer: <MaterialCommunityIcons name='brightness-percent' size={20} color={"#047BD5"} />,
            HeadInfo: 'Planning A Trip? Let Us Help!',
            Info: 'Book Flight Tickets Hotel And shse out travel store now >>',
            image: require('../../../Resources/Images/fliplogo.png'),
        }
    ]

    const NotificationData = ({ item }) => {
        return (
            <View>
                <TouchableOpacity style={styles.notificationBox}>
                    <View>
                        <Text style={styles.offerLogo}>{item.Offer}</Text>
                    </View>
                    <View style={styles.HeadBox}>
                        <View><Text style={styles.HeadInfoText}>{item.HeadInfo}</Text></View>
                        <View><Text style={styles.HeadText}>{item.Info}</Text></View>
                    </View>
                    <View>
                        <Image source={item.image} style={styles.LogoImage} />
                    </View>
                </TouchableOpacity>
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
                <Text style={styles.headText}>Notification (9)</Text>
            </View>

            <ScrollView style={styles.screen}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={Notification}
                    renderItem={NotificationData}
                    keyExtractor={item => item.id}
                />
            </ScrollView>
        </View>
    )
}

export default NotificationScreen;
