import {
  createNavigationContainerRef,
  CommonActions,
  StackActions,
} from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export function navigate(routeName, params) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.navigate(routeName, params));
  }
}

export function replace(routeName, params) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(routeName, params));
  }
}

// New resetAndNavigate function
export function resetAndNavigate(routeName, params) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0, // Set the starting index
        routes: [{ name: routeName, params }], // Reset to this route
      })
    );
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.goBack());
  }
}
