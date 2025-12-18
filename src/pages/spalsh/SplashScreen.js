// import { StyleSheet, Text, View, Image, Dimensions  , Platform} from 'react-native';
// import { colors, commonStyles } from 'src/utils/styles';
// import { appIcons } from 'src/utils/assets';
// import React from 'react';

// const { height, width } = Dimensions.get('window');
// const WP = percentage => (width * percentage) / 100;

// const SplashScreen = () => {
//   return (
//     <View style={commonStyles.container}>
//       <View style={styles.container}>
//         <Image source={appIcons.splashlogo} style={styles.logo} />
//         <Text style={styles.text}>Meet your soulmate!</Text>
//       </View>
//       <Image
//         source={appIcons.splash}
//         style={[styles.splashImage, { width: WP(45), height: WP(70) }]}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//   },
//   logo: {
//     width: 125,
//     height: 86,
//     resizeMode: 'contain',
//     marginTop: height < 700 ? 80 : '40%',
//   },
//   text: {
//     ...commonStyles.text,
//     marginTop: 10,
//     fontSize: 18,
//   },
//   splashImage: {
//     resizeMode: 'contain',
//     marginBottom: 50,
//   },
// });

// export default SplashScreen;



import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})