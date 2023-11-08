import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import { useFonts, Creepster_400Regular } from '@expo-google-fonts/creepster';
import React, { useRef, useEffect } from 'react';
import { Video } from 'expo-av';
import { useFocusEffect } from '@react-navigation/native';

export default function Home() {
  const videoRef = React.useRef(null);

  useFocusEffect(
    React.useCallback(() => {
      if (videoRef.current) {
        videoRef.current.playAsync();
      }
      return () => {
        if (videoRef.current) {
          videoRef.current.pauseAsync();
        }
      };
    }, [])
  );

  let [fontsLoaded] = useFonts({
    Creepster_400Regular
  });

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/Home/background.gif')}
        style={styles.backgroundImage}
      />

      <View style={styles.containerTitulo}>
        <Image
          source={require('../assets/Home/blood.png')}
          style={styles.sangue}
        />
        <View style={styles.containerTexto}>
          <Text style={styles.titulo}>Horror TV Shows and Movies{'\n'}from Streaming Services</Text>
        </View>
      </View>

      <View style={styles.containerMesa}>
        <Image
          source={require('../assets/Home/table1.png')}
          style={styles.mesa}
        />
      </View>

      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          source={require('../assets/Home/45grave.mp4')}
          style={styles.video}
          rate={1}
          shouldPlay={true}
          isLooping={true}
          volume={10}
          muted={false}
          resizeMode="cover"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  containerMesa: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
    marginBottom: -500,
  },
  mesa: {
    width: '110%',
    height: '90%',
  },
  containerTitulo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -70,
    height: 50
  },
  titulo: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    alignItems: 'center',
    zIndex: 2,
    fontFamily: 'Creepster_400Regular',
  },
  sangue: {
    width: '130%',
    height: '100%',
  },
  containerTexto: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    borderRadius: 90,
    height: 90,
    width: 350,
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    padding: 20,
    zIndex: 1,
  },
  video: {
    width: '47%',
    height: '27%',
    marginLeft: -10,
    marginBottom: -123,
    aspectRatio: 16 / 9,
  },
});
