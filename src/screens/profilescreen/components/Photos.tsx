import { View, ScrollView } from 'react-native'
import React from 'react'
import { ContentItem } from '../../contentscreen';

const Photos = () => {
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
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 230 }}>
            {DATA.map(item => {
                return (
                    <ContentItem key={item.id} item={item}></ContentItem>
                );
            })}
        </ScrollView>
    )
}

export default Photos