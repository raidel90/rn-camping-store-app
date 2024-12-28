import { 
    StyleSheet, 
    Image, 
    View, 
    ScrollView, 
    Text, 
    TouchableOpacity 
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CareerData = [
    {
        jobTitle: 'Customer Service Associate',
        duties: `Support customer enquiries. Facilitate sales. Act as the liason between the customer and the company. Frontline customer facing position`,
        qualifications: `Some experience in customer service or retail. Ability to operate a cash register. Great attitude. Interest in outdoor activities would be helpful`,
        wage: `15.00 per hour to start`
    },
    {
        jobTitle: 'Return Associate',
        duties: `Proces returns and exchanges. Facilitate refund or store credit at customers discretion. Support customer service as needed`,
        qualifications: `Some experience in customer service or retail. Ability to operate a cash register. Great attitude. Interest in outdoor activities would be helpful`,
        wage: `15.00 per hour to start`
    },
    {
        jobTitle: 'Sales Manager',
        duties: `Coordinate sales team within the South East region. Meet or exceed sales quota. Develop new corporate or government clients. Break into untapped markets`,
        qualifications: `4 Year college degree or better. Experience managing a sales team focused on camping equipment ot technology sales.`,
        wage: `90,000 per year`
    },
    {
        jobTitle: 'Product Development',
        duties: `Develop new products as part of the R&D team. Create the future of Carved Rock.`,
        qualifications: `4 Year college degree or better. Experience in product development lifecycle. Understands working as part of a team and expressing ideas to others.`,
        wage: `120,000 per year`
    }    
]

const Careers = (props) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Header />
                <Image 
                    style={styles.imageStyle} 
                    source={require('../assets/shutterstock_615245324.jpg')} 
                />
                <View style={styles.jobContainer}>
                    <Text style={styles.title}>{CareerData[0].jobTitle}</Text>
                    <Text style={styles.subTitle}>Duties:</Text>
                    <Text style={styles.content}>{CareerData[0].duties}</Text>
                    <Text style={styles.subTitle}>Qualifications:</Text>
                    <Text style={styles.content}>{CareerData[0].qualifications}</Text>
                    <Text style={styles.subTitle}>Starting Wage:</Text>
                    <Text style={styles.content}>{CareerData[0].wage}</Text>
                    <TouchableOpacity style={styles.applyButton}>
                        <Text style={styles.applyButtonText}>APPLY</Text>
                    </TouchableOpacity>    
                </View>

                <View style={styles.jobContainer}>
                    <Text style={styles.title}>{CareerData[1].jobTitle}</Text>
                    <Text style={styles.subTitle}>Duties:</Text>
                    <Text style={styles.content}>{CareerData[1].duties}</Text>
                    <Text style={styles.subTitle}>Qualifications:</Text>
                    <Text style={styles.content}>{CareerData[1].qualifications}</Text>
                    <Text style={styles.subTitle}>Starting Wage:</Text>
                    <Text style={styles.content}>{CareerData[1].wage}</Text>
                    <TouchableOpacity style={styles.applyButton}>
                        <Text style={styles.applyButtonText}>APPLY</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.jobContainer}>
                    <Text style={styles.title}>{CareerData[2].jobTitle}</Text>
                    <Text style={styles.subTitle}>Duties:</Text>
                    <Text style={styles.content}>{CareerData[2].duties}</Text>
                    <Text style={styles.subTitle}>Qualifications:</Text>
                    <Text style={styles.content}>{CareerData[2].qualifications}</Text>
                    <Text style={styles.subTitle}>Starting Wage:</Text>
                    <Text style={styles.content}>{CareerData[2].wage}</Text>
                    <TouchableOpacity style={styles.applyButton}>
                        <Text style={styles.applyButtonText}>APPLY</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.jobContainer}>
                    <Text style={styles.title}>{CareerData[3].jobTitle}</Text>
                    <Text style={styles.subTitle}>Duties:</Text>
                    <Text style={styles.content}>{CareerData[3].duties}</Text>
                    <Text style={styles.subTitle}>Qualifications:</Text>
                    <Text style={styles.content}>{CareerData[3].qualifications}</Text>
                    <Text style={styles.subTitle}>Starting Wage:</Text>
                    <Text style={styles.content}>{CareerData[3].wage}</Text>
                    <TouchableOpacity style={styles.applyButton}>
                        <Text style={styles.applyButtonText}>APPLY</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity 
                    style={styles.backButton}
                    onPress={() => Navigation.pop(props.componentId)}
                >
                    <Text style={styles.backButtonText}>GO BACK</Text>
                </TouchableOpacity> 
                
                <Footer />
            </ScrollView>    
        </View>        
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
    jobContainer: {
        flex: 1,
        paddingBottom: 20,
        paddingTop: 10,
        borderBottomWidth: 2
    },
    title: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 20,
        color: '#000000',
        paddingLeft: 20
    },
    subTitle: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 16,
        color: '#000000',
        paddingLeft: 20,
        textDecorationLine: 'underline'
    },
    content: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 14,
        color: '#000000',
        paddingLeft: 20
    },
    applyButton: {
        width: '50%',
        backgroundColor: '#000000',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 10
    },
    applyButtonText: {
        fontSize: 25,
        color: '#FFFFFF'
    },
    backButton: {
        width: '80%',
        backgroundColor: '#F12748',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        margin: 15
    },
    backButtonText: {
        fontSize: 30,
        color: '#FFFFFF'
    }
});

export default Careers