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
    notificationBox: {
        flexDirection: 'row',
        width: "100%",
        borderWidth: 1,
        borderColor: "#9C9C9B",
        marginTop: 5,
        marginBottom: 5,
        padding: 5
    },
    headName: {
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: "#047BD5",
        paddingBottom: 15,
        paddingTop: 15,
        paddingLeft: 16,
        paddingRight: 16
    },
    headText: {
        color: "#ffffff",
        fontWeight: "600",
        fontSize: 16
    },
    HeadBox: {
        width: "70%",
        // flexWrap:"wrap"
    },
    offerLogo: {
        marginRight: 5
    },
    LogoImage: {
        height: 80,
        width: 80,
        // justifyContent:"center",
        // alignItems:"center"
    },
    HeadInfoText: {
        fontSize: 16,
        color: 'black',
        fontWeight: '600'
    },
    HeadText: {
        color: 'black',
        fontSize: 15,

    },

});


export default styles