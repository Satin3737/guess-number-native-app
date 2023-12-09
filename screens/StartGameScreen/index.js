import {TextInput, View} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import styles from './styles';
import {colors} from '../../const';

const StartGameScreen = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                maxLength={2}
                keyboardType={'number-pad'}
                cursorColor={colors.white}
                autoCorrect={false}
            />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
};

export default StartGameScreen;
