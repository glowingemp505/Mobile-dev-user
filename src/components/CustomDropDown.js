import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const CustomDropDown = ({
  data = [],
  placeholder = "Select option",
  value,
  onSelect,
  leftIcon,
  rightIcon,
}) => {
  const [open, setOpen] = useState(false);

  const selectedLabel = data.find((item) => item.value === value)?.label || "";

  return (
    <View>
      {/* Dropdown Header */}
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.8}
        onPress={() => setOpen(!open)}
      >
        <View style={styles.leftRow}>
          {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}

          <Text
            style={[styles.text, !selectedLabel && styles.placeholderText]}
            numberOfLines={1}
          >
            {selectedLabel || placeholder}
          </Text>
        </View>
        {rightIcon && <View>{rightIcon}</View>}
      </TouchableOpacity>

      {open && (
        <View style={styles.dropdown}>
          <FlatList
            nestedScrollEnabled={true}
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  onSelect(item.value);
                  setOpen(false);
                }}
              >
                <Text style={styles.itemText}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default CustomDropDown;

const styles = StyleSheet.create({
  container: {
    height: 52,
    backgroundColor: "#27272A",
    borderRadius: 10,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  leftRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  leftIcon: {
    marginRight: 10,
  },

  text: {
    fontSize: 16,
    fontFamily: "System",
    color: "#FFFFFF",
  },

  placeholderText: {
    color: "#9CA3AF",
  },

  dropdown: {
    backgroundColor: "#27272A",
    borderRadius: 10,
    marginTop: 6,
    overflow: "hidden",
  },

  item: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: "#3F3F46",
  },

  itemText: {
    fontSize: 16,
    fontFamily: "System",
    color: "#FFFFFF",
  },
});
