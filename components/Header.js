import { StyleSheet,View, Image, TouchableWithoutFeedback } from 'react-native';
import { Navigation } from 'react-native-navigation';

const Header = () => {
    return(
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <TouchableWithoutFeedback
                    onPress={() => Navigation.push('carved', {
                                        component: {
                                            name: 'Home'
                                        }
                                    })  
                    }
                >
                    <Image 
                        style={styles.imageStyle} 
                        source={require('../assets/carved-rock-logo-black.png')} 
                    />
                </TouchableWithoutFeedback>
                <Image 
                    style={styles.menu} 
                    source={require('../assets/menu_2976215.png')} 
                />   
            </View>    
        </View>    
    )    
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        backgroundColor: '#FFFFFF'
    },
    headerRow: {
        flexDirection: 'row'
    },
    imageStyle: {
        height: 100,
        width:'50%',
    },
    menu: {
        alignSelf: 'center',
        marginLeft: 150
    }    
});

export default Header;