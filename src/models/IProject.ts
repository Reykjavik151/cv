export enum ProgrammingTechologyName {
  // Common
  React = "React",
  ReactExtension = "React Web Extension",
  ReactNative = "React Native",
  ReactNativeWeb = "React Native Web",
  TypeScript = "TypeScript",
  ObjectiveC = "Objective-C",
  Java = "Java",

  // State management
  Redux = "Redux",
  Context = "Context Store",

  // Asynchronius calls handling
  ReduxSaga = "Redux Saga",

  // Navigation
  ReactNavigation = "React Navigation",

  // Debugging
  Reactotron = "Reactotron",
  Flipper = "Flipper",

  // Api
  Axios = "Axios",
  GraphQL = "GraphQL",
  FirebaseAuth = "Firebase Auth",
  WebSockets = "Web Sockets",

  // Analytic
  MixpanelAnalytic = "Mixpanel Analytic",
  AmplitudeAnalytic = "Amplitude Analytic",
  FirebaseAnalytic = "Firebase Analytic",

  // In-app purchases
  StripeIAP = "Stripe IAP",

  // CI/CD
  Fastlane = "Fastlane",
  Bitrise = "Bitrise",
  CircleCI = "CircleCI",

  // Charts
  ChartsWrapper = "Charts Wrapper",
  VictoryCharts = "Victory Charts",

  // Different
  ReduxPersist = "Redux Persist",
  FormikYup = "Formik+Yup",
  Mapbox = "Mapbox",
  I18n = "I18n Localization",
  Lerna = "Lerna",
}

export enum ProjectResponsibility {
  Architecture = "Architecture Setup",
  Development = "Full-cycle development",
  Support = "Support after MVP phase",
  Documentation = "Code documentation",
  NativeModules = "Support Native Modules for both platforms",
  CustomerCommunication = "Daily communication with customer",
  Mentoring = "Mentoring",
  TeamLeading = "Team leading",
  CodeReview = "Code review",
  Deploy = "Deploying to the stores",
}

export interface IProject {
  name: string;
  teamAmount: string;
  technologies: ProgrammingTechologyName[];
  mainFeatures: string[];
  responsibilities: ProjectResponsibility[];
  appLink?: string;
}
