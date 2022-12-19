import { View, StyleSheet, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import SearchBar from "react-native-dynamic-search-bar";

const SearchScreen = ({ navigation }) => {

    return (

        <ScrollView>
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor="#047BD5"
                />
                <SearchBar
                    placeholder="Search here"
                    onPress={() => { navigation.goBack() }}
                    onChangeText={(text) => console.log(text)}
                    style={{
                        marginTop: 20,
                        backgroundColor: "#ECECEC",
                        width: "100%",
                        borderBottomColor: "grey",
                        borderBottomWidth: 1,
                        marginTop: 5
                    }}
                    searchIconImageStyle={{
                        height: 15,
                        width: 15
                    }}
                    clearIconImageStyle={{
                        height: 10,
                        width: 10,
                    }}
                    placeholderTextColor="grey"
                    shadowColor="#366740"
                />
            </View>
        </ScrollView>
    )
}

export default SearchScreen;

let styles = StyleSheet.create({

    container: {
        margin: 16,
    },
})