import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Item } from '../../feedscreen/components/FeedItem'

type Props = {
    item: Item
}

const ContentItem = ({ item }: Props) => {
    return (
        <View style={{
            flexDirection: 'column',
        }}>
            <Image
                source={{ uri: item.image }}
                style={{
                    height: 200,
                    borderRadius: 8,
                }}
                resizeMode='cover'
            ></Image>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.content}>{item.content}</Text>
            <Text style={styles.time}>{item.time}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: '600',
        fontSize: 16,
        color: '#000000',
        lineHeight: 19,
        marginVertical: 8,
    },
    content: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 17,
        color: '#000000',
        marginBottom: 8,
        flexWrap: 'wrap'
    },
    time: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 17,
        color: '#BDBDBD',
        marginBottom: 38
    }
})

export default ContentItem;