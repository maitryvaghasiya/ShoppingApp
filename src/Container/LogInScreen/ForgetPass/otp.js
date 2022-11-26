import { TouchableOpacity, Text, View, Alert, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OTPTextView from 'react-native-otp-textinput';

export const OTP = ({ navigation }) => {

    state = {
        otpInput: '',
        inputText: '',
    };

    alertText = () => {
        const { otpInput = '' } = this.state;
        if (otpInput) {
            Alert.alert(otpInput);
        }
    };

    clear = () => {
        this.input1.clear();
    };

    updateOtpText = () => {
        this.input1.setValue(this.state.inputText);
    };
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        < Ionicons name='ios-chevron-back' style={styles.backIcon} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.head}>Enter your OTP</Text>
                </View>
            </View>
            <View style={styles.Jcenter}>
                <OTPTextView
                    handleTextChange={(e) => { }}
                    containerStyle={styles.textInputContainer}
                    textInputStyle={styles.roundedTextInput}
                    defaultValue="1234"
                    tintColor="#3498DB"
                />
            </View>
            <View style={styles.Jcenter}>
                <TouchableOpacity onPress={() => navigation.navigate('LogInScrn')} >
                    <View style={styles.Button}>

                        <Text style={styles.BText}>Continue</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );


}

const styles = StyleSheet.create({
    container: {
        margin: 16,
        flex: 1,
        padding: 5,
    },
    backIcon: {
        position:'absolute',
        left:0,
        fontSize: 30,
        color: 'black',
      },
      
      head:{
        color:'#3498DB',
        fontSize:20,
        letterSpacing:2,
        fontWeight:"700",
        marginBottom:20,
        marginTop:60,
        textAlign:'center'
    },
    textInputContainer: {
        marginBottom: 20,
        marginTop:50,
    },
    Jcenter:{
        justifyContent:'center',
        alignItems:'center'
    },
    roundedTextInput: {
        borderRadius: 10,
        borderWidth: 3,
    },
    Button: {
        paddingTop: 2,
        paddingBottom: 2,
        paddingRight: 90,
        paddingLeft: 90,
        backgroundColor: "#047BD5",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 10,
        marginTop: 40
    },
    BText: {
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 20,
        color: 'white'
    },
});
