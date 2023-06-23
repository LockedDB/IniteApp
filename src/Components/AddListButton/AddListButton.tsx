import styles from './styles';
import { Add } from 'Assets/SVG';
import { TouchableOpacity } from 'react-native';

interface Props {
  onPress: () => void;
}

export const AddListButton = ({ onPress }: Props) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Add />
  </TouchableOpacity>
);
