import {Platform, StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    app: {
        flex: 1
    },
    appBg: {
        opacity: 0.2
    },
    appSaveView: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight + 16 : 16
    }
});

export default styles;
