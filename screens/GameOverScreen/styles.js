import {StyleSheet} from 'react-native';
import {colors} from '../../const';

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    title: {
        marginBottom: 24
    },
    subtitle: {
        marginBottom: 16
    },
    imageWrapper: {
        width: '80%',
        borderRadius: 200,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: colors.yellow,
        alignSelf: 'center',
        marginBottom: 16,
        flexDirection: 'row'
    },
    image: {
        flex: 1,
        aspectRatio: 1,
        resizeMode: 'cover'
    },
    text: {
        fontWeight: 'bold',
        color: colors.yellow
    },
    buttonText: {
        fontSize: 20
    }
});

export default styles;
