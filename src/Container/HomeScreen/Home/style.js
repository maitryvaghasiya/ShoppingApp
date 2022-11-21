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
    TopImg: {
        height: 40,
        width: 40,
        alignSelf:'center',
        borderWidth: 2,
        marginTop:9  
      },
      Imgtext: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold',
        color:'black',
        marginLeft:10
      },
    
    Pricecard: {
        height: 60,
        width: 60,
        borderRadius: 50,
        marginLeft:10,
        marginTop: 20,
        backgroundColor:'#D6EAF8'
      },
      FlatList1:{
        height: 200,
        width: 150,
        borderRadius:5,
        marginLeft:10,
        marginTop: 20,
        backgroundColor:'#D6EAF8'
      },
      TopImg1:{
        height: 150,
        width: 150,
        alignSelf:'center',
      },
 
})

export default styles;
