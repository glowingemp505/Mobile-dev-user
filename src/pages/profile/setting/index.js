import React, { useState } from "react";
import { Image, TouchableOpacity, View, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { appIcons } from "src/utils/assets";
import styles from "./styles";
import ToggleSwitch from "src/components/ToggleSwitch";

const Settings = () => {
  const navigation = useNavigation();
  const [switchOn, setSwitchOn] = useState(false);

  const RenderPreferencesCard = ({ icon, title, children }) => {
    return (
      <View style={styles.cardStyle}>
        <View style={styles.leftArrow}>
          <Image source={icon} style={styles.icon} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    );
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

      {/* Content */}
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Text style={styles.setting}>Settings</Text>
          <Text style={styles.prefrances}>PREFERENCES</Text>
        </View>

        <RenderPreferencesCard icon={appIcons.moon} title="Dark Mode">
          <ToggleSwitch
            isOn={switchOn}
            onColor="#4ADE80"
            offColor="#52525B"
            size="medium"
            onToggle={() => setSwitchOn(!switchOn)}
          />
        </RenderPreferencesCard>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
