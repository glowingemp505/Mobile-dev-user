import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { appIcons } from "src/utils/assets";
import { useNavigation } from "@react-navigation/native";

const YoureAllSet = () => {
  const data = [
    {
      icon: appIcons.flash,
      id: 1,
      title: "Pro Plan Active",
      value: "$9.99/month",
    },
    {
      icon: appIcons.banck,
      id: 2,
      title: "1 Bank Connected",
      value: "Chase Bank",
    },
    {
      icon: appIcons.target,
      id: 3,
      title: "Budget Goal Set",
      value: "$3,000/month",
    },
  ];
  const navigate = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.ScrollView}>
        <View>
          <View style={styles.checkCircle}>
            <View style={styles.greenCircle}>
              <appIcons.glow />
            </View>
            <Image source={appIcons.check} style={styles.check} />
          </View>

          <Text style={styles.allSet}>You’re All Set!</Text>
          <View style={styles.descriptionText}>
            <Text style={styles.description}>
              Welcome to SpendMap. Your financial journey starts now.
            </Text>
          </View>
          <View style={styles.card}>
            <View style={styles.boxRow}>
              <View style={styles.box}>
                <appIcons.flash />
              </View>
              <View style={{ gap: 10 }}>
                <Text style={styles.title}>Pro Plan Active</Text>
                <Text style={styles.value}>$9.99/month</Text>
              </View>
            </View>
            <View style={styles.boxRow}>
              <View style={styles.box}>
                <appIcons.banck width={24} height={24} />
              </View>
              <View style={{ gap: 10 }}>
                <Text style={styles.title}>1 Bank Connected</Text>
                <Text style={styles.value}>Chase Bank</Text>
              </View>
            </View>
            <View style={styles.boxRow}>
              <View style={styles.box}>
                <appIcons.targetwhite />
              </View>
              <View style={{ gap: 10 }}>
                <Text style={styles.title}>Budget Goal Set</Text>
                <Text style={styles.value}>$3,000/month</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigate.navigate("Home")}
            style={styles.button}
          >
            <Text style={styles.goto}>Go to Dashboard</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default YoureAllSet;
