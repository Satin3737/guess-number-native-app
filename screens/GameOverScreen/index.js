import {View, Image, Text, ScrollView} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import Title from '../../components/Title';
import styles from './styles';
import {useDeviceOrientation} from '@react-native-community/hooks';

const GameOverScreen = ({resetGame, chosenNumber, gameRounds}) => {
    const isLand = useDeviceOrientation() === 'landscape';

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.container}>
                <Title styleType={'h1'} additionalStyles={[styles.title]}>
                    Game Over!
                </Title>
                <View style={[styles.imageWrapper, [isLand ? styles.imageWrapperLand : null]]}>
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
                <PrimaryButton
                    onPressFunc={resetGame}
                    btnOuterStyles={[isLand ? styles.btnLand : null]}
                    textStyles={[styles.buttonText]}
                >
                    Start New game!
                </PrimaryButton>
            </View>
        </ScrollView>
    );
};

export default GameOverScreen;
