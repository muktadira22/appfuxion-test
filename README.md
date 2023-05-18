# Appfuxion Test

## Requirement
1. NodeJS
2. Git
3. NPM/Yarn
4. Configured Android Environment

## Download APK
you can download the [latest-apk](https://drive.google.com/file/d/1mTmAc1Tsv7I5riWdYrcRAwPTq2EGyys2/view?usp=share_link)

## How To Start Development

1. Clone this project
```bash
$ git clone https://github.com/muktadira22/appfuxion-test
```

2. Install Dependencies
```bash
$ cd appfuxion-test
$ yarn
$ change config in src/config.js
```

3. Run Development
```bash
$ yarn start
$ yarn android (For running in android emulator or physical device)
$ yarn ios (For running in ios emulator or physical device)
```

4. Build .apk
```bash
$ cd appfuxion-test
$ cd android
$ gradlew assembleRelease
APK will be in output folder (android/app/build/outputs/release)
```
