// import { Image, StyleSheet, Platform } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import { useScale } from '@/hooks/useScale';

// export default function HomeScreen() {
//   const styles = useHomeScreenStyles();
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }
//     >
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit{' '}
//           <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{' '}
//           to see changes. Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           Tap the Explore tab to learn more about what's included in this
//           starter app.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           When you're ready, run{' '}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>{' '}
//           to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{' '}
//           directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const useHomeScreenStyles = function () {
//   const scale = useScale();
//   return StyleSheet.create({
//     titleContainer: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       gap: 8 * scale,
//     },
//     stepContainer: {
//       gap: 8 * scale,
//       marginBottom: 8 * scale,
//     },
//     reactLogo: {
//       height: 178 * scale,
//       width: 290 * scale,
//       bottom: 0,
//       left: 0,
//       position: 'absolute',
//     },
//   });
// };
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TVFocusGuideView,
  ScrollView,
} from 'react-native';
import {
  TopicSelector,
  Banner,
  ApiDemo,
  scaleFontSize,
  scaleWidth,
  scaleHeight,
} from '@hellosharedworkspace/shared';

export default function App() {
  const styles = getStyles();

  return (
    <ImageBackground
      source={require('@/assets/images/background.png')}
      style={styles.background}>
      <ScrollView>
        <TVFocusGuideView focusable={false}>
          <Banner
            title="Welcome to Stock RN"
            subtitle="This component works on Android IOS & Vega"
            backgroundColor="#bc520bff"
            onPress={() => console.log('Banner pressed')}
          />
        </TVFocusGuideView>
        <TopicSelector />
        <ApiDemo />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            💡 Edit /packages/expotv/src/App.tsx to change this screen and then come back to see your
            edits
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const getStyles = () =>
  StyleSheet.create({
    background: {
      color: 'white',
      flex: 1,
      flexDirection: 'column',
    },
    container: {
      flex: 6,
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerContainer: {
      marginLeft: scaleWidth(200),
    },
    headerText: {
      color: 'white',
      fontSize: scaleFontSize(80),
      marginBottom: scaleHeight(10),
    },
    subHeaderText: {
      color: 'white',
      fontSize: scaleFontSize(40),
    },
    links: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
      height: scaleHeight(600),
    },
    image: {
      flex: 1,
      paddingLeft: scaleWidth(150),
    },
    textContainer: {
      justifyContent: 'center',
      flex: 1,
      marginLeft: scaleWidth(190),
    },
    text: {
      color: 'white',
      fontSize: scaleFontSize(40),
    },
  });
