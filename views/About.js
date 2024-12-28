import { 
    GestureDetector, 
    Gesture 
} from 'react-native-gesture-handler';
import { 
    StyleSheet, 
    View, 
    ScrollView, 
    Image, 
    Text, 
    TouchableOpacity
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = (props) => {

    const intro = `Whether attacking the mountain that is the top of your bucket list, or attacking a challenging climbing wall, we have you covered. We constantly upgrade our stock with the newest and bset gear. We pride ourselves on stocking the best and the safest gear. And of course our prices are great!`

    const bio = `CarvedRock started for purely selfish regions. Our founder, John Doe, was an adventurer from the start. Between rafting on the Amazon and climbing Everest he tried to do it all. Experiences were important. Over time he learned finding the best gear was a job of its own. boots from thie store, tents and climbing supplies from another. John wished there was a one stop sho for this. Since he couldnt find what he wanted, then CarvedRock was born`

    const stores = `With 15 locations across 6 States you may find a brick and mortar location nearby. No worries if a store is not close, you can alswy shop on CarvedRock.com. And now with our new mobile app you will even be able to shop directly from your mobile device.`

    const longPressGesture = Gesture.LongPress().onEnd((e, success) => {
        if (success) {
            Navigation.push(props.componentId,{
                component: {
                    name: 'Home'
                }
            });
        }
    });

    return (
        <GestureDetector gesture={longPressGesture}>
        <View style={styles.container}>
            <ScrollView>
                <Header />
                <Image 
                    style={styles.imageStyle} 
                    source={require('../assets/shutterstock_440789620.jpg')} 
                />
                <Text style={styles.aboutTitle}>We Love New Adventures</Text>
                <Text style={styles.aboutText}>{intro}</Text>
                <Image 
                    style={styles.imageStyle} 
                    source={require('../assets/shutterstock_492010117.jpg')} 
                />
                <Text style={styles.aboutTitle}>How We Started</Text>
                <Text style={styles.aboutText}>{bio}</Text>
                <Image 
                    style={styles.imageStyle} 
                    source={require('../assets/shutterstock_273547007.jpg')} 
                />
                <Text style={styles.aboutTitle}>Where Can You Find Us</Text>
                <Text style={styles.aboutText}>{stores}</Text>
                <TouchableOpacity 
                    style={styles.aboutButton}
                    onPress={() => Navigation.pop(props.componentId)}
                >
                    <Text style={styles.aboutButtonText}>GO BACK</Text>    
                </TouchableOpacity>
                <Footer />
            </ScrollView>    
        </View>
        </GestureDetector>    
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageStyle: {
        height: 200,
        width: '100%',
        marginBottom: 20
    },
    aboutTitle: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 20,
        alignSelf: 'center',
        color: '#000000',
        textDecorationLine: 'underline',
        paddingBottom: 5        
    },
    aboutText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 16,
        alignSelf: 'center',
        color: '#000000',
        marginBottom: 40
    },
    aboutButton: {
        width: '50%',
        backgroundColor: '#000000',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        marginBottom: 20
    },
    aboutButtonText: {
        fontSize: 25,
        color: '#FFFFFF'
    }    
});

export default About;