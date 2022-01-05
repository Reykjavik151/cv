import { IProject, ProgrammingTechologyName, ProjectResponsibility } from "../../models/IProject";

export const PROJECTS_PREDEFINED_DATA: IProject[] = [
  {
    name: "OnFire Messenger",
    teamAmount: "3",
    mainFeatures: [
      "Amazing smooth animations",
      "Real-time chat based on WebSockets architecture",
      "Sync calendar with the native OS calendar events",
      "Tabs & Drawer navigation",
      "Voice & Video chat",
      "Sharing media items",
      "Firebase Reactive Socket Pagination",
    ],
    responsibilities: [
      ProjectResponsibility.Development,
      ProjectResponsibility.Support,
      ProjectResponsibility.Deploy,
      ProjectResponsibility.CustomerCommunication,
    ],
    technologies: [
      ProgrammingTechologyName.ReactNative,
      ProgrammingTechologyName.Redux,
      ProgrammingTechologyName.ReduxSaga,
      ProgrammingTechologyName.ReduxPersist,
      ProgrammingTechologyName.ReactNavigation,
      ProgrammingTechologyName.FirebaseAuth,
      ProgrammingTechologyName.WebSockets,
      ProgrammingTechologyName.Fastlane,
    ],
    appLink: "https://apps.apple.com/ca/app/onfire-messenger/id1481054417",
  },

  {
    name: "GoHeja",
    teamAmount: "3",
    mainFeatures: ["Animated calendar", "Dynamic map", "Real-time chat", "Split screen", "Charts"],
    responsibilities: [
      ProjectResponsibility.Architecture,
      ProjectResponsibility.Development,
      ProjectResponsibility.Support,
      ProjectResponsibility.Deploy,
      ProjectResponsibility.CustomerCommunication,
    ],
    technologies: [
      ProgrammingTechologyName.ReactNative,
      ProgrammingTechologyName.Redux,
      ProgrammingTechologyName.ReduxSaga,
      ProgrammingTechologyName.ReduxPersist,
      ProgrammingTechologyName.ReactNavigation,
      ProgrammingTechologyName.Reactotron,
      ProgrammingTechologyName.Axios,
      ProgrammingTechologyName.Mapbox,
      ProgrammingTechologyName.ChartsWrapper,
      ProgrammingTechologyName.I18n,
      ProgrammingTechologyName.WebSockets,
      ProgrammingTechologyName.Fastlane,
    ],
    appLink: "https://apps.apple.com/us/app/goheja/id1488438214?l=uk",
  },

  {
    name: "Truevo Business",
    teamAmount: "4",
    mainFeatures: [
      "Secure screen with TouchID / FaceID",
      "A lot of interactable elements",
      "Strong banking encryption",
    ],
    responsibilities: [
      ProjectResponsibility.Development,
      ProjectResponsibility.Support,
      ProjectResponsibility.Mentoring,
      ProjectResponsibility.CodeReview,
      ProjectResponsibility.CustomerCommunication,
    ],
    technologies: [
      ProgrammingTechologyName.ReactNative,
      ProgrammingTechologyName.TypeScript,
      ProgrammingTechologyName.Redux,
      ProgrammingTechologyName.ReduxSaga,
      ProgrammingTechologyName.ReduxPersist,
      ProgrammingTechologyName.ReactNavigation,
      ProgrammingTechologyName.Reactotron,
      ProgrammingTechologyName.Axios,
      ProgrammingTechologyName.I18n,
      ProgrammingTechologyName.FormikYup,
      ProgrammingTechologyName.Fastlane,
    ],
    appLink: "https://apps.apple.com/za/app/truevo-business/id1511523105",
  },

  {
    name: "Jesus Experience",
    teamAmount: "1",
    mainFeatures: ["Apple TV & iPad support", "Videos with bookmarks", "Amazing carousels"],
    responsibilities: [
      ProjectResponsibility.Development,
      ProjectResponsibility.Support,
      ProjectResponsibility.TestsCoverage,
      ProjectResponsibility.Deploy,
      ProjectResponsibility.CustomerCommunication,
    ],
    technologies: [
      ProgrammingTechologyName.ReactNative,
      ProgrammingTechologyName.Redux,
      ProgrammingTechologyName.ReduxSaga,
      ProgrammingTechologyName.ReduxPersist,
      ProgrammingTechologyName.ReactNavigation,
      ProgrammingTechologyName.RNDebugger,
      ProgrammingTechologyName.Axios,
    ],
    appLink: "https://apps.apple.com/us/app/experience-jesus/id1271102213",
  },

  {
    name: "MIT: CredWallet",
    teamAmount: "1",
    mainFeatures: [
      "Full local app with strong encryption",
      "Amazing education credentials by QRCodes scanning",
      "Backups",
    ],
    responsibilities: [
      ProjectResponsibility.Architecture,
      ProjectResponsibility.Development,
      ProjectResponsibility.Support,
      ProjectResponsibility.Documentation,
      ProjectResponsibility.CustomerCommunication,
    ],
    technologies: [
      ProgrammingTechologyName.ReactNative,
      ProgrammingTechologyName.TypeScript,
      ProgrammingTechologyName.Redux,
      ProgrammingTechologyName.ReduxSaga,
      ProgrammingTechologyName.ReduxPersist,
      ProgrammingTechologyName.ReactNavigation,
      ProgrammingTechologyName.Reactotron,
      ProgrammingTechologyName.Axios,
      ProgrammingTechologyName.I18n,
      ProgrammingTechologyName.FormikYup,
    ],
    appLink: "https://github.com/digitalcredentials/cred-wallet",
  },

  {
    name: "Keyri",
    teamAmount: "3",
    mainFeatures: [
      "YCombinator startup",
      "Strong authorization encryption",
      "Deeplinking",
      "Secure screen with FaceID/TouchID",
      "Smooth animations",
    ],
    responsibilities: [ProjectResponsibility.Development, ProjectResponsibility.Support],
    technologies: [
      ProgrammingTechologyName.ReactNative,
      ProgrammingTechologyName.TypeScript,
      ProgrammingTechologyName.Redux,
      ProgrammingTechologyName.ReduxSaga,
      ProgrammingTechologyName.ReduxPersist,
      ProgrammingTechologyName.ReactNavigation,
      ProgrammingTechologyName.Reactotron,
      ProgrammingTechologyName.Fastlane,
    ],
    appLink: "https://apps.apple.com/ua/app/keyri/id1514738138",
  },

  {
    // BeatTheMarket
    name: "NDA",
    teamAmount: "2",
    mainFeatures: [
      "Real-time auction",
      "Live chart",
      "Shares statistics",
      "GraphQL communication",
      "Social media login",
    ],
    responsibilities: [
      ProjectResponsibility.Architecture,
      ProjectResponsibility.Development,
      ProjectResponsibility.Deploy,
      ProjectResponsibility.CustomerCommunication,
    ],
    technologies: [
      ProgrammingTechologyName.ReactNative,
      ProgrammingTechologyName.ReactNativeWeb,
      ProgrammingTechologyName.TypeScript,
      ProgrammingTechologyName.Context,
      ProgrammingTechologyName.GraphQL,
      ProgrammingTechologyName.ReactNavigation,
      ProgrammingTechologyName.Reactotron,
      ProgrammingTechologyName.FirebaseAuth,
      ProgrammingTechologyName.StripeIAP,
      ProgrammingTechologyName.VictoryCharts,
      ProgrammingTechologyName.Fastlane,
    ],
  },

  {
    name: "Loop Flow Messenger",
    teamAmount: "3",
    mainFeatures: [
      "Monorepo Architecture",
      "Shared module across all three apps",
      "Real-time chat",
      "Deeplinking",
      "Optimised lists with boosted speed for iOS & Android",
      "Firebase Reative Socket Pagination",
      "Social media login",
    ],
    responsibilities: [
      ProjectResponsibility.Architecture,
      ProjectResponsibility.Development,
      ProjectResponsibility.Support,
      ProjectResponsibility.Documentation,
      ProjectResponsibility.Deploy,
      ProjectResponsibility.TeamLeading,
      ProjectResponsibility.CodeReview,
      ProjectResponsibility.Mentoring,
      ProjectResponsibility.CustomerCommunication,
    ],
    technologies: [
      ProgrammingTechologyName.React,
      ProgrammingTechologyName.ReactExtension,
      ProgrammingTechologyName.ReactNative,
      ProgrammingTechologyName.TypeScript,
      ProgrammingTechologyName.Lerna,
      ProgrammingTechologyName.Redux,
      ProgrammingTechologyName.ReduxSaga,
      ProgrammingTechologyName.ReduxPersist,
      ProgrammingTechologyName.ReactNavigation,
      ProgrammingTechologyName.Reactotron,
      ProgrammingTechologyName.Axios,
      ProgrammingTechologyName.FirebaseAuth,
      ProgrammingTechologyName.FormikYup,
      ProgrammingTechologyName.I18n,
      ProgrammingTechologyName.WebSockets,
      ProgrammingTechologyName.Fastlane,
    ],
    appLink: "https://apps.apple.com/ie/app/loop-flow-messenger/id1541000589",
  },

  {
    // MasterHealth
    name: "NDA",
    teamAmount: "11",
    mainFeatures: [
      "Amazing habit-matching for every user by Sign Up process",
      "Comprehensive Amplitude analytic",
      "Awesome animations",
      "Events Calendar",
    ],
    responsibilities: [
      ProjectResponsibility.Development,
      ProjectResponsibility.Support,
      ProjectResponsibility.Documentation,
      ProjectResponsibility.CustomerCommunication,
    ],
    technologies: [
      ProgrammingTechologyName.ReactNative,
      ProgrammingTechologyName.TypeScript,
      ProgrammingTechologyName.Redux,
      ProgrammingTechologyName.ReduxSaga,
      ProgrammingTechologyName.ReduxPersist,
      ProgrammingTechologyName.ReactNavigation,
      ProgrammingTechologyName.AmplitudeAnalytic,
      ProgrammingTechologyName.FirebaseAuth,
      ProgrammingTechologyName.I18n,
      ProgrammingTechologyName.Jest,
      ProgrammingTechologyName.Flipper,
      ProgrammingTechologyName.Bitrise,
    ],
  },

  {
    name: "Klarstein",
    teamAmount: "8",
    mainFeatures: [
      "Comprehensive smart home app",
      "Native modules for iOS and Android apps",
      "Own native library",
      "Well-encrypted API calls",
      "Invites through deeplinking",
      "Social media login",
    ],
    responsibilities: [
      ProjectResponsibility.Development,
      ProjectResponsibility.NativeModules,
      ProjectResponsibility.Support,
      ProjectResponsibility.Documentation,
      ProjectResponsibility.TestsCoverage,
      ProjectResponsibility.Deploy,
      ProjectResponsibility.CodeReview,
      ProjectResponsibility.Mentoring,
      ProjectResponsibility.CustomerCommunication,
    ],
    technologies: [
      ProgrammingTechologyName.ReactNative,
      ProgrammingTechologyName.TypeScript,
      ProgrammingTechologyName.ObjectiveC,
      ProgrammingTechologyName.Java,
      ProgrammingTechologyName.Redux,
      ProgrammingTechologyName.ReduxPersist,
      ProgrammingTechologyName.ReduxSaga,
      ProgrammingTechologyName.ReactNavigation,
      ProgrammingTechologyName.Reactotron,
      ProgrammingTechologyName.Axios,
      ProgrammingTechologyName.WebSockets,
      ProgrammingTechologyName.FirebaseAnalytic,
      ProgrammingTechologyName.FirebaseAuth,
      ProgrammingTechologyName.I18n,
      ProgrammingTechologyName.CircleCI,
    ],
    appLink: "https://apps.apple.com/us/app/klarstein/id1479571307",
  },

  {
    // Sarafun
    name: "NDA",
    teamAmount: "4",
    mainFeatures: [
      "Invites through deeplinking",
      "Social media login",
      "Awesome smooth animations",
      "Optimised lists for both iOS and Android",
    ],
    responsibilities: [
      ProjectResponsibility.Architecture,
      ProjectResponsibility.CodeReview,
      ProjectResponsibility.CustomerCommunication,
      ProjectResponsibility.Deploy,
      ProjectResponsibility.Documentation,
      ProjectResponsibility.Mentoring,
      ProjectResponsibility.TeamLeading,
    ],
    technologies: [
      ProgrammingTechologyName.ReactNative,
      ProgrammingTechologyName.TypeScript,
      ProgrammingTechologyName.ReactNavigation,
      ProgrammingTechologyName.Redux,
      ProgrammingTechologyName.ReduxPersist,
      ProgrammingTechologyName.ReduxSaga,
      ProgrammingTechologyName.Reactotron,
      ProgrammingTechologyName.Axios,
      ProgrammingTechologyName.FormikYup,
      ProgrammingTechologyName.I18n,
      ProgrammingTechologyName.Fastlane,
    ],
  },
];
