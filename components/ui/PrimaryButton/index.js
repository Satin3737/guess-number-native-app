import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import {colors} from '../../../const';

const PrimaryButton = ({label = 'Tap', onPressFunc = () => {}, additionStyles = []}) => {
    return (
        <View style={styles.btnOuter}>
            <Pressable
                style={({pressed}) =>
                    pressed
                        ? [styles.pressed, styles.btnInner, ...additionStyles]
                        : [styles.btnInner, ...additionStyles]
                }
                onPress={onPressFunc}
                android_ripple={{color: colors.mainRed}}
            >
                <Text style={styles.btnText}>{label}</Text>
            </Pressable>
        </View>
    );
};

export default PrimaryButton;
