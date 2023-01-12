import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ContentScreen, FeedScreen, MarketScreen, ProfileScreen } from '../screens';


const Tab = createBottomTabNavigator();

function MyBottomNavBar() {
    let iconName: string;

    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: true,
            tabBarStyle: styles.tabBarStyle,
            tabBarLabel: '',
            tabBarIcon: ({ focused, color }) => {
                color = focused ? '#5DB075' : '#E8E8E8';


                switch (route.name) {
                    case 'Feed':
                        iconName = 'home';
                        break;
                    case 'Content':
                        iconName = 'newspaper-outline';
                        break;
                    case 'Market':
                        iconName = 'information-circle';
                        break;
                    case 'Profile':
                        iconName = 'person-circle-outline';
                        break;
                    default:
                        break;
                }

                return (
                    <Icon name={iconName} color={color} size={24} />
                );
            },
        })
        }>
            <Tab.Screen name="Feed" component={FeedScreen} />
            <Tab.Screen name="Content" component={ContentScreen} />
            <Tab.Screen name="Market" component={MarketScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#FAFAFA',
        height: 83,
    },
    icon: {
        height: 32,
        width: 32,
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default MyBottomNavBar;