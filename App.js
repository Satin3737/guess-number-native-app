import {StatusBar} from 'expo-status-bar';
import StartGameScreen from './screens/StartGameScreen';
import styles from './styles';
import {LinearGradient} from 'expo-linear-gradient';
import {colors} from './const';
import {ImageBackground, SafeAreaView} from 'react-native';
import {useMemo, useState} from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const App = () => {
    const [chosenNumber, setChosenNumber] = useState(null);
    const [isGameOver, setIsGameOver] = useState(true);

    const resetGame = () => setChosenNumber(null);

    const onGameOver = () => setIsGameOver(true);

    const onGameStart = (number) => {
        setIsGameOver(false);
        setChosenNumber(number);
    };

    const activeScreen = useMemo(() => {
        if (isGameOver && !chosenNumber) {
            return <StartGameScreen onGameStart={onGameStart} />;
        }

        if (isGameOver) {
            return <GameOverScreen resetGame={resetGame} />;
        }

        return <GameScreen chosenNumber={chosenNumber} onGameOver={onGameOver} />;
    }, [chosenNumber, isGameOver]);

    return (
        <LinearGradient colors={[colors.btnRed, colors.yellow]} style={styles.app}>
            <ImageBackground
                source={require('./assets/images/main-bg.png')}
                resizeMode={'cover'}
                style={styles.app}
                imageStyle={styles.appBg}
            >
                <StatusBar style="auto" />
                <SafeAreaView style={styles.appSaveView}>{activeScreen}</SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
};

export default App;
