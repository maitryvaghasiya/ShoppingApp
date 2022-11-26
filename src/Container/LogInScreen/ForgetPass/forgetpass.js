import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import styles from '../style';

const ForgetPass = ({ navigation }) => {

    const [mobileNo, setMobileNo] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [conPassword, setConPassword] = React.useState(null);

    return (
        <View style={styles.container}>
            <View style={styles.screen}>
                <View style={styles.head}>
                    <TouchableOpacity onPress={() => { navigation.goBack()}}>
                        <MaterialIcons name='arrow-back-ios' style={styles.backIcon} size={18} />
                    </TouchableOpacity>
                    <Text style={styles.heading}>Forget Password</Text>
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={setMobileNo}
                        value={mobileNo}
                        placeholder="Enter your Email-Id"
                        placeholderTextColor="#FA4A3A3"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Enter Password"
                        placeholderTextColor="#FA4A3A3"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setConPassword}
                        value={conPassword}
                        placeholder="Enter Confirm Password"
                        placeholderTextColor="#FA4A3A3"
                    />
                </View>
                <View>
                    <TouchableOpacity
                        style={[styles.button, { bottom: -110 }]}
                        onPress={() => navigation.navigate('OtpScrn')}
                    >
                        <Text style={styles.textStyle}>Send Otp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ForgetPass;