import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        width: "100%"
    },
    screen: {
        margin: 16,
        flex: 1,
    },
    headName: {
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: "#047BD5",
        paddingBottom: 15,
        paddingTop: 15,
        justifyContent: "space-between",
        paddingLeft: 16,
        paddingRight: 16
    },
    headText: {
        color: "#ffffff",
        fontWeight: "600",
        fontSize: 18
    },
    searchIcon: {
        fontSize: 20,
    },
    miceIcon: {
        fontSize: 19,
        marginLeft: 15
    },
    iconDes: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    backIcon: {
        marginRight: 8,
        color: "#fff",
    },
    saleImg: {
        width: "100%",
        height: 200
    },
    TopImg: {
        height: 60,
        width: 60,
        alignSelf: 'center',
        borderWidth: 2,
        marginTop: 15,
        borderRadius: 50,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 15,
    },
    Imgtext: {
        textAlign: 'center',
        color: 'black',
        marginLeft: 10,
    },
    Pricecard: {
        height: 60,
        width: 60,
        borderRadius: 50,
        marginLeft: 10,
        backgroundColor: '#D6EAF8'
    },
    offerBox: {
        backgroundColor: "#C8268D",
        marginTop: 10,
        marginRight: 16,
        marginLeft: 16,
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        flexDirection: "row",
        position: "absolute",
        top: -40,
        width: "92%"
    },
    offerText: {
        letterSpacing: 2,
        fontSize: 18,
        fontWeight: "900",
        textAlign: "center",
        color: "#D1B015"
    },
    offerBgBox: {
        backgroundColor: "#047BD5",
        marginTop: 30,
        paddingTop: 35
    },
    b1: {
        borderWidth: 1,
        borderColor: "#9C9C9B",
        marginTop: 5
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
        fontWeight: "700"
    },
    headMob: {
        color: "#461073",
        fontWeight: "900",
        fontSize: 22,
        textAlign: "center",
        letterSpacing: 1,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        // textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 20,
        marginTop:8
    },
    topImgBox: {
        height: 170,
        width: 120,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        borderWidth:2,
    },
    imgTop: {
        height: 90,
        width: "75%",
        alignSelf: 'center',
        marginTop: 8
    },
    priceMob: {
        color: 'black',
        marginLeft: 10,
        textDecorationLine: 'line-through',
    },
    ImgtextMob: {
        color: 'black',
        marginLeft: 10,
        fontWeight: "600"
    },
    ImgtextMb: {
        color: 'black',
        marginLeft: 10,
        fontWeight: "700",
        fontSize:15
    },
})
export default styles

