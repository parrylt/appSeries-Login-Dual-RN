import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { useFonts, Cinzel_400Regular } from '@expo-google-fonts/cinzel';


export default function Amazon() {

  let [fontsLoaded] = useFonts({
    Cinzel_400Regular
  });

  return (
    <View style={styles.container}>
      <Text style={styles.tituloTerror}>Top 7 Horror Amazon Features</Text>

      <ScrollView>
        <View>
          <Image
            source={require('../assets/Amazon/exorcista.jpg')}
            style={styles.imageExorcista}
          />
          <Text style={styles.tituloExorcista}>The Exorcist (1973) </Text>
        </View>
        <View>
          <Text style={styles.textoExorcista}>
            {'   '}The Exorcist is a landmark horror film based on the novel by William Peter Blatty. The story revolves around a mother seeking help from two priests to save her daughter, who appears to be possessed by a malevolent entity. It's widely regarded as one of the scariest and most influential horror films of all time.
          </Text>
        </View>

        <View>
          <Image
            source={require('../assets/Amazon/hannibal.jpg')}
            style={styles.imageHannibal}
          />
          <Text style={styles.tituloHannibal}>
            Hannibal
          </Text>
        </View>
        <View>
          <Text style={styles.textoHannibal}>
            {'   '}Hannibal is a psychological thriller directed by Ridley Scott. It's the sequel to "The Silence of the Lambs" and features Anthony Hopkins reprising his role as Dr. Hannibal Lecter. The film follows FBI agent Clarice Starling, played by Julianne Moore, as she tracks down the brilliant but psychotic serial killer.
          </Text>
        </View>

        <View>
          <Image
            source={require('../assets/Amazon/psicopata.jpg')}
            style={styles.imagePsicopata}
          />
          <Text style={styles.tituloPsicopata}>American Psycho</Text>
        </View>
        <View>
          <Text style={styles.textoPsicopata}>
            {'   '} American Psycho is a darkly satirical thriller directed by Mary Harron, based on Bret Easton Ellis's novel. The film stars Christian Bale as Patrick Bateman, a wealthy New York investment banker who hides his psychopathic, violent tendencies beneath a veneer of charm and sophistication. It explores the depths of his depravity and the veneer of the yuppie culture of the 1980s.
          </Text>
        </View>

        <View>
          <Image
            source={require('../assets/Amazon/evilDead2.jpg')}
            style={styles.imageEvilDead}
          />
          <Text style={styles.tituloEvilDead}>
            Evil Dead 2
          </Text>
        </View>
        <View>
          <Text style={styles.textoEvilDead}>
            {'   '} Evil Dead 2 is a cult classic horror-comedy sequel. The film continues the story of Ash Williams, played by Bruce Campbell, who must battle demonic forces in a remote cabin in the woods. The movie is known for its blend of horror and slapstick humor.
          </Text>
        </View>

        <View>
          <Image
            source={require('../assets/Amazon/misery.jpg')}
            style={styles.imageMisery}
          />
          <Text style={styles.tituloMisery}>Misery</Text>
        </View>
        <View>
          <Text style={styles.textoMisery}>
            {'   '} Directed by Rob Reiner, Misery is a psychological thriller based on the novel by Stephen King. The film stars James Caan as a novelist who becomes the captive of a crazed fan portrayed by Kathy Bates. Her obsession with his work leads to a series of terrifying and disturbing events.
          </Text>
        </View>

        <View>
          <Image
            source={require('../assets/Amazon/carrie.jpg')}
            style={styles.imageCarrie}
          />
          <Text style={styles.tituloCarrie}>
            Carrie
          </Text>
        </View>
        <View>
          <Text style={styles.textoCarrie}>
            {'   '} Carrie, directed by Brian De Palma, is a classic horror film based on Stephen King's novel. Sissy Spacek plays the titular character, a shy and socially outcast high school girl with telekinetic powers. After a cruel prank at prom, she unleashes her destructive abilities in a violent rampage.
          </Text>
        </View>

        <View>
          <Image
            source={require('../assets/Amazon/rec.jpg')}
            style={styles.imageRec}
          />
          <Text style={styles.tituloRec}>
          Rec
          </Text>
        </View>
        <View>
          <Text style={styles.textoRec}>
            {'   '} REC is a Spanish found footage horror film directed by Jaume Balagueró and Paco Plaza. The story follows a television reporter and her cameraman as they document the night shift at a Barcelona fire station. However, they quickly find themselves trapped in a quarantined building with a deadly secret: a virus that turns the residents into violent zombies.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0066cc',
  },

  tituloTerror: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    margin: 15,
    fontFamily: 'Cinzel_400Regular',
  },

  imageExorcista: {
    width: 400,
    height: 600,
  },

  tituloExorcista: {
    color: '#000080',
    textShadowColor: 'white',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 15,
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -120,
    fontFamily: 'Cinzel_400Regular',
  },

  textoExorcista: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'justify',
    marginTop: 150,
    marginBottom: 50,
    margin: 35,
  },

  imageHannibal: {
    width: 400,
    height: 600,
    marginTop: 30,
  },

  tituloHannibal: {
   color: '#000080',
    textShadowColor: 'white',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 15,
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -150,
    fontFamily: 'Cinzel_400Regular',
  },

  textoHannibal: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'justify',
    marginTop: 140,
    marginBottom: 50,
    margin: 35,
  },

  imagePsicopata: {
    width: 400,
    height: 600,
    marginTop: 30,
  },

  tituloPsicopata: {
    color: '#000080',
    textShadowColor: 'white',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 15,
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -160,
    fontFamily: 'Cinzel_400Regular',
  },

  textoPsicopata: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'justify',
    marginTop: 140,
    marginBottom: 50,
    margin: 35,
  },

  imageEvilDead: {
    width: 400,
    height: 600,
    marginTop: 30,
  },

  tituloEvilDead: {
    color: '#000080',
    textShadowColor: 'white',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 15,
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -120,
    fontFamily: 'Cinzel_400Regular',
  },

  textoEvilDead: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'justify',
    marginTop: 140,
    marginBottom: 50,
    margin: 35,
  },

  imageMisery: {
    width: 400,
    height: 600,
    marginTop: 30,
  },

  tituloMisery: {
    color: '#000080',
    textShadowColor: 'white',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 15,
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -120,
    fontFamily: 'Cinzel_400Regular',
  },

  textoMisery: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'justify',
    marginTop: 140,
    marginBottom: 50,
    margin: 35,
  },

  imageCarrie: {
    width: 400,
    height: 600,
    marginTop: 30,
  },

  tituloCarrie: {
    color: '#000080',
    textShadowColor: 'white',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 15,
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -160,
    fontFamily: 'Cinzel_400Regular',
  },

  textoCarrie: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'justify',
    marginTop: 140,
    marginBottom: 50,
    margin: 35,
  },

  imageRec: {
    width: 400,
    height: 600,
    marginTop: 30,
  },

  tituloRec: {
    color: '#000080',
    textShadowColor: 'white',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 15,
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -160,
    fontFamily: 'Cinzel_400Regular',
  },

  textoRec: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'justify',
    marginTop: 140,
    marginBottom: 50,
    margin: 35,
  },
});
