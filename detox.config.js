module.exports = {
  testRunner: 'jest',
  runnerConfig: 'e2e/config.json',
  specs: 'e2e',
  behavior: {
    init: {
      exposeGlobals: true,
    },
  },
  apps: {
    'android.debug': {
      type: 'android.apk',
      binaryPath: './android/app/build/outputs/apk/debug/app-debug.apk',
    },
    'android.release': {
      type: 'android.apk',
      binaryPath: './android/app/build/outputs/apk/release/app-release.apk',
      build:
        'cd android ; ./gradlew clean assembleRelease assembleAndroidTest -DtestBuildType=release ; cd -',
    },
  },
  devices: {
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'emu',
      },
    },
  },
  configurations: {
    'ios.sim.release': {
      type: 'ios.simulator',
      build:
        'xcodebuild -workspace ios/SpaceSeek.xcworkspace -scheme SpaceSeek -configuration Release -sdk iphonesimulator -derivedDataPath ios/build/app -quiet',
      binaryPath:
        './ios/build/app/Build/Products/Release-iphonesimulator/SpaceSeek.app',
      device: {
        type: 'iPhone 11 Pro',
      },
      artifacts: {
        pathBuilder: './e2e/detox.pathbuilder.ios.js',
      },
    },
    'ios.sim.debug': {
      type: 'ios.simulator',
      build:
        'xcodebuild -workspace ios/SpaceSeek.xcworkspace -UseNewBuildSystem=NO -scheme SpaceSeek -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build -quiet',
      binaryPath:
        './ios/build/Build/Products/Debug-iphonesimulator/spaceseek.app',
      device: {
        type: 'iPhone 11 Pro',
      },
      artifacts: {
        pathBuilder: './e2e/detox.pathbuilder.ios.js',
      },
    },
    'android.emu.release': {
      device: 'emulator',
      app: 'android.release',
      artifacts: {
        pathBuilder: './e2e/detox.pathbuilder.android.js',
      },
    },
    'android.emu.debug': {
      device: 'emulator',
      app: 'android.debug',
      artifacts: {
        pathBuilder: './e2e/detox.pathbuilder.android.js',
      },
    },
  },
};
