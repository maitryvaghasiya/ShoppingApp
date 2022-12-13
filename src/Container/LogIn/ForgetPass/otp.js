// import { TouchableOpacity, Text, View, Alert, StyleSheet } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import OTPTextView from 'react-native-otp-textinput';

// const OtpScreen = ({ navigation }) => {

//     state = {
//         otpInput: '',
//         inputText: '',
//     };

//     alertText = () => {
//         const { otpInput = '' } = this.state;
//         if (otpInput) {
//             Alert.alert(otpInput);
//         }
//     };

//     clear = () => {
//         this.input1.clear();
//     };

//     updateOtpText = () => {
//         this.input1.setValue(this.state.inputText);
//     };

//     return (
//         <View style={styles.container}>
//             <View>
//                 <View>
//                     <TouchableOpacity onPress={() => navigation.goBack()}>
//                         < Ionicons name='ios-chevron-back' style={styles.backIcon} />
//                     </TouchableOpacity>
//                 </View>
//                 <View>
//                     <Text style={styles.head}>Enter your OTP</Text>
//                 </View>
//             </View>
//             <View style={styles.Jcenter}>
//                 <OTPTextView
//                     handleTextChange={(e) => { }}
//                     containerStyle={styles.textInputContainer}
//                     textInputStyle={styles.roundedTextInput}
//                     tintColor="#047BD5"
//                     keyboardType="numeric"
//                     inputCount={4}
//                 />
//             </View>
//             <View style={styles.Jcenter}>
//                 <TouchableOpacity onPress={() => navigation.navigate('LogInScrn')} >
//                     <View style={styles.Button}>
//                         <Text style={styles.BText}>Continue</Text>
//                     </View>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         margin: 16,
//         flex: 1,
//         padding: 5,
//     },
//     backIcon: {
//         position: 'absolute',
//         left: 0,
//         fontSize: 30,
//         color: 'black',
//     },
//     head: {
//         color: '#047BD5',
//         fontSize: 20,
//         letterSpacing: 2,
//         fontWeight: "700",
//         marginBottom: 20,
//         marginTop: 60,
//         textAlign: 'center'
//     },
//     textInputContainer: {
//         marginBottom: 20,
//         marginTop: 50,
//     },
//     Jcenter: {
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     roundedTextInput: {
//         borderRadius: 10,
//         borderWidth: 3,
//     },
//     Button: {
//         paddingTop: 2,
//         paddingBottom: 2,
//         paddingRight: 90,
//         paddingLeft: 90,
//         backgroundColor: "#047BD5",
//         justifyContent: "center",
//         alignSelf: "center",
//         borderRadius: 10,
//         marginTop: 40
//     },
//     BText: {
//         textAlign: 'center',
//         marginVertical: 10,
//         fontSize: 20,
//         color: 'white'
//     },
// });

// export default OtpScreen;


import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import OTPTextView from 'react-native-otp-textinput';

export default class OtpScreen extends Component {
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

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.screen}>
                    <View style={styles.head}>
                        <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                            <MaterialIcons name='arrow-back-ios' style={styles.backIcon} size={18} />
                        </TouchableOpacity>
                        <Text style={styles.heading}>Verification</Text>
                    </View>
                    <View style={styles.inputBoxotp}>
                        <OTPTextView
                            ref={(e) => (this.input1 = e)}
                            containerStyle={styles.textInputContainer}
                            textInputStyle={styles.roundedTextInput}
                            handleTextChange={(text) => this.setState({ otpInput: text })}
                            inputCount={4}
                            keyboardType="numeric"
                            tintColor="#047BD5"
                        />
                    </View>
                    <View style={styles.buttonWrapper}>
                        <TouchableOpacity
                            onPress={() => { this.alertText; this.props.navigation.navigate('LogInScrn') }}
                        >
                            <View style={styles.Button}>
                                <Text style={styles.BText}>Continue</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: "white",
        width: "100%"
    },
    screen: {
        margin: 16,
        flex: 1,
    },
    inputBoxotp: {
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 30

    },
    textInputContainer: {
        marginBottom: 20,
        alignItems: 'center'
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center",
        marginBottom: 20,
        borderRadius: 120
    },
    buttonStyle: {
        marginHorizontal: 20,
        backgroundColor: "#047BD5",
        padding: 30,
        borderRadius: 120
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
        letterSpacing: 2,
        fontWeight: "900",
        color: "#047BD5",
    },
    backIcon: {
        marginRight: 10
    },
    textInputContainer: {
        marginBottom: 20,
        marginTop: 50,
    },
    Jcenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    roundedTextInput: {
        borderRadius: 10,
        borderWidth: 3,
        keyboardType: "numeric"
    },
    Button: {
        paddingTop: 2,
        paddingBottom: 2,
        paddingRight: 30,
        paddingLeft: 30,
        backgroundColor: "#047BD5",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 10,
        marginTop: 40
    },
    BText: {
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 16,
        color: 'white',
        letterSpacing: 2,
        fontWeight:"600"
    },
});