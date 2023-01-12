import { View, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import React, { useState } from 'react';
import { FeedItem } from './index';
import { useNavigation } from '@react-navigation/native';
import { StackParams } from '../../navigation/Navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppBar } from '../../components';
const FeedScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

    const DATA = [
        {
            id: 1,
            image: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Header',
            content: `He'll want to use your yacht, and I don't want this thing smelling like fish.`,
            time: '8m ago'
        },
        {
            id: 2,
            image: 'https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Header',
            content: `He'll want to use your yacht, and I don't want this thing smelling like fish.`,
            time: '8m ago'
        },
        {
            id: 3,
            image: 'https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Header',
            content: `He'll want to use your yacht, and I don't want this thing smelling like fish.`,
            time: '8m ago'
        },
        {
            id: 4,
            image: 'https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Header',
            content: `He'll want to use your yacht, and I don't want this thing smelling like fish.`,
            time: '8m ago'
        },
    ];
    const [searchValue, setSearchValue] = useState('');
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <AppBar
                    title={'Feed'}
                    suffix={'Filter'}
                    prefix={'Back'}
                    onPressPref={() => navigation.goBack()}
                ></AppBar>
                <TextInput
                    style={styles.input}
                    placeholder='Search'
                    placeholderTextColor='#BDBDBD'
                    value={searchValue}
                    onChangeText={(text) => setSearchValue(text)}
                ></TextInput>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {DATA.map(item => {
                        return <FeedItem key={item.id} item={item}></FeedItem>;
                    })}
                    <View style={{
                        height: 200,
                        width: '100%',
                        marginBottom: 32,
                        backgroundColor: '#F0F0F0',
                        borderRadius: 8
                    }}></View>
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 16,
        flexDirection: 'column',
    },
    input: {
        padding: 15,
        backgroundColor: '#F6F6F6',
        borderRadius: 100,
        borderColor: '#E8E8E8',
        height: 50,
        borderStyle: 'solid',
        borderWidth: 1,
        marginBottom: 16,
    }
});

export default FeedScreen