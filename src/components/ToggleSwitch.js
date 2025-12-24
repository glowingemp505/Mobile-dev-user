import React, { useEffect, useRef } from "react";
import { Pressable, StyleSheet, Animated } from "react-native";
import { colors } from "src/utils/styles";

const ToggleSwitch = ({
  value,
  onPress,
  duration = 250,
  trackColors = { on: colors.black, off: colors.black },
  thumbColors = { on: colors.white, off: colors.semiTransparent },
}) => {
  const animValue = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animValue, {
      toValue: value ? 1 : 0,
      duration,
      useNativeDriver: false,
    }).start();
  }, [value]);

  const translateX = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [3, 26],
  });

  const trackColor = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [trackColors.off, trackColors.on],
  });

  const thumbColor = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [thumbColors.off, thumbColors.on],
  });

  return (
    <Pressable onPress={onPress} accessibilityRole="switch">
      <Animated.View style={[styles.track, { backgroundColor: trackColor }]}>
        <Animated.View
          style={[
            styles.thumb,
            {
              transform: [{ translateX }],
              backgroundColor: thumbColor,
            },
          ]}
        />
      </Animated.View>
    </Pressable>
  );
};

export default ToggleSwitch;
const styles = StyleSheet.create({
  track: {
    width: 56,
    height: 30,
    borderRadius: 15,
    paddingHorizontal: 3,
    justifyContent: "center",
  },
  thumb: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
});
