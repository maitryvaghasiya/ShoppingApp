import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        width: "100%"
    },
    screen: {
        margin: 16,
        // marginRight: 16,
        // marginLeft: 16
        // flex: 1,
    },
    headName: {
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: "#E8E9E9",
        paddingBottom: 15,
        paddingTop: 15,
        justifyContent: "space-between",
        paddingLeft: 16,
        paddingRight: 16
    },
    searchIcon: {
        fontSize: 20,
        color: "#047BD5",
        marginRight: 8
    },
    miceIcon: {
        fontSize: 19,
        marginLeft: 10,
        alignSelf: "flex-end",
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
        color: 'black',
        marginLeft: 10
    },
    Pricecard: {
        height: 60,
        width: 60,
        borderRadius: 50,
        marginLeft: 10,
        backgroundColor: '#D6EAF8'
    },
    imgBox: {
        height: 150,
        width: "31%",
        marginLeft: 5,
        marginRight: 5,
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
        resizeMode: 'cover',
    },
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
        alignItems: "center"
    },
    dot: {
        color: '#888',
        fontSize: 25,
    },
    activeDot: {
        color: '#047BD5',
        fontSize: 30,
    },
    offerBox: {
        backgroundColor: "pink",
        marginTop: 10,
        padding: 10,
        alignItems: "center",
        justifyContent: "space-between",
        marginRight:16,
        marginLeft:16,
        borderRadius:10,
        flexDirection:"row",
    },
    offerText: {
        letterSpacing: 2,
        fontSize: 16,
        fontWeight: "900",
        color:"black"
    },
    offerBgBox: {
        backgroundColor: "#047BD5",
        marginTop: 10,
    },
    b1: {
        borderWidth: 1,
        borderColor:"#9C9C9B",
        marginTop:5
    },
    offerImgBox: {
        height: 150,
        width: "31%",
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    imgOffer: {
        height: 90,
        width: "75%",
        alignSelf: 'center',
        marginTop: 8
    },
    ImgtextOfr: {
        textAlign: 'center',
        color: 'black',
        marginLeft: 10,
        fontWeight:"700"
    },
    nextIcon: {
        fontSize: 20,
        color:"black"
    },
    primeBox: {
        marginTop: 10,
        alignItems: "center",
        justifyContent: "space-between",
        marginRight:16,
        marginLeft:16,
        borderRadius:10,
        flexDirection:"row",
    },
    primeBgBox:{
        margin: 10,
        borderWidth: 1,
        borderColor:"#9C9C9B",
        backgroundColor:"#CCD6C3"
    },
    primeImgBox: {
        height: 180,
        width: "47%",
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        borderWidth:2,
        borderColor:"#9C9C9B",
    },
    imgPrime: {
        height: 115,
        width: "75%",
        alignSelf: 'center',
        marginTop: 8
    },
    ImgtextOfr: {
        textAlign: 'center',
        color: 'black',
        marginLeft: 10,
        fontWeight:"700"
    },
    ImgtextPrime: {
        textAlign: 'center',
        color: '#047BD5',
        marginLeft: 10,
        fontWeight:"900",
        fontSize:16
    },
})

export default styles;
