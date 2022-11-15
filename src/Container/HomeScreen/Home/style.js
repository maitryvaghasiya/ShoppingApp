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
    logoImg: {
        height: 100,
        width: 100,
        alignItems: "center",
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 50
    },
    input: {
        borderBottomWidth: 0.8,
        padding: 10,
        borderRadius: 10,
    },
    TopImg: {
        height: 80,
        width: 80,
        borderRadius: 50,
        marginTop: 5,
        // marginLeft: 30,
        borderWidth: 2,
      },
      Imgtext: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold',
        marginTop:15,
        color:'black'
      },
    
    Pricecard: {
        height: 80,
        width: 80,
        borderRadius: 50,
        marginLeft:10,
        // backgroundColor:'',
        marginTop: 20,
        borderColor:'green',
        borderWidth: 2,
        
      },
 
})

export default styles;
