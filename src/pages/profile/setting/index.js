import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  View,
  ScrollView,
  Text,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { appIcons } from "src/utils/assets";
import styles from "./styles";
import ToggleSwitch from "src/components/ToggleSwitch";
import { colors } from "src/utils/styles";

const ToggleRow = ({ item, onToggle }) => (
  <View style={styles.cardStyle}>
    <View style={styles.leftArrow}>
      <item.icon />
      <Text style={styles.title}>{item.title}</Text>
    </View>
    <ToggleSwitch
      value={item.value}
      onPress={onToggle}
      trackColors={{ on: "#6137D1", off: "#27272A" }}
      thumbColors={{ on: colors.white, off: colors.white }}
    />
  </View>
);

const Settings = () => {
  const navigation = useNavigation();

  const [toggles, setToggles] = useState({
    darkMode: false,
    notifications: false,
    biometric: false,
  });

  const toggleData = [
    {
      id: "1",
      key: "darkMode",
      title: "Dark Mode",
      icon: appIcons.moon,
    },
    {
      id: "2",
      key: "notifications",
      title: "Push Notifications",
      icon: appIcons.bell,
    },
    {
      id: "3",
      key: "biometric",
      title: "Biometric Login",
      icon: appIcons.fingerprint,
    },
  ];

  const handleToggle = (key) => {
    setToggles((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <View style={styles.ellipse}>
          <Image source={appIcons.leftArrow} style={styles.backIcon} />
        </View>
      </TouchableOpacity>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.setting}>Settings</Text>
          <Text style={styles.prefrances}>PREFERENCES</Text>
        </View>

        {/* Preferences (FlatList) */}
        <FlatList
          data={toggleData}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <ToggleRow
              item={{ ...item, value: toggles[item.key] }}
              onToggle={() => handleToggle(item.key)}
            />
          )}
        />

        {/* Account */}
        <Text style={styles.prefrances}>ACCOUNT</Text>

        <View style={styles.cardStyle}>
          <View style={styles.leftArrow}>
            <appIcons.globefilled />
            <Text style={styles.title}>Language</Text>
          </View>
          <View style={styles.leftArrow}>
            <Text style={styles.rightButton}>English</Text>
            <appIcons.rightgray />
          </View>
        </View>

        <View style={styles.cardStyle}>
          <View style={styles.leftArrow}>
            <appIcons.theme />
            <Text style={styles.title}>Theme</Text>
          </View>
          <View style={styles.leftArrow}>
            <Text style={styles.rightButton}>Dark</Text>
            <appIcons.rightgray />
          </View>
        </View>

        <View style={styles.cardStyle}>
          <View style={styles.leftArrow}>
            <appIcons.db />
            <Text style={styles.title}>Data & Storage</Text>
          </View>
          <View style={styles.leftArrow}>
            <Text style={styles.rightButton}>1.2 GB</Text>
            <appIcons.rightgray />
          </View>
        </View>

        {/* About */}
        <Text style={styles.prefrances}>ABOUT</Text>

        <View style={styles.cardStyle}>
          <View style={styles.leftArrow}>
            <appIcons.info />
            <Text style={styles.title}>App Version</Text>
          </View>
          <Text style={styles.rightButton}>1.2.0</Text>
        </View>

        <Text style={styles.spendNest}>
          SpendNest v1.0.0{"\n"}© 2024 All rights reserved
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
