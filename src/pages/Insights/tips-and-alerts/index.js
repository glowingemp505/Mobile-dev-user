import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./styles";
import { appIcons } from "src/utils/assets";

const TipsandAlerts = () => {
  const alertsData = [
    {
      id: "1",
      type: "success",
      title: "Great savings streak!",
      message: "You've saved $500 more than usual this month.",
      backgroundColor: "#14532D66",
      iconBg: "#16A34A4D",
      icon: appIcons.grow,
      textColor: "#86EFAC",
    },
    {
      id: "2",
      type: "warning",
      title: "Subscription alert",
      message: "Your subscription costs increased by $25.",
      backgroundColor: "#7C2D1266",
      iconBg: "#EA580C4D",
      icon: appIcons.alert,
      textColor: "#FDBA74",
    },
    {
      id: "3",
      type: "danger",
      title: "Budget exceeded",
      message: "Shopping category is $50 over budget.",
      backgroundColor: "#7F1D1D66",
      iconBg: "#DC26264D",
      icon: appIcons.reddown,
      textColor: "#FCA5A5",
    },
  ];
  const renderAlertItem = ({ item }) => {
    return (
      <View
        style={[styles.innerCard, { backgroundColor: item.backgroundColor }]}
      >
        <View style={styles.innerWrapperCard} >
          <View style={[styles.box, { backgroundColor: item.iconBg }]}>
            <Image source={item.icon} style={styles.icon} />
          </View>
          <View style={{gap:10}} >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={[styles.message, {color:item.textColor}]} >{item.message}</Text>
          </View>
        </View>
        <View style={styles.iconVIew} >
        <appIcons.righFull />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.card}>
      <Text style={styles.tips}>Tips & Alerts</Text>

      <FlatList
        data={alertsData}
        keyExtractor={(item) => item.id}
        renderItem={renderAlertItem}
      />
    </View>
  );
};

export default TipsandAlerts;
