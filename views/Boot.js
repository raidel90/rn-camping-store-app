import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { SelectList } from 'react-native-dropdown-select-list';
import { Navigation } from 'react-native-navigation';
import { 
    StyleSheet, 
    ScrollView, 
    Image, 
    View, 
    Text, 
    ActivityIndicator 
} from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import { quantityValues, size, color} from '../data/DropDowns';

const Boot = (props) => {
    const [bootData, setBootData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSize] = useState(6);
    const [selectedColor, setColor] = useState(6);
    
    const getData = async () => {
        try {
            const { 
                data: boot 
            } = await axios.get(`http://192.168.1.72:3000/products/${props.id}`);
            setBootData(boot);
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
            Navigation.pop(props.componentId);
        }
    });

    return(
        <GestureDetector gesture={longPressGesture}>
            <View style={styles.container}>
                <ScrollView>
                    <Header />
                        {loading ? (
                            <ActivityIndicator size='large'/>
                        ) : (
                            <View>
                                <View style={styles.bootTitleRow}>
                                    <Text style={styles.bootTitle}>
                                        {bootData.name}
                                    </Text>
                                </View>
                                    <Image style={styles.bootImage} source={{uri: bootData.image}}/>
                                    <Text style={[styles.bootContent, styles.bootPrice]}>
                                        ${bootData.price}
                                    </Text>
                                    <View style={styles.selectRow}>
                                        <Text style={styles.selectText}>Select Size: </Text>
                                        <SelectList 
                                            setSelected={(val) => setSize(val)} 
                                            data={size} 
                                            save='value'
                                            search={false}
                                            dropdownStyles={{width: 100}}
                                            boxStyles={{width: 100}}
                                            defaultOption={{ key:'6', value:'6' }}                                
                                        />
                                        <Text style={styles.selectText}>Select Quantity: </Text>   
                                        <SelectList 
                                            setSelected={(val) => setQuantity(val)} 
                                            data={quantityValues} 
                                            save='value'
                                            search={false}
                                            dropdownStyles={{width: 100}}
                                            boxStyles={{width: 100}}
                                            defaultOption={{ key:'1', value:'1' }} 
                                        />    
                                    </View>
                                    <View style={styles.selectRow}>
                                        <Text style={styles.selectText}>Select Color: </Text>   
                                        <SelectList 
                                            setSelected={(val) => setColor(val)} 
                                            data={color} 
                                            save='value'
                                            search={false}
                                            dropdownStyles={{width: 300}}
                                            boxStyles={{width: 300}}
                                            defaultOption={{ key:'1', value:'Brown' }}
                                        />    
                                    </View> 
                                    <Text style={styles.bootContent}>{bootData.description}</Text>    
                                </View>    
                            
                        )}

                        <Text style={styles.message}>LONGPRESS TO GO BACK</Text>
                </ScrollView>
            </View>
        </GestureDetector>
    )    
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bootTitleRow: {
        backgroundColor: '#000000',
        paddingTop: 10,
        marginTop: 5,
        alignItems: 'center'
    },
    bootTitle: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 30,
        color: '#FFFFFF'
    },
    bootImage: {
        height: 250,
        width: '100%',
        resizeMode: 'contain'    
    },
    selectRow: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10, 
    },
    selectText: {
        marginLeft: 10,
        alignSelf: 'center'
    },
    bootPrice: {
        alignSelf: 'center'
    },
    bootContent: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 16,
        color: '#000000',
        margin: 10
    },
    message: {
        alignSelf: 'center',
        fontFamily: 'OpenSans-BoldItalic',
        color: '#000000'    
    }
});

export default Boot;