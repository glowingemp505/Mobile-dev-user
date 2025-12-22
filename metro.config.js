const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    useWatchman : false,
    assetExts: [
      'png', 'jpg', 'jpeg', 'gif', 'bmp', 'webp', 
      'mp4', 'm4v', 'mov', 'mp3', 'aac', 
      'woff', 'woff2', 'ttf', 'otf',
      'glb', 'gltf', 
      'obj', 'dae', 'scn', 'zip'  // Added from your first config
    ],
    sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx', 'svg'],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);