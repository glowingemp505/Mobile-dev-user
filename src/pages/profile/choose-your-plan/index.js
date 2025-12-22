import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { appIcons } from "src/utils/assets";
import CommonLinearGradient from "src/components/CommonLinearGradient";
import { useNavigation } from "@react-navigation/native";

const ChooseYourPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState("pro");
  const [selectText, setSelectText] = useState("Pro");
  const navigation = useNavigation();

  const plans = [
    {
      id: "free",
      title: "Free",
      price: 0,
      priceLabel: "/mo",
      features: ["2 Bank accounts", "Basic insights", "Monthly reports"],
    },
    {
      id: "pro",
      title: "Pro",
      price: 9.99,
      priceLabel: "/mo",
      features: [
        "Unlimited accounts",
        "AI-powered insights",
        "Goals & budgets",
        "Priority support",
      ],
    },
    {
      id: "family",
      title: "Family",
      price: 14.99,
      priceLabel: "/mo",
      features: [
        "Up to 5 members",
        "Shared budgets",
        "Family dashboard",
        "Everything in Pro",
      ],
    },
  ];

  const handleCardPress = (item) => {
    setSelectedPlan(item.id);
    setSelectText(item.title);
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedPlan === item.id;

    return (
      <TouchableOpacity
        style={[
          styles.cardStyle,
          isSelected && {
            backgroundColor: "#120D1F",
            borderWidth: 1,
            borderColor: "#6137D1",
            borderRadius: 10,
          },
        ]}
        onPress={() => handleCardPress(item)}
        activeOpacity={0.8}
      >
        {isSelected && (
          <View style={styles.miniCircle}>
            <Image source={appIcons.check} style={styles.check} />
          </View>
        )}

        <View style={{ gap: 10 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>
            ${item.price}
            <Text style={styles.priceLabel}>{item.priceLabel}</Text>
          </Text>
        </View>

        <View style={{ marginTop: 10 }}>
          {item.features.map((feature, index) => (
            <View style={styles.featureRow} key={index}>
              {isSelected ? <appIcons.primaryCheck /> : <appIcons.checkGreen />}
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.wrapper}>
        <View style={styles.textView}>
          <Text style={styles.chooseLocation}>Choose Your Plan</Text>
          <Text style={styles.selectColor}>
            Select the plan that works for you
          </Text>
        </View>

        <FlatList
          data={plans}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          scrollEnabled={false}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("PaymentDetails")}
          activeOpacity={0.8}
        >
          <CommonLinearGradient style={styles.signInBtn}>
            <Text style={styles.signInBtnText}>Continue with {selectText}</Text>
          </CommonLinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChooseYourPlan;
