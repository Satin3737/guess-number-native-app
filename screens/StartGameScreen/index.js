import {Alert, KeyboardAvoidingView, ScrollView, TextInput, View} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import styles from './styles';
import {colors} from '../../const';
import {useState} from 'react';
import Title from '../../components/Title';
import {useDeviceOrientation} from '@react-native-community/hooks';

const StartGameScreen = ({onGameStart}) => {
    const [number, setNumber] = useState('');
    const isLand = useDeviceOrientation() === 'landscape';

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
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior={'position'}>
                <Title styleType={'h1'} additionalStyles={[styles.title]}>
                    Guess My Number!
                </Title>
                <View style={[styles.container, isLand ? styles.containerLand : null]}>
                    <Title styleType={'h2'} additionalStyles={[styles.subtitle]}>
                        Enter a number:
                    </Title>
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
                            <PrimaryButton onPressFunc={resetNumber}>Reset</PrimaryButton>
                        </View>
                        <View style={styles.btnWrapper}>
                            <PrimaryButton onPressFunc={confirmNumber}>Confirm</PrimaryButton>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

export default StartGameScreen;
