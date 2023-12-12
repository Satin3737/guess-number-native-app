import {View} from 'react-native';
import PrimaryButton from '../../components/ui/PrimaryButton';
import Title from '../../components/ui/Title';

const GameOverScreen = ({resetGame}) => {
    return (
        <View>
            <Title styleType={'h1'}>Game Over!</Title>
            <PrimaryButton onPressFunc={resetGame}>New game!</PrimaryButton>
        </View>
    );
};

export default GameOverScreen;
