import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Assets
import { appImages , appIcons } from './utils/assets';
import {colors, fonts, fontSizes} from './utils/styles';

const CustomToast = ({text1, type}) => {
  return (
    <View
      style={[
        styles.container,
        type === 'success' ? styles.success : styles.error,
      ]}>
      <View style={styles.iconContainer}>
        {type === 'success' ? (
          <appIcons.success width={20} height={20} />
        ) : (
          <appIcons.error width={20} height={20} />
        )}
      </View>
      <View style={styles.textContainer}>
        <Text  style={styles.text} numberOfLines={2}>
          {text1}
        </Text>
      </View>
    </View>
  );
};

const toastConfig = {
  success: ({text1}) => <CustomToast text1={text1} type="success" />,
  error: ({text1}) => <CustomToast text1={text1} type="error" />,
};

export {toastConfig};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 60,
    alignSelf: 'center',
    paddingHorizontal: 15,
    borderRadius: 20,
    marginVertical: 5,
    elevation: 4,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor: colors.white,
  },
  success: {
    borderWidth: 1,
    borderColor: colors.success,
    shadowColor: colors.success,
  },
  error: {
    borderWidth: 1,
    borderColor: colors.error,
    shadowColor: colors.error,
  },
  iconContainer: {
    padding: 3,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  text: {
    fontSize: fontSizes.xSmall,
    fontFamily: fonts.regular,
    color: colors.blackPrimary,
  },
});
