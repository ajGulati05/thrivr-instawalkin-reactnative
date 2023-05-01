import {
  Sentry,
  SentrySeverity,
  SentryLog
} from 'react-native-sentry';

import codePush from "react-native-code-push";

export function setupSentry() {



codePush.getUpdateMetadata().then((update) => {
  if (update) {
    Sentry.setVersion(update.appVersion + '-codepush:' + update.label);
  }
});
Sentry.config("https://c37d7130c7ac4827885a3c615415f0fa:402ee850fe604c6186fe27a71992a292@sentry.io/300547", {
  deactivateStacktraceMerging: false, // default: true | Deactivates the stack trace merging feature
  logLevel: SentryLog.Debug, // default SentryLog.None | Possible values:  .None, .Error, .Debug, .Verbose
  disableNativeIntegration: false, // default: false | Deactivates the native integration and only uses raven-js
  handlePromiseRejection: true // default: true | Handle unhandled promise rejections
  // sampleRate: 0.5 // default: 1.0 | Only set this if you don't want to send every event so e.g.: 0.5 will send 50% of all events
  // These two options will only be considered if stack trace merging is active
  // Here you can add modules that should be ignored or exclude modules
  // that should no longer be ignored from stack trace merging
  // ignoreModulesExclude: ["I18nManager"], // default: [] | Exclude is always stronger than include
  // ignoreModulesInclude: ["RNSentry"], // default: [] | Include modules that should be ignored too
  // ---------------------------------
}).install();







// set the tag context
Sentry.setTagsContext({
  "environment": "production",
  "react": true
});



}



