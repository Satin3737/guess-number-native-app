import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import {colors} from '../../const';

const PrimaryButton = ({children = null, onPressFunc = () => {}, btnStyles = [], textStyles = []}) => {
    return (
        <View style={styles.btnOuter}>
            <Pressable
                style={({pressed}) =>
                    pressed
                        ? [styles.pressed, styles.btnInner, ...btnStyles]
                        : [styles.btnInner, ...btnStyles]
                }
                onPress={onPressFunc}
                android_ripple={{color: colors.mainRed}}
            >
                <Text style={[styles.btnText, ...textStyles]}>{children}</Text>
            </Pressable>
        </View>
    );
};

export default PrimaryButton;
