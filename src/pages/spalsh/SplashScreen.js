import { StyleSheet, Text, View, Image, Dimensions  , Platform} from 'react-native';
import { colors, commonStyles } from 'src/utils/styles';
import { appIcons } from 'src/utils/assets';
import React from 'react';

const { height, width } = Dimensions.get('window');
const WP = percentage => (width * percentage) / 100;

const SplashScreen = () => {
  return (
    <View style={commonStyles.container}>
      <View style={styles.container}>
        <Image source={appIcons.splashlogo} style={styles.logo} />
        <Text style={styles.text}>Meet your soulmate!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    width: 270,
    height: 270,
    resizeMode: 'contain',
    marginTop: height < 700 ? 80 : '40%',
  },
  text: {
    ...commonStyles.header,
    marginTop: 10,
    // fontSize: 18,
  },

});

export default SplashScreen;



