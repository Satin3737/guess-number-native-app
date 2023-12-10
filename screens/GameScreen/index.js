import {Text, View} from 'react-native';
import styles from './styles';

const GameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Opponent's guess</Text>
            <View>
                <Text>Higher or lower</Text>
            </View>
            <View></View>
        </View>
    );
};

export default GameScreen;
