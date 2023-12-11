import {Alert, Text, View} from 'react-native';
import styles from './styles';
import Title from '../../components/ui/Title';
import {useCallback, useEffect, useMemo, useState} from 'react';
import PrimaryButton from '../../components/ui/PrimaryButton';

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
            <Title text={"Opponent's guess:"} additionalStyles={[styles.title]} />
            <View style={styles.numberContainer}>
                <Text style={styles.number}>{currentGuest}</Text>
            </View>
            <Text style={styles.question}>Higher or Lower?</Text>
            <View style={styles.feedbackContainer}>
                <View style={styles.feedbackBtnWrapper}>
                    <PrimaryButton label={'Lower'} onPressFunc={() => nextGuessHandler(lower)} />
                </View>
                <View style={styles.feedbackBtnWrapper}>
                    <PrimaryButton label={'Higher'} onPressFunc={() => nextGuessHandler(higher)} />
                </View>
            </View>
        </View>
    );
};

export default GameScreen;
