import React, { useLayoutEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { FlatList } from 'react-native-gesture-handler'
import Post from '../components/post'
import { DATA } from '../data'
import AppHeaderIcon from '../components/app-header-icon'

const MainScreeen = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item title='Take Photo'
                    iconName='ios-camera'
                    // onPress={}
                    />
                </HeaderButtons>
            ),
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item title='Toggle Drawer'
                    iconName='ios-menu'
                    // onPress={}
                    />
                </HeaderButtons>
            )
        })
    }, [])

    const onOpen = (post) => {
        navigation.navigate('Post', { postId: post.id })
    }

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={DATA}
                keyExtractor={post => post.id.toString()}
                renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 10
    }
})

export default MainScreeen