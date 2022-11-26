import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './style';
import Images from '../../Theme/Images';

const LogInScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);

    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye');

    const handlePasswordVisibility = () => {
        if (rightIcon === 'eye') {
            setRightIcon('eye-off');
            setPasswordVisibility(!passwordVisibility);
        } else if (rightIcon === 'eye-off') {
            setRightIcon('eye');
            setPasswordVisibility(!passwordVisibility);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.screen}>
                <Image source={Images.fliplogo} style={styles.logoImg} />

                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Enter your Mobile Number/Email-id"
                        placeholderTextColor="#FA4A3A3"
                    />
                    <View style={styles.passwordBox}>
                        <TextInput
                            // style={styles.input}
                            onChangeText={setPassword}
                            value={password}
                            placeholder="Enter your Password"
                            secureTextEntry={true}
                            placeholderTextColor="#FA4A3A3"
                        />
                        <TouchableOpacity style={styles.setIconEye} onPress={() => handlePasswordVisibility()}>
                            {/* <Ionicons name="eye-off" size={20} color={'#FA4A3A3'} style={styles.iconEye} /> */}
                            <Ionicons name="eye" size={20} color={'#FA4A3A3'} style={styles.iconEye} />

                        </TouchableOpacity>

                    </View>
                    <View style={styles.remBox}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <MaterialIcons name='crop-square' style={styles.squarIcon}></MaterialIcons>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text>Remember Me</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.forPassView} onPress={() => navigation.navigate('ForgetPassword')}>
                            <Text style={styles.forPass}>Forget Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ORbox}>
                        <Text >OR</Text>
                    </View>
                    <View style={styles.IconsBox}>
                        <View>
                            <TouchableOpacity >
                                <AntDesign name='google' style={styles.googleIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('HomeScrn')}
                    >
                        <Text style={styles.textStyle}>Log In</Text>
                    </TouchableOpacity>
                    <View style={styles.alreadyAcc}>
                        <Text style={styles.SingUPText}>Didn’t have any account?</Text>
                        <TouchableOpacity
                        onPress={() => navigation.navigate('SignupScreen')}
                        >
                            <Text style={styles.SingUPText1}>  Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>



            </View>
        </View >
    )
}

export default LogInScreen;

