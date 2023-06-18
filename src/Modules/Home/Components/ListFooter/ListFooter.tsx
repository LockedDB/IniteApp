import { Add } from 'Assets/SVG';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';

export const ListFooter = () => (
  <View style={styles.footer}>
    <TouchableOpacity style={styles.container}>
      <Add />
    </TouchableOpacity>
  </View>
);
