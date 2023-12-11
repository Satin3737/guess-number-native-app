import {Text, View} from 'react-native';
import PrimaryButton from '../../components/ui/PrimaryButton';

const GameOverScreen = ({resetGame}) => {
    return (
        <View>
            <Text>Game Over!</Text>
            <PrimaryButton label={'New game!'} onPressFunc={resetGame} />
        </View>
    );
};

export default GameOverScreen;
