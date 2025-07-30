import { StatusBar } from "expo-status-bar";
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "./src/utils/colors";
import SkillsScreen from "./src/screens/SkillsScreen";

const { Navigator, Screen } = createBottomTabNavigator();

const sharedScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarActiveTintColor: Colors.ORANGE,
  tabBarStyle: {
    backgroundColor: Colors.VERY_DARK_GRAY,
    borderTopWidth: 1,
    borderColor: Colors.ORANGE,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    textTransform: "uppercase",
  },
};

const homeScreenOptions: BottomTabNavigationOptions = {
  tabBarIcon: ({ color }) => (
    <Ionicons name="home-sharp" size={20} color={color} />
  ),
};

const skillsScreenOptions: BottomTabNavigationOptions = {
  tabBarIcon: ({ color }) => (
    <Ionicons name="book-sharp" size={20} color={color} />
  ),
};

export default function App() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={sharedScreenOptions}>
        <Screen
          name="Home"
          component={HomeScreen}
          options={homeScreenOptions}
        />
        <Screen
          name="Skills"
          component={SkillsScreen}
          options={skillsScreenOptions}
        />
      </Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
