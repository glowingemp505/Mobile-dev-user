import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  StatusBar,
} from "react-native";
import React from "react";
import CommonLinearGradient from "./CommonLinearGradient";
import { colors, fonts } from "src/utils/styles";

const screenWidth = Dimensions.get("window").width;
const MODAL_WIDTH = screenWidth * 0.85;

const GeneralModal = ({
  modalSuccess,
  modalError,
  Set_Modal_Visibilty,
  imageSource,
  title,
  description,
  yesBtnTitle,
  handleYesPress,
  noBtnTitle,
  handleNoPress,
  select,
  titleStyle,
  fontSizes: customFontSizes,
}) => {
  const visible = modalSuccess === true || modalError === true;

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={() => Set_Modal_Visibilty(false)}
    >
      <Pressable
        style={styles.backdrop}
        onPress={() => Set_Modal_Visibilty(false)}
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior="padding"
          keyboardVerticalOffset={10}
        >
          <View style={styles.centeredView}>
            <Pressable style={styles.modalView}>
              <ScrollView
                contentContainerStyle={styles.modalContent}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
              >
                {modalSuccess && (
                  <>
                    <Image source={imageSource} style={styles.modalIcon} />

                    <Text
                      allowFontScaling={false}
                      style={[
                        styles.modalTitleText,
                        titleStyle,
                        customFontSizes && { fontSize: customFontSizes },
                      ]}
                    >
                      {title}
                    </Text>

                    <Text
                      allowFontScaling={false}
                      style={[
                        styles.modalDescriptionText,
                        select && { width: 250 },
                      ]}
                    >
                      {description}
                    </Text>

                    <View style={styles.buttonContainer}>
                      {yesBtnTitle && (
                        <TouchableOpacity
                          style={{
                            width: "100%",
                            alignSelf: "center",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          onPress={handleYesPress}
                        >
                          <CommonLinearGradient style={styles.yesButton}>
                              
                            <Text style={styles.yesButtonTitle}>
                              {yesBtnTitle}
                            </Text>
                          </CommonLinearGradient>
                        </TouchableOpacity>
                      )}

                      {noBtnTitle && (
                        <TouchableOpacity
                          onPress={handleNoPress}
                          style={styles.noButtonStyle}
                        >
                          <Text style={styles.noBtnTitle}>{noBtnTitle}</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </>
                )}
              </ScrollView>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </Pressable>
    </Modal>
  );
};

export default GeneralModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalView: {
    width: MODAL_WIDTH,
    borderRadius: 20,
    backgroundColor: "black",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingVertical: 15,
    alignItems: "center",
  },

  modalContent: {
    alignItems: "center",
    paddingHorizontal: 16,
    width: MODAL_WIDTH,
  },

  modalIcon: {
    width: 147,
    height: 111,
    resizeMode: "contain",
    marginVertical: 10,
  },

  modalTitleText: {
    fontFamily: fonts.bold,
    color: colors.white,
    fontSize: 18,
    marginVertical: 7,
  },

  modalDescriptionText: {
    fontFamily: fonts.regular,
    fontSize: 15,
    color: colors.gray,
    textAlign: "center",
    marginVertical: 3,
    width: "95%",
    lineHeight: 28,
  },

  buttonContainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: 10,
    gap: 10,
  },

  yesButton: {
    width: "95%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  yesButtonTitle: {
    color: colors.white,
    fontFamily: fonts.semiBold,
    fontSize: 16,
  },

  noButtonStyle: {
    width: "95%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  noBtnTitle: {
    color: colors.btnDissmiss,
    fontFamily: fonts.regular,
    fontSize: 15,
  },
});
