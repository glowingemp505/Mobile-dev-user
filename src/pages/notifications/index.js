import React from "react";
import { Image, Text, View, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { appIcons } from "src/utils/assets";

const notificationData = [
  {
    id: "1",
    title: "New Message",
    description: "You received a new message from John.",
    time: "2 min ago",
  },
  {
    id: "2",
    title: "Payment Successful",
    description: "Your payment has been processed successfully.",
    time: "1 hour ago",
  },
  {
    id: "3",
    title: "New Offer",
    description: "Get 20% off on your next purchase.",
    time: "Yesterday",
  },
  {
    id: "4",
    title: "Security Alert",
    description: "New login detected from a new device.",
    time: "2 days ago",
  },
];

const Notifications = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <View style={styles.notificationIcon}>
        <appIcons.bell width={18} height={18} />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationDesc}>{item.description}</Text>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <View style={styles.ellipse}>
            <Image source={appIcons.leftArrow} style={styles.backIcon} />
          </View>
        </TouchableOpacity>

        <Text style={styles.title}>Notifications</Text>

        <View style={styles.bellButton}>
          <View style={styles.notificationDot} />
          <appIcons.bell width={20} height={20} />
        </View>
      </View>
      <FlatList
        data={notificationData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Notifications;
