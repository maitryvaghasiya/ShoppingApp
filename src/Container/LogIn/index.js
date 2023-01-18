import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, StatusBar, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './style';
import Images from '../../Theme/Images';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import crashlytics from '@react-native-firebase/crashlytics';
import { useDispatch, useSelector } from 'react-redux';
import { LoginUser } from '../../Redux/action/authAction';

async function onSignIn(user) {
    crashlytics().log('User signed in.');
    await Promise.all([
        crashlytics().setUserId(user.uid),
        crashlytics().setAttribute('credits', String(user.credits)),
        crashlytics().setAttributes({
            role: 'admin',
            followers: '13',
            email: user.email,
            username: user.username,
        }),
    ]);
}

const LogInScreen = ({ navigation }) => {



    useEffect(() => {
        crashlytics().log('App mounted.');
    }, []);

    // GoogleSignin.configure({
    //     webClientId: '953354705819-nvengrk20ip36ldpoe0iau37afuld2mt.apps.googleusercontent.com',
    // });

    // const onGoogleButtonPress = async () => {
    //     // Check if your device supports Google Play
    //     // await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    //     // Get the users ID token
    //     const { idToken } = await GoogleSignin.signIn();

    //     // Create a Google credential with the token
    //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    //     // Sign-in the user with the credential
    //     const user_log_in = auth().signInWithCredential(googleCredential);

    //     user_log_in.then((user) => {
    //         console.log(user);
    //     })
    //         .catch((error) => {
    //             console.log((error));
    //         })

    // }
    GoogleSignin.configure({
        webClientId: '953354705819-nvengrk20ip36ldpoe0iau37afuld2mt.apps.googleusercontent.com',
    });

    const googleLogin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            await GoogleSignin.signOut();
            const userInfo = await GoogleSignin.signIn();
            console.log("user info is here ", userInfo)
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                console.log(error)
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
                console.log(error)
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
                console.log(error)
            } else {
                // some other error happened
                console.log(error)
            }
        }
    }

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const dispatch = useDispatch();

    const handleSignIn = () => {
        dispatch(LoginUser({ email, password }))
    }

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
            <StatusBar
                animated={true}
                backgroundColor="#047BD5"
            />
            <View style={styles.screen}>
                <Image source={Images.fliplogo} style={styles.logoImg} />
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Enter your Mobile Number/Email-id"
                        placeholderTextColor="#585656"
                    />
                    <View style={styles.passwordBox}>
                        <TextInput
                            // style={styles.input}
                            onChangeText={setPassword}
                            value={password}
                            placeholder="Enter your Password"
                            secureTextEntry={true}
                            placeholderTextColor="#585656"
                        />
                        <TouchableOpacity style={styles.setIconEye} onPress={() => handlePasswordVisibility()}>
                            {/* <Ionicons name="eye-off" size={20} color={'#FA4A3A3'} style={styles.iconEye} /> */}
                            <Ionicons name="eye" size={20} color={'#585656'} style={styles.iconEye} />

                        </TouchableOpacity>

                    </View>
                    <View style={styles.remBox}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <MaterialIcons name='crop-square' style={styles.squarIcon}></MaterialIcons>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{ color: '#585656' }}>Remember Me</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.forPassView} onPress={() => navigation.navigate('ForgetPassword')}>
                            <Text style={styles.forPass}>Forget Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ORbox}>
                        <Text style={{ color: '#585656' }}>OR</Text>
                    </View>
                    <View style={styles.IconsBox}>
                        <View>
                            <TouchableOpacity
                                // onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
                                onPress={googleLogin}
                            >
                                <AntDesign name='google' style={styles.googleIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>{handleSignIn()}}
                    >
                        <Text style={styles.textStyle}>Log In</Text>
                    </TouchableOpacity>

                    <View style={styles.alreadyAcc}>
                        <Text style={styles.SingUPText}>Didn’t have any account?</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SignupScrn')}
                        >
                            <Text style={styles.SingUPText1}>  Sign up</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.button1}
                            onPress={() => crashlytics().crash()}
                        >
                            <Text>TestCrash</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        </View >
    )
}

export default LogInScreen;

