import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../navigation/Navigation';
import { Posts, Photos } from './index'
import { AppBar } from '../../components';

const ProfileScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
    const [index, setIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.headerTop}>
                <AppBar
                    styleAppbar={styles.appbar}
                    styleTitle={styles.headerTitle}
                    stylePrefixAppbar={styles.prefix}
                    styleSuffixAppbar={styles.suffix}
                    title={'Profile'}
                    suffix={'Logout'}
                    prefix={'Settings'}
                    onPressSuf={() => setShowModal(!showModal)}
                ></AppBar>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.name}>Victoria Robertson</Text>
                <Text style={styles.undername}>A mantra goes here</Text>
                <View style={styles.tabbar}>
                    <TouchableOpacity style={{
                        flex: 1, height: 46,
                    }} onPress={() => setIndex(0)}>
                        <View style={[
                            styles.tabbarButton, {
                                backgroundColor: index == 0 ? 'white' : '#f6f6f6'
                            }]}><Text style={[styles.tabbarItem, {
                                color: index == 0 ? '#5db075' : '#bdbdbd',
                            }]}>Posts</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        flex: 1, height: 46,
                    }} onPress={() => setIndex(1)}>
                        <View style={[styles.tabbarButton, {
                            backgroundColor: index == 1 ? 'white' : '#f6f6f6'
                        }]
                        }><Text
                            style={[styles.tabbarItem, {
                                color: index == 1 ? '#5db075' : '#bdbdbd',
                            }]}>Photos</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {index == 0 && <Posts></Posts>}
                {index == 1 && <Photos></Photos>}
            </View>
            <Modal
                animationType="none"
                transparent={false}
                visible={showModal}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Are you sure about that?</Text>
                        <TouchableOpacity style={styles.button}
                            onPress={() => {
                                navigation.navigate('SignIn')
                            }}>
                            <Text style={styles.textButton}>Log out</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            setShowModal(!showModal)
                        }}>
                            <Text style={styles.secondAction}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <View style={styles.avatar}>
                <Image
                    source={{ uri: 'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_.jpg' }}
                    style={{
                        width: 150,
                        height: 150,
                        borderRadius: 150 / 2,
                    }}
                    resizeMode='cover'
                ></Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pagerView: {
        flex: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    appbar: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontWeight: '600',
        fontSize: 30,
        color: 'white'
    },
    suffix: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        position: 'absolute',
        right: 0
    },
    prefix: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        position: 'absolute',
        left: 0
    },
    headerTop: {
        height: 245,
        width: '100%',
        backgroundColor: "#5DB075",
        paddingHorizontal: 16,
    },
    avatar: {
        position: 'absolute',
        height: 158,
        width: 158,
        borderRadius: 158 / 2,
        backgroundColor: 'white',
        borderWidth: 4,
        borderColor: 'white',
        top: 128,
        left: "31%",
        shadowColor: "rbga(101, 101, 101, 0.15)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 20,
        elevation: 5
    },
    contentContainer: {
        flexDirection: 'column',
        height: 567,
        width: '100%',
        paddingTop: 57,
        backgroundColor: "white",
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    name: {
        fontWeight: '600',
        fontSize: 30,
        color: '#000',
        lineHeight: 36,
    },
    undername: {
        fontWeight: '600',
        fontSize: 16,
        color: '#000',
        lineHeight: 19,
        marginBottom: 8,
    },
    tabbar: {
        height: 50,
        width: '100%',
        marginVertical: 16,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#e8e8e8',
        flexDirection: 'row',
        backgroundColor: '#f6f6f6',
        alignItems: 'center'
    },
    tabbarButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    tabbarItem: {
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 19
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 16,
        backgroundColor: '#5DB075'
    },
    modalView: {
        height: '30%',
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

})

export default ProfileScreen