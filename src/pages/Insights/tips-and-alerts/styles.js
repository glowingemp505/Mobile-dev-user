import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, fonts } from "src/utils/styles";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#27272A",
    paddingVertical: 15,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  tips: {
    color: "#FFF",
    fontSize: 24,
    fontFamily: fonts.bold,
    marginBottom:10
  },
  innerCard: {
    paddingVertical: 15,
    paddingHorizontal: 16,
    marginVertical: 9,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  box: {
    width: 35,
    height: 35,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },
  title: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.semiBold,
  },
  message: {
    fontSize: 13,
    fontFamily: fonts.regular,
    width:"80%"
  },
  innerWrapperCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconVIew : {
    position:"absolute",
    right:20
  }
});
export default styles;
