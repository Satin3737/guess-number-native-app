import {Text} from 'react-native';
import styles from './styles';

const Title = ({text = '', additionalStyles = []}) => {
    return <Text style={[styles.title, ...additionalStyles]}>{text}</Text>;
};

export default Title;
