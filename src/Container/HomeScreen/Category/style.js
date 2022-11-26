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
        fontSize: 16
    },
    searchIcon: {
        fontSize: 20,
    },
    miceIcon: {
        fontSize: 19,
        marginLeft: 10
    },
    iconDes: {
        flexDirection: "row"
    },
    cardBox: {
        width: "24%"
    },
    Imgtext: {
        textAlign: 'center',
        color: 'black',
        fontSize:16,
        fontWeight:"700"
    },
    imgCard: {
        borderRadius: 50,
        marginLeft: 10,
        marginTop: 10,
        backgroundColor: '#D6EAF8',
        padding: 10,
    },
    productImg: {
        height: 50,
        width: "90%",
        alignSelf: 'center',
    },
    border: {
        borderWidth: 1,
        borderColor: "#9C9C9B",
        marginTop: 12,
        marginBottom: 12
    },
    moreHead:{
        color:"black",
        fontSize:18,
        fontWeight:"900",
        letterSpacing:1
    },
    trendingBox:{
        width: "48%",
        // height: 200,
        position:"relative",
    },
    trendImgCard:{
        borderRadius: 20,
        marginLeft: 10,
        marginTop: 10,
        backgroundColor: "#C1BD90",
        justifyContent:"flex-end",
        paddingBottom:5,
        paddingRight:5  ,
        position:"relative",
        padding:80
    },
    trendImg:{
        height: 80,
        width: 80,
        alignSelf:"flex-end",  
        // position:"absolute",
        // top:50,
        
    },
    tradeDetail:{
        position:"absolute",
        top:20,
        left:20,
        flexDirection:"row"
    },
    tradeText:{
        color: 'black',
        fontSize:18,
        fontWeight:"700",
        position:"absolute",    
    },
    nextIcon:{
        fontWeight:"900",
        position:"absolute",
        top:-2,
        left:120,   
    },
    detailText:{
        color: 'black',
        fontSize:14,
        fontWeight:"600",
        position:"absolute",   
        top:45,
        left:20, 
    }
})
export default styles


