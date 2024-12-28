import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { SelectList } from 'react-native-dropdown-select-list'
import { Navigation } from 'react-native-navigation';
import { StyleSheet, ScrollView , Image, View, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import { quantityValues, kayakLength, kayakMaterial} from '../data/DropDowns';

const Kayak = (props) => {
    const [kayakData, setKayakData] = useState({});
    const [loading, setLoading] = useState(true);
    const[error, setError] = useState(false);
    const[quantity, setQuantity] = useState(1);
    const[selectedSize, setSize] = useState(3);
    const[selectedColor, setMaterial] = useState(2);

    const getData = async () => {
        try {
            const { data: kayak } = await axios.get(`http://192.168.1.72:3000/products/${props.id}`);
            setKayakData(kayak);
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
                        <View style={styles.kayakTitleRow}>
                            <Text style={styles.kayakTitle}>{kayakData.name}</Text>
                        </View>
                        
                        <View style={styles.selectRow}>
                            <Text style={styles.selectText}>Select Length: </Text>   
                            <SelectList 
                                setSelected={(val) => setSize(val)} 
                                data={kayakLength} 
                                save='value'
                                search={false}
                                dropdownStyles={{width: 100}}
                                boxStyles={{width: 100}}
                                defaultOption={{ key:'3', value:'8 foot' }}                                
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
                        <Image style={styles.kayakImage} source={{uri: kayakData.image}}/> 
                        <Text style={[styles.kayakContent, styles.kayakPrice]}>${kayakData.price}</Text>

                        <View style={styles.selectRow}>
                            <Text style={styles.selectText}>Select Material: </Text>   
                            <SelectList 
                                setSelected={(val) => setMaterial(val)} 
                                data={kayakMaterial} 
                                save='value'
                                search={false}
                                dropdownStyles={{width: 300}}
                                boxStyles={{width: 300}}
                                defaultOption={{ key:'2', value:'Composite' }}
                            />
                        </View>

                        
                        
                        <Text style={styles.kayakContent}>{kayakData.description}</Text>

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
    kayakTitleRow: {
        backgroundColor: '#000000',
        paddingTop: 10,
        marginTop: 5,
        alignItems: 'center'
    },
    kayakTitle: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 30,
        color: '#FFFFFF'
    },
    kayakImage: {
        height: 250,
        width: '100%',
        resizeMode: 'contain'    
    },
    selectRow: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10, 
        marginTop: 10 //add to styles when copying from ClimbingShop
    },
    selectText: {
        marginLeft: 10,
        alignSelf: 'center'
    },
    selectStyle:{
        marginRight: 10
    },
    kayakPrice: {
        alignSelf: 'center'
    },
    kayakContent: {
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

export default Kayak;