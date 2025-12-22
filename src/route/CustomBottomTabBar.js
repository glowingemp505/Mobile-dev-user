import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "src/pages/home";
import Activity from "src/pages/Activity";
import Goals from "src/pages/goals";
import Insights from "src/pages/Insights";
import Profile from "src/pages/profile";
import { appIcons } from "src/utils/assets";

const Tab = createBottomTabNavigator();

const TABS = [
  {
    name: "Home",
    component: Home,
    icon: appIcons.home,
    activeIcon: appIcons.homefill,
  },
  {
    name: "Activity",
    component: Activity,
    icon: appIcons.icocard,
    activeIcon: appIcons.cardfill,
  },
  {
    name: "Goals",
    component: Goals,
    icon: appIcons.target,
    activeIcon: appIcons.targetfill,
  },
  {
    name: "Insights",
    component: Insights,
    icon: appIcons.bulb,
    activeIcon: appIcons.bulbfill,
  },
  {
    name: "Profile",
    component: Profile,
    icon: appIcons.user,
    activeIcon: appIcons.userfiill,
  },
];

const CustomTabBar = ({ state, navigation }) => {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const tab = TABS[index];
        const Icon = isFocused ? tab.activeIcon : tab.icon;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            activeOpacity={0.8}
            onPress={onPress}
            style={styles.tabItem}
          >
            <View style={[styles.iconBox, isFocused && styles.activeIconBox]}>
              <Icon width={22} height={22} />
            </View>

            <Text
              style={[
                styles.label,
                isFocused ? styles.activeLabel : styles.inactiveLabel,
              ]}
            >
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const CustomBottomTabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      {TABS.map((tab) => (
        <Tab.Screen key={tab.name} name={tab.name} component={tab.component} />
      ))}
    </Tab.Navigator>
  );
};

export default CustomBottomTabBar;

const styles = StyleSheet.create({
  tabBarContainer: {
    height: 105,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#000",
    paddingBottom:20
  },

  tabItem: {
    alignItems: "center",
    justifyContent: "center",
  },

  iconBox: {
    width: 55,
    height: 55,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },

  activeIconBox: {
    backgroundColor: "#1A1233",
  },

  label: {
    fontSize: 14,
    fontWeight: "400",
  },

  activeLabel: {
    color: "#FFFFFF",
  },

  inactiveLabel: {
    color: "#A1A1A9",
  },
});
