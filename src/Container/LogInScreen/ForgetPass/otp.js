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
              handleTextChange={(text) => this.setState({ otpInput: text })}
              inputCount={4}
              keyboardType="numeric"
              tintColor="#047BD5"
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              style={styles.buttonStyle}
              title="Submit"
              onPress={() => { this.alertText; this.props.navigation.navigate('LogInScrn') }}
            />
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
    flex: 1,
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
    marginBottom: 20,

  },
  buttonStyle: {
    marginHorizontal: 20,
    backgroundColor: "#047BD5",

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
  },
});