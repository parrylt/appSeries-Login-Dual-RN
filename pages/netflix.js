import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useFonts, Creepster_400Regular } from '@expo-google-fonts/creepster';

export default function Netflix() {

  let [fontsLoaded] = useFonts({
    Creepster_400Regular
  });

  return (
    <View style={styles.container}>
      <Text style={styles.tituloTerror}>Top 7 Horror Netflix Features</Text>

      <ScrollView>
        <View>
          <Image
            source={require('../assets/Netflix/panico.jpg')}
            style={styles.imagePanico}
          />
          <Text style={styles.tituloPanico}>Scream </Text>
        </View>
        <View>
          <Text style={styles.textoPanico}>
            {'   '} A masked killer terrifies the teenagers of a small town, recreating scenes from horror movies while a group of young people tries to uncover the killer's identity before it's too late.
          </Text>
        </View>

        <View>
          <Image
            source={require('../assets/Netflix/massacre.jpg')}
            style={styles.imageMassacre}
          />
          <Text style={styles.tituloMassacre}>
            The Texas Chainsaw Massacre
          </Text>
        </View>
        <View>
          <Text style={styles.textoMassacre}>
            {'   '}The Texas Chainsaw Massacre is a classic horror film that follows a group of friends who, while on a road trip, encounter a family of deranged, cannibalistic killers in rural Texas. The film portrays their desperate struggle for survival as they become hunted by a chainsaw-wielding maniac named Leatherface.
          </Text>
        </View>

        <View>
          <Image
            source={require('../assets/Netflix/lugar.jpg')}
            style={styles.imageLugar}
          />
          <Text style={styles.tituloLugar}>A Quiet Place</Text>
        </View>
        <View>
          <Text style={styles.textoLugar}>
            {'   '}A Quiet Place is a thriller that unfolds in a post-apocalyptic world overrun by alien creatures with hypersensitive hearing. A family, led by a couple played by Emily Blunt and John Krasinski, must live in complete silence to avoid detection by these deadly creatures. They rely on sign language and other silent means of communication as they fight to survive and protect their children in a world where sound can mean certain death.
          </Text>
        </View>

        <View>
          <Image
            source={require('../assets/Netflix/stranger.jpg')}
            style={styles.imageStranger}
          />
          <Text style={styles.tituloStranger}>
            Stranger Things
          </Text>
        </View>
        <View>
          <Text style={styles.textoStranger}>
            {'   '} The first season of Stranger Things is set in the 1980s in the fictional town of Hawkins, Indiana. It follows the disappearance of a young boy named Will Byers and the mysterious appearance of a girl with supernatural abilities, Eleven. As Will's friends and family search for him, they uncover a series of government experiments, a parallel dimension known as the Upside Down, and a menacing creature known as the Demogorgon. The group of kids, along with Eleven, must face otherworldly threats to rescue Will and uncover the truth about the strange occurrences in their town.
          </Text>
        </View>

        <View>
          <Image
            source={require('../assets/Netflix/dead.jpg')}
            style={styles.imageDead}
          />
          <Text style={styles.tituloDead}>The Walking Dead</Text>
        </View>
        <View>
          <Text style={styles.textoDead}>
            {'   '}
The Walking Dead is a post-apocalyptic television series set in a world overrun by zombies, or "walkers." The show follows a group of survivors, led by former sheriff's deputy Rick Grimes, as they struggle to stay alive and find safety in a world where the dead can rise at any moment. The survivors face not only the threat of the undead but also the dangers posed by other humans in this new, lawless society. The series explores themes of survival, morality, and the human condition as the characters navigate this grim and unforgiving landscape.
          </Text>
        </View>

        <View>
          <Image
            source={require('../assets/Netflix/maldicao.jpg')}
            style={styles.imageMaldicao}
          />
          <Text style={styles.tituloMaldicao}>
            The Haunting of Hill House
          </Text>
        </View>
        <View>
          <Text style={styles.textoMaldicao}>
            {'   '}
The Haunting of Hill House is a horror series that revolves around the Crain family and their experiences in Hill House, a mysterious, haunted mansion. The story unfolds in two timelines, one in the past when they lived in the house and one in the present as adults, dealing with the traumatic events of their childhood. The series explores the supernatural occurrences in Hill House and the lasting psychological effects they have on the family members. It delves into themes of family, trauma, and the blurred lines between the real and the supernatural.
          </Text>
        </View>

        <View>
          <Image
            source={require('../assets/Netflix/story.jpg')}
            style={styles.imageStory}
          />
          <Text style={styles.tituloStory}>
          American Horror Story
          </Text>
        </View>
        <View>
          <Text style={styles.textoStory}>
            {'   '}
American Horror Story is an anthology television series created by Ryan Murphy and Brad Falchuk. Each season features a new and self-contained storyline with a different set of characters, although many of the cast members return in different roles across various seasons. The series explores a wide range of horror themes and settings, including haunted houses, asylums, covens of witches, freak shows, and more. It delves into the dark, macabre, and often supernatural elements of horror, while also addressing complex social and psychological issues. With each season's unique narrative, "American Horror Story" provides a fresh and chilling experience for viewers.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#900',
  },

  tituloTerror: {
    color: '#000',
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    margin: 15,
    fontFamily: 'Creepster_400Regular',
  },

  imagePanico: {
    width: 400,
    height: 600,
  },

  tituloPanico: {
    color: '#fff',
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -120,
    fontFamily: 'Creepster_400Regular',
  },

  textoPanico: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'justify',
    marginTop: 150,
    marginBottom: 50,
    margin: 35,
  },

  imageMassacre: {
    width: 400,
    height: 600,
    marginTop: 30,
  },

  tituloMassacre: {
    color: '#fff',
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -150,
    fontFamily: 'Creepster_400Regular',
  },

  textoMassacre: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'justify',
    marginTop: 140,
    marginBottom: 50,
    margin: 35,
  },

  imageLugar: {
    width: 400,
    height: 600,
    marginTop: 30,
  },

  tituloLugar: {
    color: '#fff',
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -160,
    fontFamily: 'Creepster_400Regular',
  },

  textoLugar: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'justify',
    marginTop: 140,
    marginBottom: 50,
    margin: 35,
  },

  imageStranger: {
    width: 400,
    height: 600,
    marginTop: 30,
  },

  tituloStranger: {
    color: '#fff',
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -120,
    fontFamily: 'Creepster_400Regular',
  },

  textoStranger: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'justify',
    marginTop: 140,
    marginBottom: 50,
    margin: 35,
  },

  imageDead: {
    width: 400,
    height: 600,
    marginTop: 30,
  },

  tituloDead: {
    color: '#fff',
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -120,
    fontFamily: 'Creepster_400Regular',
  },

  textoDead: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'justify',
    marginTop: 140,
    marginBottom: 50,
    margin: 35,
  },

  imageMaldicao: {
    width: 400,
    height: 600,
    marginTop: 30,
  },

  tituloMaldicao: {
    color: '#fff',
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -160,
    fontFamily: 'Creepster_400Regular',
  },

  textoMaldicao: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'justify',
    marginTop: 140,
    marginBottom: 50,
    margin: 35,
  },

  imageStory: {
    width: 400,
    height: 600,
    marginTop: 30,
  },

  tituloStory: {
    color: '#fff',
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -160,
    fontFamily: 'Creepster_400Regular',
  },

  textoStory: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'justify',
    marginTop: 140,
    marginBottom: 50,
    margin: 35,
  },
});
