import { Text, View, ScrollView, TouchableOpacity, FlatList, TouchableWithoutFeedback, TouchableHighlight, StatusBar, } from "react-native";
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AccountScreen = ({ navigation }) => {

  const Option = [
    {
      id: 1,
      icon: <AntDesign name="CodeSandbox" size={21} />,
      name: 'Orders',
    },
    {
      id: 2,
      icon: <AntDesign name="hearto" size={20} />,
      name: 'Wishlist',
    },
    {
      id: 3,
      icon: <AntDesign name="gift" size={22} />,
      name: 'Coupons',
    },
    {
      id: 4,
      icon: <Feather name="help-circle" size={22} />,
      name: 'Help Center',
    },
  ]

  const OptionData = ({ item }) => {
    // console.log("item");
    return (
      <TouchableOpacity style={styles.mainOCard}>
        <View style={styles.optionCard}>
          <Text style={styles.oIcon}>{item.icon}</Text>
          <Text style={styles.oName}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const accountSetting = [
    {
      id: 1,
      icon: <AntDesign name="pluscircleo" size={20} />,
      name: 'Flipkart Plus',
    },
    {
      id: 2,
      icon: <AntDesign name="user" size={22} />,
      name: 'Edit Profile',
    },
    {
      id: 3,
      icon: <Feather name="credit-card" size={20} />,
      name: 'Saved Cards & Wallet',
    },
    {
      id: 4,
      icon: <Ionicons name="location-outline" size={22} />,
      name: 'Saved Addresses',
    },
    {
      id: 5,
      icon: <Ionicons name="language-outline" size={22} />,
      name: 'Select Language',
    },
    {
      id: 6,
      icon: <Ionicons name="notifications-outline" size={22} />,
      name: 'Notification Settings',
    },
  ]

  const accountSettingData = ({ item }) => {
    return (
      <TouchableWithoutFeedback >
        <View style={styles.AccCard}>
          <View style={styles.startAccCard}>
            <Text style={styles.aoIcon}>{item.icon}</Text>
            <Text style={styles.aoName}>{item.name}</Text>
          </View>
          <View>
            <MaterialIcons name="navigate-next" size={22} color={"black"} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  const myActivity = [
    {
      id: 1,
      icon: <MaterialCommunityIcons name="pencil-box-multiple-outline" size={20} />,
      name: 'Reviews',
    },
    {
      id: 2,
      icon: <Feather name="message-square" size={20} />,
      name: 'Questions & Answers',
    },
  ]

  const myActivityData = ({ item }) => {
    return (
      <TouchableWithoutFeedback>
        <View style={styles.AccCard}>
          <View style={styles.startAccCard}>
            <Text style={styles.aoIcon}>{item.icon}</Text>
            <Text style={styles.aoName}>{item.name}</Text>
          </View>
          <View>
            <MaterialIcons name="navigate-next" size={22} color={"black"} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  const earnWflip = [
    {
      id: 1,
      icon: <FontAwesome name="bullhorn" size={20} />,
      name: 'Refer & Earn',
    },
    {
      id: 2,
      icon: <MaterialCommunityIcons name="heart-multiple-outline" size={22} />,
      name: 'Flipkart Creator Studio',
    },
    {
      id: 3,
      icon: <Entypo name="shop" size={20} />,
      name: 'Sell on Flipkart',
    },
  ]

  const earnWflipData = ({ item }) => {
    return (
      <TouchableWithoutFeedback >
        <View style={styles.AccCard}>
          <View style={styles.startAccCard}>
            <Text style={styles.aoIcon}>{item.icon}</Text>
            <Text style={styles.aoName}>{item.name}</Text>
          </View>
          <View>
            <MaterialIcons name="navigate-next" size={22} color={"black"} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  const feedbackInfo = [
    {
      id: 1,
      icon: <MaterialCommunityIcons name="note-multiple-outline" size={20} />,
      name: 'Terms, Policies and Licenses',
    },
    {
      id: 2,
      icon: <Feather name="help-circle" size={22} />,
      name: 'Browser FAQs',
    },
  ]

  const feedbackInfoData = ({ item }) => {
    return (
      <TouchableWithoutFeedback >
        <View style={styles.AccCard}>
          <View style={styles.startAccCard}>
            <Text style={styles.aoIcon}>{item.icon}</Text>
            <Text style={styles.aoName}>{item.name}</Text>
          </View>
          <View>
            <MaterialIcons name="navigate-next" size={22} color={"black"} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#047BD5"
      />
      <View style={styles.headName}>
        <Text style={styles.headText}>My Account</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SearchScrn')}>
          <AntDesign name='search1' color={"#fff"} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.screen}>
        <View>
          <FlatList
            numColumns={2}
            data={Option}
            renderItem={OptionData}
            keyExtractor={item => item.id}
          />
        </View>

        <View style={styles.border}></View>

        <View>
          <Text style={styles.accText}>Account Settings</Text>
        </View>

        <View>
          <FlatList
            data={accountSetting}
            renderItem={accountSettingData}
            keyExtractor={item => item.id}
          />
        </View>

        <View style={styles.border}></View>

        <View>
          <Text style={styles.accText}>My Activity</Text>
        </View>

        <View>
          <FlatList
            data={myActivity}
            renderItem={myActivityData}
            keyExtractor={item => item.id}
          />
        </View>

        <View style={styles.border}></View>

        <View>
          <Text style={styles.accText}>Earn with Flipkart</Text>
        </View>

        <View>
          <FlatList
            data={earnWflip}
            renderItem={earnWflipData}
            keyExtractor={item => item.id}
          />
        </View>

        <View style={styles.border}></View>

        <View>
          <Text style={styles.accText}>Feedback & Information</Text>
        </View>

        <View>
          <FlatList
            data={feedbackInfo}
            renderItem={feedbackInfoData}
            keyExtractor={item => item.id}
          />
        </View>

        <View style={styles.border}></View>

        <TouchableOpacity style={styles.OutBtn}>
          <View style={styles.logOutBtn}>
            <Text style={styles.logOutText}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default AccountScreen;