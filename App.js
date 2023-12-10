import {StatusBar} from 'expo-status-bar';
import StartGameScreen from './screens/StartGameScreen';
import styles from './styles';
import {LinearGradient} from 'expo-linear-gradient';
import {colors} from './const';
import {ImageBackground} from 'react-native';

const App = () => {
    return (
        <LinearGradient colors={[colors.btnRed, colors.yellow]} style={styles.app}>
            <ImageBackground
                source={require('./assets/images/main-bg.png')}
                resizeMode={'cover'}
                style={styles.appContainer}
                imageStyle={styles.appBg}
            >
                <StatusBar style="auto" />
                <StartGameScreen />
            </ImageBackground>
        </LinearGradient>
    );
};

export default App;
