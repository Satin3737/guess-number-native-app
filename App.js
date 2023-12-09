import {StatusBar} from 'expo-status-bar';
import StartGameScreen from './screens/StartGameScreen';

const App = () => {
    return (
        <>
            <StatusBar style="auto" />
            <StartGameScreen />
        </>
    );
};

export default App;
