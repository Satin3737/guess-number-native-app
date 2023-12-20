import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import {colors} from '../../const';

const PrimaryButton = ({
    children = null,
    onPressFunc = () => {},
    btnOuterStyles = [],
    btnInnerStyles = [],
    textStyles = []
}) => {
    return (
        <View style={[styles.btnOuter, ...btnOuterStyles]}>
            <Pressable
                style={({pressed}) => [styles.btnInner, ...btnInnerStyles, pressed ? styles.pressed : null]}
                onPress={onPressFunc}
                android_ripple={{color: colors.mainRed}}
            >
                <Text style={[styles.btnText, ...textStyles]}>{children}</Text>
            </Pressable>
        </View>
    );
};

export default PrimaryButton;
