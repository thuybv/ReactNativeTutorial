import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { ContentScreen, FeedScreen, MarketScreen, ProfileScreen } from '../screens';




const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name='Feed' component={FeedScreen} />
            <Drawer.Screen name="Content" component={ContentScreen} />
            <Drawer.Screen name="Market" component={MarketScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
    );
}

export default MyDrawer;