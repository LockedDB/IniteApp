import { Image, ImageProps } from 'react-native';
import styles from './styles';

interface UserBubbleProps extends ImageProps {}

export const UserBubble = ({ ...props }: UserBubbleProps) => (
  <Image style={styles.image} {...props} />
);
