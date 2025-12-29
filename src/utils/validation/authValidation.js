import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Minimum 6 characters")
    .matches(/[a-z]/, "Must contain a lowercase letter")
    .matches(/[A-Z]/, "Must contain an uppercase letter")
    .matches(/[0-9]/, "Must contain a number")
    .matches(/[@$!%*?&#]/, "Must contain a special character"),
});

export const forgotPasswordValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const otpValidationSchema = Yup.object().shape({
  otp: Yup.string()
    .required("OTP is required")
    .length(6, "OTP must be 6 digits"),
});

export const resetPasswordValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(6, "Minimum 6 characters")
    .matches(/[a-z]/, "Must contain a lowercase letter")
    .matches(/[A-Z]/, "Must contain an uppercase letter")
    .matches(/[0-9]/, "Must contain a number")
    .matches(/[@$!%*?&#]/, "Must contain a special character"),

  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});

export const signupValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Minimum 6 characters")
    .matches(/[a-z]/, "Must contain a lowercase letter")
    .matches(/[A-Z]/, "Must contain an uppercase letter")
    .matches(/[0-9]/, "Must contain a number")
    .matches(/[@$!%*?&#]/, "Must contain a special character"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),

  terms: Yup.boolean().oneOf([true], "You must accept Terms & Conditions"),
});

export const editProfileValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Minimum 6 characters")
    .matches(/[a-z]/, "Must contain a lowercase letter")
    .matches(/[A-Z]/, "Must contain an uppercase letter")
    .matches(/[0-9]/, "Must contain a number")
    .matches(/[@$!%*?&#]/, "Must contain a special character"),
});
