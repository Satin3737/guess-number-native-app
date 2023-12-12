import {Alert, Text, View} from 'react-native';
import styles from './styles';
import Title from '../../components/ui/Title';
import {useCallback, useEffect, useMemo, useState} from 'react';
import PrimaryButton from '../../components/ui/PrimaryButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import {colors} from '../../const';

const GameScreen = ({chosenNumber, onGameOver}) => {
    const borders = useMemo(() => ({min: 1, max: 100}), []);
    const directions = useMemo(() => ({higher: 'higher', lower: 'lower'}), []);
    const {higher, lower} = directions;
    const getRandomNum = useCallback(({min, max}) => Math.floor(Math.random() * (max - min)) + min, []);
    const [currentGuest, setCurrentGuest] = useState(getRandomNum(borders));

    const nextGuessHandler = (direction) => {
        if (
            (direction === lower && currentGuest < chosenNumber) ||
            (direction === higher && currentGuest > chosenNumber)
        ) {
            Alert.alert("Don't lie!", 'You know that this is wrong!', [{text: 'Sorry!', style: 'cancel'}]);
            return;
        }

        direction === higher ? (borders.min = currentGuest + 1) : (borders.max = currentGuest);
        setCurrentGuest(getRandomNum(borders));
    };

    useEffect(() => {
        if (currentGuest === chosenNumber) {
            onGameOver();
        }
    }, [currentGuest, chosenNumber]);

    return (
        <View style={styles.screen}>
            <Title styleType={'h1'} additionalStyles={[styles.title]}>
                Opponent's Guess:
            </Title>
            <View style={styles.numberContainer}>
                <Text style={styles.number}>{currentGuest}</Text>
            </View>
            <Title styleType={'h2'} additionalStyles={[styles.subtitle]}>
                Higher or Lower?
            </Title>
            <View style={styles.feedbackContainer}>
                <View style={styles.feedbackBtnWrapper}>
                    <PrimaryButton onPressFunc={() => nextGuessHandler(lower)}>
                        <Ionicons name={'md-remove'} size={24} color={colors.white} />
                    </PrimaryButton>
                </View>
                <View style={styles.feedbackBtnWrapper}>
                    <PrimaryButton onPressFunc={() => nextGuessHandler(higher)}>
                        <Ionicons name={'md-add'} size={24} color={colors.white} />
                    </PrimaryButton>
                </View>
            </View>
        </View>
    );
};

export default GameScreen;
