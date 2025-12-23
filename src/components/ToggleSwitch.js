import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { colors } from "src/utils/styles";

const ToggleSwitch = ({
  value,
  onPress,
  style,
  duration = 400,
  trackColors = { on: colors.black, off: colors.black },
  thumbColors = { on: colors.white, off: colors.semiTransparent },
}) => {
  const height = useSharedValue(0);
  const width = useSharedValue(0);

  const isShared = typeof value === "object" && "value" in value;

  // Create derived animated value
  const animatedValue = useDerivedValue(() =>
    withTiming(isShared ? value.value : value ? 1 : 0, { duration })
  );

  const trackAnimatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      animatedValue.value,
      [0, 1],
      [trackColors.off, trackColors.on]
    );

    return {
      backgroundColor,
      borderRadius: height.value / 2,
    };
  });

  const thumbAnimatedStyle = useAnimatedStyle(() => {
    const padding = 3;
    const translateX = interpolate(
      animatedValue.value,
      [0, 1],
      [padding, width.value - height.value]
    );

    const backgroundColor = interpolateColor(
      animatedValue.value,
      [0, 1],
      [thumbColors.off, thumbColors.on]
    );

    return {
      transform: [{ translateX }],
      backgroundColor,
      borderRadius: height.value / 2,
    };
  });

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="switch"
      accessibilityState={{ checked: animatedValue.value === 1 }}
    >
      <Animated.View
        onLayout={(e) => {
          height.value = e.nativeEvent.layout.height;
          width.value = e.nativeEvent.layout.width;
        }}
        style={[styles.track, style, trackAnimatedStyle]}
      >
        <Animated.View style={[styles.thumb, thumbAnimatedStyle]} />
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  track: {
    justifyContent: "center",
    width: 56,
    height: 30,
    paddingHorizontal: 2,
  },
  thumb: {
    height: 24,
    aspectRatio: 1,
  },
});

export default ToggleSwitch;
