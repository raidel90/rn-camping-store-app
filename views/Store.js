import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { Navigation } from 'react-native-navigation';
import { 
    StyleSheet, 
    FlatList ,  
    View, 
    Text, 
    ActivityIndicator 
} from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import ShopItem from '../components/ShopItem';

const Store = (props) => {
    const [remoteData, setRemoteData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    const getData = async () => {
        try {
            const { 
                data: products 
            } = await  axios.get('http://192.168.1.72:3000/products');
            setRemoteData(products);
        } catch(err) {
            setError(true);
        } finally {
            setLoading(false);
        }   
    };

    useEffect(() => {
        getData();
    }, []);

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
                <Header />
                <View style={styles.storeTitleRow}>
                    <Text style={styles.storeTitle}>Shop CarvedRock</Text>
                </View>

                {loading ? (
                    <ActivityIndicator size='large'/>
                ) : (
                    <FlatList
                        data={remoteData}
                        renderItem={({ item }) => <ShopItem {...item} />}
                        keyExtractor={item => item.id}
                    />    
                )}
                <Text style={styles.message}>LONGPRESS TO GO BACK</Text>    
            </View>    
        </GestureDetector>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    storeTitleRow: {
        backgroundColor: '#000000',
        paddingTop: 10,
        marginTop: 5,
        alignItems: 'center'
    },
    storeTitle: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 30,
        color: '#FFFFFF'
    },
    message: {
        alignSelf: 'center',
        fontFamily: 'OpenSans-BoldItalic',
        color: '#000000'    
    }
});

export default Store;