import { View, StyleSheet, TextInput, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../navigation/Navigation';
import { AppBar } from '../../components';
import Icon from 'react-native-vector-icons/Ionicons';

const SignUpScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    const [visible, setVisible] = useState(true);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const togglePasswordVisiblity = () => {
        setVisible(!visible);
    };
    const [showModal, setShowModal] = useState(false);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <AppBar
                    title={'Sign up'}
                    suffix={'Login'}
                    prefix={<Icon name='close-outline' size={24} ></Icon>}
                    stylePrefixAppbar={styles.prefix}
                    onPressPref={() => navigation.goBack()}
                    onPressSuf={() => navigation.navigate('SignIn')}
                ></AppBar>
                <TextInput
                    style={styles.input}
                    placeholder='Name'
                    placeholderTextColor='#BDBDBD'
                    value={name}
                    onChangeText={(text) => setName(text)}
                ></TextInput>
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
                        secureTextEntry={visible}
                        value={password}
                        onChangeText={(text) => setPassWord(text)}
                    ></TextInput>
                    <Text
                        style={[styles.textButton, styles.color, {
                            position: 'absolute',
                            right: 16
                        }]}
                        onPress={togglePasswordVisiblity}
                    >{visible ? 'Show' : 'Hide'}</Text>
                </View>
                <View
                    style={styles.checkboxContainer}>
                    <CheckBox
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    /><Text style={styles.checkboxDes}>I would like to receive your newsletter and other promotional information.</Text>
                </View>
                <TouchableOpacity style={styles.button}
                    onPress={() => setShowModal(!showModal)}>
                    <Text style={styles.textButton}>Sign Up</Text>
                </TouchableOpacity>
                <Modal
                    animationType="none"
                    transparent={false}
                    visible={showModal}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Congratulations!</Text>
                            <Text style={styles.modalDes}>Consequat velit qui adipisicing sunt do reprehenderit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua esse ex dolore esse. Consequat velit qui adipisicing sunt.</Text>
                            <TouchableOpacity style={styles.button}
                                onPress={() => {
                                    navigation.navigate('SignIn')
                                }}>
                                <Text style={styles.textButton}>Click Me</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                setShowModal(!showModal)
                            }}>
                                <Text style={styles.secondAction}>Secondary Action!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
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
    prefix: {
        color: '#BDBDBD',
        position: 'absolute',
        left: 0
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
        marginVertical: 15,
    },
    color: {
        color: '#5DB075'
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 43,
        marginTop: 16
    },
    checkboxDes: {
        fontSize: 14, fontWeight: '400',
        color: '#666666'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 16,
        backgroundColor: '#5DB075'
    },
    modalView: {
        height: '50%',
        width: '100%',
        backgroundColor: "white",
        borderRadius: 8,
        padding: 16,
        alignItems: "center",
        shadowColor: "rgba(38, 36, 131, 0.25)",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 20,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight: '600',
        fontSize: 30,
        lineHeight: 36,
        color: '#000'
    },
    modalDes: {
        marginBottom: 32,
        textAlign: "center",
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 19,
        color: '#666666'
    },
    secondAction: {
        marginVertical: 24,
        textAlign: "center",
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 19,
        color: '#5db075'
    },
});

export default SignUpScreen