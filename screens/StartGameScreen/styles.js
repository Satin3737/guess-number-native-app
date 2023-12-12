import {StyleSheet} from 'react-native';
import {colors} from '../../const';

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    container: {
        alignItems: 'center',
        borderRadius: 8,
        padding: 24,
        backgroundColor: colors.mainRed,
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 8
    },
    title: {
        marginBottom: 24
    },
    subtitle: {
        marginBottom: 16
    },
    input: {
        fontSize: 32,
        fontWeight: 'bold',
        borderBottomColor: colors.yellow,
        borderBottomWidth: 2,
        color: colors.yellow,
        marginBottom: 16,
        textAlign: 'center',
        width: 60
    },
    btnContainer: {
        gap: 8,
        flexDirection: 'row'
    },
    btnWrapper: {
        flex: 1
    }
});

export default styles;
