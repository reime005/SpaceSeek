# Space Seek - View Space Data

![CI status](https://github.com/reime005/spaceseek/workflows/CI/badge.svg)

!Work in Progress!

This is a rewrite of ['Space Viewer - Rocket Infos'](https://github.com/reime005/react-native-spaceviewer).

You can see lots of information about rocket space launches from all over the world! Want to know at which location it will launch? Or do you want to see its live stream? All the information are bundled in this app.

This includes rocket launches from SpaceX, NASA, ROSCOSMOS, ISRO, ULA and many more!

# Tech Stack & Credits

- 🚀 API via [The Space Devs](https://thespacedevs.com)
- ⚙️ Built with [Typescript](https://www.typescriptlang.org/)
- 🚦 Automatic deployment via [Fastlane](https://fastlane.tools)
- ⚡ More comprehensive animations via [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated)
- 🎨 Theming and component styling via [styled-components](https://styled-components.com/)
- 🖼️ SVG support via [react-native-svg](https://github.com/react-native-svg/react-native-svg)
- 📄 Exposing config variables via [react-native-config](https://github.com/luggit/react-native-config)
- 📱 Safe area view [react-native-safe-area-view](https://github.com/react-community/react-native-safe-area-view)
- 🖼️ Fast and performant image loading [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image)
- 🏳️ Typescript enabled internationalization (i18n) via [react-i18next](https://github.com/i18next/react-i18next)
- 🚦 Easy navigation via [react-navigation](https://reactnavigation.org)
- 🗿 Persistence via [async-storage](https://github.com/react-native-async-storage/async-storage)
- 🖥 Running lint & tests on staged git files (pre-commit) via [lint-staged](https://github.com/okonet/lint-staged) and [husky](https://github.com/typicode/husky)
- ♦️ Icons from [material](https://material.io/resources/icons/?style=outline) and [feathericons](https://feathericons.com)
- ℹ️ Styled components testing via [jest-styled-components](https://github.com/styled-components/jest-styled-components)
- ℹ️ Auto generated, typescript based axios client via [swagger-axios-codegen](https://github.com/Manweill/swagger-axios-codegen)
- ℹ️ Hermes enabled

# Build & Run

Android:

    yarn android

iOS:

    yarn ios
