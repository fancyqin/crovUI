import PickerStyle from 'antd-mobile/lib/picker/style/index.native';
import colors from '../common/Colors'
export default {
    ...PickerStyle,
    okText: {
        color: colors.blue
    },
    dismissText: {
        color: colors.blue
    },
    title: {
        ...PickerStyle.title,
        color: '#555',
    }
}