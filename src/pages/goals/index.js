import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";
import React, { useEffect, useRef } from "react";
import styles from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CommonLinearGradient from "src/components/CommonLinearGradient";
import { appIcons } from "src/utils/assets";

const ProgressBar = ({ percentage }) => {
  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: percentage,
      duration: 800,
      useNativeDriver: false,
    }).start();
  }, [percentage]);

  return (
    <View style={styles.bar}>
      <Animated.View
        style={[
          styles.activeBar,
          {
            width: animatedWidth.interpolate({
              inputRange: [0, 100],
              outputRange: ["0%", "100%"],
            }),
          },
        ]}
      />
    </View>
  );
};

const Goals = () => {
  const insets = useSafeAreaInsets();

  const data = [
    {
      id: "1",
      title: "Emergency Fund",
      amount: "$7,500 of $10,000",
      percentage: 75,
      remaining: "$2,500 remaining",
      iconColor: "#EF4444",
      image: appIcons.shieldFill,
    },
    {
      id: "2",
      title: "Vacation Trip",
      amount: "$1,800 of $3,000",
      percentage: 60,
      remaining: "$1,200 remaining",
      iconColor: "#3B82F6",
      image: appIcons.fly,
    },
    {
      id: "3",
      title: "New Car",
      amount: "$5,000 of $25,000",
      percentage: 20,
      remaining: "$20,000 remaining",
      iconColor: "#EF4444",
      image: appIcons.car,
    },
    {
      id: "4",
      title: "Dream House",
      amount: "$12,000 of $50,000",
      percentage: 24,
      remaining: "$38,000 remaining",
      iconColor: "#22C55E",
      image: appIcons.shieldFill,
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={[styles.card, { gap: 20 }]}>
        {/* Top Row */}
        <View style={styles.topRow}>
          <View style={styles.row}>
            <View style={[styles.circle, { backgroundColor: item.iconColor }]}>
              <Image source={item.image} style={styles.icon} />
            </View>
            <View style={{ gap: 5 }}>
              <Text style={styles.lableStyle}>{item.title}</Text>
              <Text style={styles.amount}>{item.amount}</Text>
            </View>
          </View>
          <Text style={styles.percentage}>{item.percentage}%</Text>
        </View>

        {/* Progress Bar */}
        <View style={styles.barMain}>
          <ProgressBar percentage={item.percentage} />
        </View>

        {/* Remaining */}
        <Text style={styles.remaining}>{item.remaining}</Text>
      </View>
    );
  };

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top > 0 ? insets.top + 5 : 20 },
      ]}
    >
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.goals}>Goals</Text>
          <TouchableOpacity>
            <CommonLinearGradient style={styles.circleAdd}>
              <appIcons.add />
            </CommonLinearGradient>
          </TouchableOpacity>
        </View>

        <Text style={[styles.connect, { marginVertical: 15 }]}>
          Connect accounts to start tracking
        </Text>
        <View style={[styles.card, { marginTop: 20 }]}>
          <View style={styles.header}>
            <Text style={styles.connect}>Total Saved</Text>
            <Text style={styles.active}>4 active goals</Text>
          </View>
          <Text style={styles.lableStyle}>$26,300.00</Text>
        </View>

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          contentContainerStyle={{ gap: 15, paddingBottom: 30, marginTop:15 }}
        />
      </ScrollView>
    </View>
  );
};

export default Goals;
