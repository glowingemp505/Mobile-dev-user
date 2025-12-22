import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { appIcons } from "src/utils/assets";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { colors } from "src/utils/styles";
import CommonLinearGradient from "src/components/CommonLinearGradient";
import { useNavigation } from "@react-navigation/native";

const LinkYourBank = () => {
  const [selectBank, setSelectBank] = useState(null);
  const navigation = useNavigation();

  const data = [
    { id: 1, name: "Search bank" },
    { id: 2, name: "Bank Of America" },
    { id: 3, name: "Wells Fargo" },
    { id: 4, name: "Citi" },
    { id: 5, name: "Capital One" },
    { id: 6, name: "US Bank" },
    { id: 7, name: "PNC" },
    { id: 8, name: "TD Bank" },
    { id: 9, name: "HSBC" },
  ];

  const renderItem = ({ item }) => {
    const isSelected = selectBank === item.id;
    return (
      <TouchableOpacity
        style={[styles.cardView, isSelected && styles.cardSelected]}
        onPress={() => setSelectBank(item.id)}
      >
        {isSelected && (
          <View style={styles.checkIconContainer}>
            <Image source={appIcons.check} style={styles.checkIcon} />
          </View>
        )}
        {isSelected ? <appIcons.fillbacnk /> : <appIcons.banck />}
        <Text style={styles.backName}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.header}
        onPress={() => navigation.goBack()}
      >
        <Image source={appIcons.leftArrow} style={styles.backIcon} />
      </TouchableOpacity>

      <KeyboardAwareScrollView contentContainerStyle={styles.wrapper}>
        <View style={styles.headerTexts}>
          <Text style={styles.paymentDetail}>Link Your Bank</Text>
          <Text style={styles.secure}>Connect accounts to start tracking</Text>
        </View>

        <View style={styles.inputBox}>
          <appIcons.search />
          <TextInput
            placeholder="Search bank..."
            placeholderTextColor={colors.white}
            style={styles.inputStyle}
          />
        </View>

        <View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            numColumns={3}
            columnWrapperStyle={styles.columnWrapper}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        </View>
        <View style={styles.shieldAndText}>
          <appIcons.shield />
          <Text style={styles.backLevel}>
            Bank-level encryption • Read-only access
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("YoureAllSet")}
          activeOpacity={0.5}
        >
          <CommonLinearGradient style={styles.signInBtn}>
            <Text style={styles.connect}>Connect Selected Bank</Text>
          </CommonLinearGradient>
        </TouchableOpacity>

        <Text style={styles.skipForNow}>Skip for now</Text>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LinkYourBank;
