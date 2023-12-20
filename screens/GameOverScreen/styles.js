import {StyleSheet} from 'react-native';
import {colors} from '../../const';

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    container: {
        flex: 1,
        paddingBottom: 24
    },
    title: {
        marginBottom: 24
    },
    subtitle: {
        marginBottom: 16
    },
    imageWrapper: {
        width: '80%',
        borderRadius: 500,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: colors.yellow,
        alignSelf: 'center',
        marginBottom: 16,
        flexDirection: 'row'
    },
    imageWrapperLand: {
        maxWidth: 140
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
    },
    btnLand: {
        alignSelf: 'center',
        minWidth: 360
    }
});

export default styles;
