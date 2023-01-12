import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MyBottomNavBar, MyDrawer } from ".";
import { SignInScreen, SignUpScreen } from "../screens";

// import MyDrawer from "./Drawer";

export type StackParams = {
    SignIn: any;
    SignUp: any;
    Drawer: any;
    BottomBar: any;
}
const Stack = createStackNavigator<StackParams>();

function MyStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="SignIn"
                component={SignInScreen}></Stack.Screen>
            <Stack.Screen name="SignUp" component={SignUpScreen}></Stack.Screen>
            <Stack.Screen name="Drawer" component={MyDrawer}></Stack.Screen>
            <Stack.Screen name="BottomBar" component={MyBottomNavBar}></Stack.Screen>
        </Stack.Navigator>
    );
}



const MainNavigator = () => {
    return (
        <NavigationContainer>
            <MyStack></MyStack>
        </NavigationContainer>
    );
}

export default MainNavigator;