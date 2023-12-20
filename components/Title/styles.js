import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../const';

const styles = StyleSheet.create({
    title: {
        color: colors.white,
        textAlign: 'center'
    },
    h1: {
        fontSize: 32,
        fontWeight: Platform.select({android: 'bold', ios: 'normal'}),
        color: colors.yellow
    },
    h2: {
        fontSize: 24
    },
    h3: {
        fontSize: 20
    }
});

export default styles;
