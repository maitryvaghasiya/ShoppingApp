import { Text, View, ScrollView, TouchableOpacity, FlatList, TouchableWithoutFeedback, TouchableHighlight, StatusBar, } from "react-native";
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CategoryScreen = () => {

    return (
        <ScrollView style={styles.container}>
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
        </ScrollView>
    )
}

export default CategoryScreen;