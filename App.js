import {StatusBar} from 'expo-status-bar';
import StartGameScreen from './screens/StartGameScreen';
import styles from './styles';
import {LinearGradient} from 'expo-linear-gradient';
import {colors} from './const';
import {ImageBackground, SafeAreaView} from 'react-native';
import {useMemo, useState} from 'react';
import GameScreen from './screens/GameScreen';

const App = () => {
    const [chosenNumber, setChosenNumber] = useState(null);

    const activeScreen = useMemo(
        () =>
            chosenNumber ? (
                <GameScreen chosenNumber={chosenNumber} />
            ) : (
                <StartGameScreen setChosenNumber={setChosenNumber} />
            ),
        [chosenNumber]
    );

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
