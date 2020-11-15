module.exports = {
  testRunner: 'jest',
  runnerConfig: 'e2e/config.json',
  specs: 'e2e',
  behavior: {
    init: {
      exposeGlobals: true,
    },
  },
  configurations: {
    'ios.sim.release': {
      type: 'ios.simulator',
      build:
        'xcodebuild -workspace ios/SpaceSeek.xcworkspace -UseNewBuildSystem=NO -scheme SpaceSeek -configuration Release -sdk iphonesimulator -derivedDataPath ios/build -quiet',
      binaryPath:
        './ios/build/Build/Products/Release-iphonesimulator/spaceseek.app',
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
      type: 'android.emulator',
      build:
        'cd android ; ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release ; cd -',
      binaryPath: './android/app/build/outputs/apk/release/app-release.apk',
      device: {
        avdName: 'emu',
      },
      artifacts: {
        pathBuilder: './e2e/detox.pathbuilder.android.js',
      },
    },
  },
};
