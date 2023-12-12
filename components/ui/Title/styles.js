import {StyleSheet} from 'react-native';
import {colors} from '../../../const';

const styles = StyleSheet.create({
    title: {
        fontFamily: 'OpenSans-Regular',
        color: colors.yellow,
        textAlign: 'center'
    },
    h1: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 32
    },
    h2: {
        fontSize: 24,
        color: colors.white
    },
    h3: {
        fontSize: 20
    }
});

export default styles;
