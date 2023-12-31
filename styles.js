import {Dimensions, Platform, StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    app: {
        minHeight: Dimensions.get('screen').height,
        flex: 1
    },
    appBg: {
        opacity: 0.2
    },
    appSaveView: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight + 24 : 24
    }
});

export default styles;
