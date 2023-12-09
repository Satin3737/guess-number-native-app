import {StyleSheet} from 'react-native';
import {colors} from '../../const';

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: '#72063c',
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 8
    },
    input: {
        fontSize: 32,
        fontWeight: 'bold',
        borderBottomColor: colors.yellow,
        borderBottomWidth: 2,
        color: colors.yellow,
        marginVertical: 8,
        textAlign: 'center',
        width: 60,
        alignSelf: 'center'
    }
});

export default styles;
