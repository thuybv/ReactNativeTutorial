import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export type Item = {
    id: number;
    image: string;
    title: string,
    content: string,
    time: string,
}
type Props = {
    item: Item
}

const FeedItem = ({ item }: Props) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Image
                source={{ uri: item.image }}
                style={styles.imageItem}
                resizeMode='cover'
            ></Image>
            <View style={{ flexDirection: 'column', width: '80%', marginBottom: 16, borderBottomWidth: 1, borderBottomColor: '#E8E8E8' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={{
                        fontWeight: '400',
                        fontSize: 14,
                        lineHeight: 17,
                        color: '#BDBDBD',
                    }}>{item.time}</Text>
                </View>
                <Text style={styles.content}>{item.content}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageItem: {
        height: 50,
        width: 50,
        borderRadius: 8,
        backgroundColor: '#F6F6F6',
        marginRight: 16
    },
    title: {
        fontWeight: '600',
        fontSize: 16,
        color: '#000000',
        lineHeight: 19,
        marginBottom: 8,
    },
    content: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 17,
        color: '#000000',
        marginBottom: 16,
    }
});

export default FeedItem;