import { Platform, Alert, Linking } from "react-native";
import { PERMISSIONS, request, check, RESULTS } from "react-native-permissions";
import { Image as CompressImage } from "react-native-compressor";
import moment from "moment";

export const useRequestPermissions = () => {
  const requestPermissions = async (selection) => {
    try {
      let permissionResult;
      if (Platform.OS === "android") {
        switch (selection) {
          case "camera":
            permissionResult = await check(PERMISSIONS.ANDROID.CAMERA);
            if (permissionResult !== RESULTS.GRANTED) {
              permissionResult = await request(PERMISSIONS.ANDROID.CAMERA);
            }
            break;
          case "photos":
            if (Platform.Version >= 33) {
              permissionResult = await check(
                PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
              );
              if (permissionResult !== RESULTS.GRANTED) {
                permissionResult = await request(
                  PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
                );
              }
            } else {
              permissionResult = await check(
                PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
              );
              if (permissionResult !== RESULTS.GRANTED) {
                permissionResult = await request(
                  PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
                );
              }
            }
            break;
          case "location":
            permissionResult = await check(
              PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
            );
            if (permissionResult !== RESULTS.GRANTED) {
              permissionResult = await request(
                PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
              );
            }
            break;
          default:
            return false;
        }
      } else if (Platform.OS === "ios") {
        switch (selection) {
          case "camera":
            permissionResult = await check(PERMISSIONS.IOS.CAMERA);
            if (permissionResult !== RESULTS.GRANTED) {
              permissionResult = await request(PERMISSIONS.IOS.CAMERA);
            }
            break;
          case "photos":
            permissionResult = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
            if (permissionResult !== RESULTS.GRANTED) {
              permissionResult = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
            }
            break;
          case "location":
            permissionResult = await check(
              PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
            );
            if (permissionResult !== RESULTS.GRANTED) {
              permissionResult = await request(
                PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
              );
            }
            break;
          default:
            return false;
        }
      }

      // ✅ Handle "Limited Access" for iOS Photos
      switch (permissionResult) {
        case RESULTS.DENIED:
          let permissionType =
            selection === "camera"
              ? "Your permission is required to access your camera."
              : "Your permission is required to access your photos folder.";
          Alert.alert("Permission Denied:", permissionType);
          return false;
        case RESULTS.GRANTED:
        case RESULTS.LIMITED: // ✅ Allow limited access to proceed
          return true;
        case RESULTS.BLOCKED:
          Alert.alert(
            "Permission Blocked:",
            selection === "camera"
              ? "Camera access is blocked. Please enable it in the settings."
              : "Photo library access is blocked. Please enable it in the settings.",
            [
              { text: "Cancel", style: "cancel" },
              {
                text: "Open settings",
                onPress: () => Linking.openSettings(),
              },
            ]
          );
          return false;
        default:
          return false;
      }
    } catch (error) {
      console.error("Error in permission request:", error);
      return false;
    }
  };

  return requestPermissions;
};

export const compressImage = async (image) => {
  try {
    const compressedImageUri = await CompressImage?.compress(image?.uri, {
      compressionMethod: "auto",
    });
    return {
      fileUrl: compressedImageUri,
      fileName: image?.fileName,
      fileType: image?.type,
    };
  } catch (error) {
    return image;
  }
};

export const MAX_SIZE_MB = 0.5;

export const forms_validation = true;

export const defaultError =
  "An unexpected error has occurred. Please try again later.";


export const formatTime = (timeStr) => {
        if (!timeStr) return "";
        const cleaned = timeStr.replace(/\s?(AM|PM)$/i, "");
        return moment(cleaned, "HH:mm").format("hh:mm A");
      };
  
      