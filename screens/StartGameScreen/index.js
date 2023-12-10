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
            <View style={styles.btnContainer}>
                <View style={styles.btnWrapper}>
                    <PrimaryButton label={'Reset'} />
                </View>
                <View style={styles.btnWrapper}>
                    <PrimaryButton label={'Confirm'} />
                </View>
            </View>
        </View>
    );
};

export default StartGameScreen;
