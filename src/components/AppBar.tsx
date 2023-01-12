import React from "react";
import { StyleSheet, View, Text } from 'react-native';

type AppProps = {
    suffix?: string;
    title: string;
    prefix?: any;
    onPressPref?: () => void;
    onPressSuf?: () => void;
    styleAppbar?: any;
    styleTitle?: any;
    stylePrefixAppbar?: any;
    styleSuffixAppbar?: any;
}

const AppBar = (props: AppProps) => {
    return (
        <View style={props.styleAppbar ?? styles.header}>
            {props.prefix ? <Text style={props.stylePrefixAppbar ?? styles.prefix} onPress={props.onPressPref}>{props.prefix}</Text> : <View />}
            <Text style={props.styleTitle ?? styles.headerTitle}>{props.title}</Text>
            {props.suffix ? <Text style={props.styleSuffixAppbar ?? styles.suffix} onPress={props.onPressSuf}>{props.suffix}</Text> : <View />}
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    headerTitle: {
        fontWeight: '600',
        fontSize: 30,
        color: '#000000'
    },
    suffix: {
        color: '#5DB075',
        fontSize: 16,
        fontWeight: '500',
        position: 'absolute',
        right: 0
    },

    prefix: {
        color: '#5DB075',
        fontSize: 16,
        fontWeight: '500',
        position: 'absolute',
        left: 0
    }
});

export default AppBar;