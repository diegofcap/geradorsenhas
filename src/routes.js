import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./pages/home";
import { Passwords } from "./pages/passwords";
import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#392DE9",
        tabBarInactiveTintColor: "#000",
        tabBarLabelStyle: {
          fontSize: 14,
          marginBottom: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          //tabBarLabel: "Gerar Senha",
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color={color} />;
            } else {
              return <Ionicons name="home-outline" size={size} color={color} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Passwords"
        component={Passwords}
        options={{
          tabBarShowLabel: false,
          //tabBarLabel: "Minhas Senhas",
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name="lock-closed" size={size} color={color} />;
            } else {
              return (
                <Ionicons
                  name="lock-closed-outline"
                  size={size}
                  color={color}
                />
              );
            }
          },
        }}
      />
    </Tab.Navigator>
  );
}
