import { 
    StyleSheet,
    View, 
    ImageBackground, 
    Text, 
    TouchableWithoutFeedback
} from 'react-native';
import { Navigation } from 'react-native-navigation';

const Shops = ({imageSRC, title, description, target}) => {
    const image = {uri: imageSRC};
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
                onPress={() => Navigation.push('carved', {
                                component: {
                                    name: target
                                }
                            })
                        }
            >
                <ImageBackground source={image} style={styles.background}>
                    <View style={styles.titleRow}>
                        <Text style={styles.shopTitle}>{title}</Text>
                        <Text style={styles.shopDescription}>
                            {description}
                        </Text>
                    </View>
                </ImageBackground>    
            </TouchableWithoutFeedback>    
        </View>
    )        
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 40
    },
    background:{
        resizeMode: 'cover',
        height: 180,
        flexDirection: 'column-reverse'
    },
    titleRow: {
        height: 50,
        width: '100%',
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    },
    shopTitle: {
        fontFamily: 'OpenSans-ExtraBold',
        fontSize: 24,
        color: '#000000'     
    },
    shopDescription: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 16,
        color: '#FC8A49'     
    }
});

export default Shops;