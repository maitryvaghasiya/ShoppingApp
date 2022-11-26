import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        width: "100%"
    },
    screen: {
        // margin: 16,
        marginRight: 16,
        marginLeft: 16
        // flex: 1,
    },
    headName: {
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: "#E8E9E9",
        justifyContent: "space-between",
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 16,
        borderRadius: 5,
      
    },
   
    searchIcon: {
        fontSize: 20,
        color: "#047BD5",
    },
    miceIcon: {
        fontSize: 19,
        marginLeft: 10,
        alignSelf: "flex-end",
        marginTop: 15
    },
    searchBar: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    iconSearch: {
        flexDirection: "row",
    },
    icon2Des: {
        flexDirection: "row",
        marginLeft: 100
    },
    TopImg: {
        height: 40,
        width: 40,
        alignSelf: 'center',
        borderWidth: 2,
        marginTop: 9
    },
    Imgtext: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold',
        color: 'black',
        marginLeft: 10
    },

    Pricecard: {
        height: 60,
        width: 60,
        borderRadius: 50,
        marginLeft: 10,
        marginTop: 20,
        backgroundColor: '#D6EAF8'
    },
    imgBox: {
        height: 150,
        width: "31%",
        marginLeft: 10,
        marginTop: 20,
        backgroundColor: '#D6EAF8'
    },
    TopImg1: {
        height: 100,
        width: "100%",
        alignSelf: 'center',
    },
    slider: {
        height: 150,
        width: 360,
        marginTop: 20,
        resizeMode: 'cover',
        // width:'100%'
    },

    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: -15,
        alignSelf: 'center',
    },
    dot: {
        color: '#888',
        fontSize: 25,
    },
    activeDot: {
        color: '#FFF',
        fontSize: 25,
    },
})

export default styles;
