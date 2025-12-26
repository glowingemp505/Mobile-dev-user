import React, { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import { appIcons, appImages } from "src/utils/assets";
import CommonLinearGradient from "src/components/CommonLinearGradient";
import GeneralModal from "src/components/GeneralModal";

const Profile = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null); // "logout" | "delete"

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
      icon: appIcons.userWhite,
      route: "EditProfile",
      type: "normal",
    },
    {
      id: "3",
      title: "Linked Banks",
      subtitle: "3 accounts connected",
      icon: appIcons.bankwhite,
      route: "LinkYourBank",
      type: "normal",
      routeName: "settingScreen",
    },
    {
      id: "4",
      title: "Notifications",
      subtitle: "Alerts & reminders",
      icon: appIcons.bell,
      route: "Notifications",
      type: "normal",
    },
    {
      id: "7",
      title: "Help & Support",
      subtitle: "FAQs & contact",
      icon: appIcons.help,
      route: "HelpSupport",
      type: "normal",
    },
    {
      id: "8",
      title: "Logout",
      icon: appIcons.logout,
      subtitle: "Sign out now",
      type: "danger",
    },
    {
      id: "9",
      title: "Delete Account",
      icon: appIcons.trash,
      subtitle: "Permanent removal",
      type: "danger",
    },
  ];

  const renderStatusItem = ({ item }) => (
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

  const renderItem = ({ item }) => {
    const isDanger = item.type === "danger";

    return (
      <TouchableOpacity
        style={[styles.card, isDanger && styles.dangerCard]}
        activeOpacity={0.8}
        onPress={() => {
          if (isDanger) {
            setModalType(item.title === "Logout" ? "logout" : "delete");
            setShowModal(true);
          } else {
            navigation.navigate(item.route, {
              routeName: item.routeName,
            });
          }
        }}
      >
        <View style={styles.leftRow}>
          <item.icon />
          <View style={{ gap: 5 }}>
            <Text style={[styles.titleStyle, isDanger && styles.dangerText]}>
              {item.title}
            </Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        </View>
        {!isDanger && <appIcons.right />}
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top > 0 ? insets.top + 5 : 20 },
      ]}
    >
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
        <View>
          <CommonLinearGradient style={styles.cicleView}>
            <Text style={styles.nameText}>JD</Text>
          </CommonLinearGradient>

          <TouchableOpacity style={styles.userView}>
            <appIcons.user />
          </TouchableOpacity>
        </View>

        <View style={styles.textView}>
          <Text style={styles.setting}>Settings</Text>
          <Text style={styles.email}>john@example.com</Text>
        </View>

        <View style={styles.becomProCard}>
          <appIcons.bitcoin />
          <Text style={styles.planText}>Pro Member</Text>
        </View>

        <FlatList
          data={statusData}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderStatusItem}
          contentContainerStyle={styles.statusList}
          showsHorizontalScrollIndicator={false}
        />

        <FlatList
          data={PROFILE_LIST}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          style={{ width: "100%", paddingHorizontal: 16 }}
        />
      </ScrollView>

      <GeneralModal
        modalSuccess={showModal}
        modalError={false}
        Set_Modal_Visibilty={setShowModal}
        imageSource={
          modalType === "logout" ? appImages.logoutImage : appImages.delImage
        }
        title={modalType === "logout" ? "Logout" : "Delete Account"}
        description={
          modalType === "logout"
            ? "Are you sure you want to logout from your account?"
            : "This action will permanently delete your account. This cannot be undone."
        }
        yesBtnTitle={modalType === "logout" ? "Logout" : "Delete"}
        noBtnTitle="Cancel"
        handleYesPress={() => {
          setShowModal(false);

          if (modalType === "logout") {
            console.log("User Logged Out");
          } else {
            console.log("Account Deleted");
          }
        }}
        handleNoPress={() => setShowModal(false)}
      />
    </View>
  );
};

export default Profile;
