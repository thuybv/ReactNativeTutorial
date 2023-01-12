import { View, StyleSheet, TextInput, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../navigation/Navigation';
import { AppBar } from '../../components';

const SignInScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    const [visible, setVisible] = useState(true);
    const togglePasswordVisiblity = () => {
        setVisible(!visible);
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View style={styles.container}>
                <AppBar
                    title={'Log In'}
                    suffix={'Sign up'}
                    onPressSuf={() => navigation.navigate('SignUp')}
                ></AppBar>

                <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                    <TextInput
                        style={styles.input}
                        placeholder='Email'
                        placeholderTextColor='#BDBDBD'
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    ></TextInput>
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder='Password'
                            placeholderTextColor='#BDBDBD'
                            value={password}
                            onChangeText={(text) => setPassWord(text)}
                            secureTextEntry={visible}
                        ></TextInput>
                        <Text
                            style={[styles.textButton, styles.color, {
                                position: 'absolute',
                                right: 16
                            }]}
                            onPress={togglePasswordVisiblity}
                        >{visible ? 'Show' : 'Hide'}</Text>
                    </View>

                </View>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BottomBar')}><Text style={styles.textButton}>Log in</Text></TouchableOpacity>
                    <Text
                        style={[styles.textButton, styles.color]}
                    >Forgot your password?</Text>
                </View>

            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 16,
        flexDirection: 'column'
    },
    input: {
        padding: 15,
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        borderColor: '#E8E8E8',
        height: 50,
        borderStyle: 'solid',
        borderWidth: 1,
        marginBottom: 16,
    },
    button: {
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 100,
        backgroundColor: '#5DB075',
        minHeight: 51,
        width: '100%'
    },
    textButton: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        marginVertical: 15
    },
    color: {
        color: '#5DB075'
    }
});

export default SignInScreen;