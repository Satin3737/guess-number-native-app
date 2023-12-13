import {StyleSheet} from 'react-native';
import {colors} from '../../const';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingBottom: 32
    },
    title: {
        marginBottom: 24
    },
    numberContainer: {
        borderWidth: 4,
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 48,
        borderColor: colors.yellow,
        textAlign: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: 48
    },
    number: {
        color: colors.white,
        fontSize: 36,
        fontWeight: 'bold'
    },
    subtitle: {
        marginBottom: 16
    },
    feedbackContainer: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 32
    },
    feedbackBtnWrapper: {
        flex: 1
    },
    list: {
        flex: 1
    },
    ListSeparator: {
        height: 8
    }
});

export default styles;
