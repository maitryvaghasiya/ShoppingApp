import { View, Text, ScrollView, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './style';

const SignupScreen = ({ navigation }) => {

    const [name, setName] = React.useState(null);
    const [mobileNo, setMobileNo] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [conPassword, setConPassword] = React.useState(null);

    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#047BD5"
            />
            <View style={styles.screen}>
                <View style={styles.head}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <MaterialIcons name='arrow-back-ios' style={styles.backIcon} size={18} />
                    </TouchableOpacity>
                    <Text style={styles.heading}>Creat an Account</Text>
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={setName}
                        value={name}
                        placeholder="Enter your Name"
                        placeholderTextColor="#585656"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setMobileNo}
                        value={mobileNo}
                        placeholder="Enter your Mobile Number"
                        placeholderTextColor="#585656"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Enter your Email-Id"
                        placeholderTextColor="#585656"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Enter Password"
                        placeholderTextColor="#585656"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setConPassword}
                        value={conPassword}
                        placeholder="Enter Confirm Password"
                        placeholderTextColor="#585656"
                    />
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('OtpScrn')}
                    >
                        <Text style={styles.textStyle}>Send Otp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SignupScreen;