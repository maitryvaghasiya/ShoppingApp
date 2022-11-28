import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        width: "100%"
    },
    flexDeraction: {
        flexDirection: 'row',
        justifyContent:'center'
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
    offerLogo: {
        marginLeft: 10,
        marginRight: 10
    },
    HeadBox: {
        width: 210
    },
    LogoImage: {
        height: 100,
        width: 100
    },
    HeadInfoText: {
        fontSize: 16,
        color: 'black',
        fontWeight: '600'
    },
    HeadText: {
        color: '#ABB2B9',
        fontSize: 15,
    },
    line: {
        borderWidth: 1,
        width: 340,
        borderColor: '#D6DBDF',
        
    },
});


export default styles