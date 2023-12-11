import {StyleSheet} from 'react-native';
import {colors} from '../../../const';

const styles = StyleSheet.create({
    btnOuter: {
        borderRadius: 50,
        overflow: 'hidden',
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4
    },
    btnInner: {
        backgroundColor: colors.btnRed,
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    btnText: {
        color: colors.white,
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.8
    }
});

export default styles;
