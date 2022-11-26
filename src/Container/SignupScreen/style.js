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
    head: {
        alignItems: "center",
        marginTop: 30,
        marginBottom: 30,
        flexDirection:"row",
        paddingLeft:10

    },
    heading: {
        fontSize: 20,
        letterSpacing: 3,
        fontWeight: "900",
        color: "#047BD5",
        
    },
    backIcon:{
        marginRight:10
    },
    input: {
        // height: 40,
        // margin: 8,
        borderBottomWidth: 0.8,
        padding: 10,
        borderRadius: 10,
        // color: "#A4A3A3"
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
        bottom: -90,


    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },

})

export default styles;