import {Alert, TextInput, View} from 'react-native';
import PrimaryButton from '../../components/ui/PrimaryButton';
import styles from './styles';
import {colors} from '../../const';
import {useState} from 'react';
import Title from '../../components/ui/Title';

const StartGameScreen = ({onGameStart}) => {
    const [number, setNumber] = useState('');

    const inputHandler = (val) => setNumber(val.replace(/\D/g, ''));

    const resetNumber = () => setNumber('');

    const confirmNumber = () => {
        const chosenNumber = parseInt(number.charAt(0) === '0' ? number.substring(1) : number);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Number is invalid!', 'Please input number between 1 and 99.', [
                {text: 'Okay', style: 'destructive', onPress: resetNumber}
            ]);

            return;
        }

        onGameStart(chosenNumber);
    };

    return (
        <View style={styles.screen}>
            <Title text={'Choose a number!'} additionalStyles={[styles.title]} />
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    maxLength={2}
                    keyboardType={'number-pad'}
                    cursorColor={colors.white}
                    autoCorrect={false}
                    value={number}
                    onChangeText={inputHandler}
                    autoFocus={true}
                />
                <View style={styles.btnContainer}>
                    <View style={styles.btnWrapper}>
                        <PrimaryButton label={'Reset'} onPressFunc={resetNumber} />
                    </View>
                    <View style={styles.btnWrapper}>
                        <PrimaryButton label={'Confirm'} onPressFunc={confirmNumber} />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default StartGameScreen;
