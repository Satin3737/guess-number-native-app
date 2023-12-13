import {Text, View} from 'react-native';
import styles from './styles';

const GuessItem = ({data}) => {
    const {item, index} = data;

    return (
        <View style={styles.item}>
            <Text style={styles.text}>
                Round <Text style={styles.innerText}>#{index + 1}</Text> - Opponent's guess number{' '}
                <Text style={styles.innerText}>{item}</Text>!
            </Text>
        </View>
    );
};

export default GuessItem;
