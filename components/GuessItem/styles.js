import {StyleSheet} from 'react-native';
import {colors} from '../../const';

const styles = StyleSheet.create({
    item: {
        borderWidth: 1,
        borderColor: colors.yellow,
        borderRadius: 16,
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: colors.halfOpacityYellow
    },
    text: {
        opacity: 1,
        color: colors.white,
        fontSize: 16,
        textAlign: 'center'
    },
    innerText: {
        color: colors.btnRed,
        fontWeight: 'bold'
    }
});

export default styles;
