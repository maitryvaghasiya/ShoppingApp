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
        // justifyContent: "center",
    },
    logoImg: {
        height: 100,
        width: 100,
        alignItems: "center",
        alignSelf: "center",
        // position: "absolute",
        // top: 150,
        // flex: 1,
        marginTop: 50,
        marginBottom: 50
    },
    input: {
        // height: 40,
        // margin: 8,
        borderBottomWidth: 0.8,
        padding: 10,
        borderRadius: 10,
        // color: "#A4A3A3"
    },
    forPassView: {
        // position: "relative",
    },
    passwordBox: {
        flexDirection: "row",
        borderBottomWidth: 0.8,
        paddingLeft: 5,
        borderRadius: 10,
        alignItems: "center",
    },
    forPass: {
        color: "#047BD5",
        position: "absolute",
        right: 5,
        fontSize: 16,
    },
    remBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 6,
    },
    setIconEye: {
        position: "absolute",
        right: 20,
        alignItems: "center",
    },
    squarIcon: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    IconsBox: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    googleIcon: {
        fontSize: 30,
        marginBottom: 30,
        // marginRight: 20,
        color: 'black'
    },
    ORbox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 20
    },
    button: {
        borderRadius: 2,
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 30,
        paddingLeft: 30,
        // marginTop:25,
        backgroundColor: "#047BD5",
        // alignItems:"center",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 10,
        position: "absolute",
        bottom: -70,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    alreadyAcc: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 5,
        position: "absolute",
        bottom: -100,
    },
    SingUPText: {
        color: '#9C9C9B',
    },
    SingUPText1: {

        fontSize: 15,
        color: "#047BD5"

    },
    head: {
        alignItems: "center",
        marginTop: 30,
        marginBottom: 30,
        flexDirection: "row",
        paddingLeft: 10

    },
    heading: {
        fontSize: 20,
        letterSpacing: 3,
        fontWeight: "900",
        color: "#047BD5",

    },
    backIcon: {
        marginRight: 10
    }
})

export default styles;
