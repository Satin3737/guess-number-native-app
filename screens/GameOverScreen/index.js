import {View, Image, Text} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import Title from '../../components/Title';
import styles from './styles';

const GameOverScreen = ({resetGame, chosenNumber, gameRounds}) => {
    return (
        <View style={styles.screen}>
            <Title styleType={'h1'} additionalStyles={[styles.title]}>
                Game Over!
            </Title>
            <View style={styles.imageWrapper}>
                <Image
                    source={require('../../assets/images/success.png')}
                    resizeMode={'cover'}
                    style={styles.image}
                />
            </View>
            <Title styleType={'h3'} additionalStyles={[styles.subtitle]}>
                Your phone needed <Text style={styles.text}>{gameRounds.length}</Text> rounds to guess the
                number <Text style={styles.text}>{chosenNumber}</Text>!
            </Title>
            <PrimaryButton onPressFunc={resetGame} textStyles={[styles.buttonText]}>
                Start New game!
            </PrimaryButton>
        </View>
    );
};

export default GameOverScreen;
