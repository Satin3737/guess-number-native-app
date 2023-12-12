import {Text} from 'react-native';
import styles from './styles';
import {useMemo} from 'react';

const Title = ({children = null, styleType = 'h1', additionalStyles = []}) => {
    const types = useMemo(
        () => ({
            h1: styles.h1,
            h2: styles.h2,
            h3: styles.h3
        }),
        []
    );

    return <Text style={[styles.title, types[styleType], ...additionalStyles]}>{children}</Text>;
};

export default Title;
