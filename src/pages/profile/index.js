import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import { appIcons } from "src/utils/assets";
import CommonLinearGradient from "src/components/CommonLinearGradient";

const Profile = () => {
  const navigation = useNavigation();

  const statusData = [
    { id: 1, title: "Accounts", number: 3 },
    { id: 2, title: "Goals", number: 4 },
    { id: 3, title: "On Budget", number: "85%" },
  ];

  const PROFILE_LIST = [
    {
      id: "1",
      title: "Edit Profile",
      subtitle: "Update your information",
      icon: appIcons.user,
      route: "EditProfile",
      type: "normal",
    },
    {
      id: "2",
      title: "Payment methods",
      subtitle: "Manage cards & accounts",
      icon: appIcons.card,
      route: "PaymentMethods",
      type: "normal",
    },
    {
      id: "3",
      title: "Linked Banks",
      subtitle: "3 accounts connected",
      icon: appIcons.banck,
      route: "LinkedBanks",
      type: "normal",
    },
    {
      id: "4",
      title: "Notifications",
      subtitle: "Alerts & reminders",
      icon: appIcons.banck,
      route: "Notifications",
      type: "normal",
    },
    {
      id: "5",
      title: "Security",
      subtitle: "Password & 2FA",
      icon: appIcons.shield,
      route: "Security",
      type: "normal",
    },
    {
      id: "6",
      title: "Preferences",
      subtitle: "App Settings",
      icon: appIcons.banck,
      route: "Preferences",
      type: "normal",
    },
    {
      id: "7",
      title: "Help & Support",
      subtitle: "FAQs & contact",
      icon: appIcons.banck,
      route: "HelpSupport",
      type: "normal",
    },
    {
      id: "8",
      title: "Help & Support",
      icon: appIcons.banck,
      route: "Logout",
      type: "danger",
    },
  ];

  const renderStatusItem = ({ item }) => {
    return (
      <View style={styles.box}>
        <Text
          style={[
            styles.number,
            item.title === "On Budget" && { color: "#22C55E" },
          ]}
        >
          {item.number}
        </Text>
        <Text style={styles.titleStyle}>{item.title}</Text>
      </View>
    );
  };

  const renderItem = ({ item }) => {
    const Icon = item.icon;

    return (
      <TouchableOpacity
        style={[styles.card, item.type === "danger" && styles.dangerCard]}
        onPress={() => navigation.navigate(item.route)}
        activeOpacity={0.8}
      >
        {/* LEFT */}
        <View style={styles.leftRow}>
          {<item.icon />}

          <View style={styles.textColumn}>
            <Text
              style={[
                styles.title,
                item.type === "danger" && styles.dangerText,
              ]}
            >
              {item.title}
            </Text>

            {item.subtitle && (
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            )}
          </View>
        </View>

        {/* RIGHT */}
        {/* {item.type !== "danger" && <appIcons.arrowRight />} */}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* BACK */}
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
        {/* AVATAR */}
        <View>
          <CommonLinearGradient style={styles.cicleView}>
            <Text style={styles.nameText}>JD</Text>
          </CommonLinearGradient>

          <TouchableOpacity style={styles.userView}>
            <appIcons.user />
          </TouchableOpacity>
        </View>

        {/* TITLE */}
        <View style={styles.textView}>
          <Text style={styles.setting}>Settings</Text>
          <Text style={styles.email}>john@example.com</Text>
        </View>

        {/* PRO */}
        <View style={styles.becomProCard}>
          <appIcons.bitcoin />
          <Text style={styles.planText}>Pro Member</Text>
        </View>

        {/* STATUS */}
        <FlatList
          data={statusData}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderStatusItem}
          contentContainerStyle={styles.statusList}
          showsHorizontalScrollIndicator={false}
        />

        {/* SETTINGS LIST */}
        <FlatList
          data={PROFILE_LIST}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
