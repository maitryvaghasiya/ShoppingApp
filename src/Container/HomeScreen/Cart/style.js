import { StyleSheet } from 'react-native';

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
        fontSize: 16
    },
    add1: {
        width: "100%",
        backgroundColor: "white",
        borderRadius: 10,
    },
    locatBox: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 5
    },
    locatIcon: {
        justifyContent: "center",
        marginRight: 10,
        marginLeft: 5
    },
    locat: {
        color: "red",
        fontSize: 26
    },
    addbtn1: {
        height: 26,
        width: 60,
        justifyContent: "center",
        top: -3,
        marginBottom: 10,
        marginRight: 5,
    },
    addtext1: {
        color: "#047BD5",
        textAlign: "center",
        fontSize: 16
    },
    productBox: {
        width: "100%",
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "grey",
        marginTop: 10,
        backgroundColor: "#fff"
    },
    imgBox: {
        justifyContent: "center",
        marginLeft: 10
    },
    proImg: {
        height: 80,
        width: 80,
        borderRadius: 10,
        marginBottom: 20,
        marginRight: 15,
        marginTop: 20
    },
    prizeBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    Hname: {
        color: "black",
        fontWeight: "400",
        fontSize: 17,
        marginBottom: 2,
        marginTop: 2
    },
    itemSize: {
        color: "grey",
        marginBottom: 2,
    },
    mPname: {
        fontSize: 14,
        marginBottom: 7,
        marginRight: 5,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    },
    pRating: {
        fontSize: 15,
        color: "black"
    },
    pName: {
        color: "black",
        fontSize: 16,
        marginBottom: 7,
        fontWeight: "700"
    },
    addbtn: {
        height: 26,
        width: 60,
        borderWidth: 2,
        borderRadius: 5,
        justifyContent: "center",
        top: -3,
        flexDirection: "row",
        marginTop: 10,
        alignItems: "center",
    },
    delText: {
        color: "black",
        fontSize: 16
    },
    addtext: {
        color: "#047BD5",
        textAlign: "center",
        marginLeft: 10,
        marginRight: 10
    },
    addTextd: {
        flexWrap: "wrap",
        color: "black"
    },
    stBtn: {
        backgroundColor: "#047BD5",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 12,
        position: "absolute",
        bottom: 5,
        width: "100%"
    },
    billBox: {
        backgroundColor: "#fff",
        marginBottom: 80,
        marginTop: 20
    },
    detailBox: {
        color: "black",
        fontSize: 16,
        fontWeight: "600"
    },
    textDl: {
        color: "black"
    },
    textDlt: {
        color: "black",
        fontSize: 17,
        fontWeight: "600"
    },
    billDetail: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10
    },
    LBtn: {
        marginRight: 10,
        marginLeft: 10,
    },
    lText: {
        color: "white",
        fontWeight: "600",
        fontSize: 17,
        letterSpacing: 1
    },
    box: {
        width: "100%",
        padding: 15,
        flexDirection: "row",
        borderTopWidth: 1,
        justifyContent: "space-between"
    },
    border: {
        borderWidth: 1,
        borderColor: "#9C9C9B",
        marginTop: 5,
        marginBottom: 5
    },
})

export default styles;
