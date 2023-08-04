import { View } from 'react-native';
import styles from './styles';
import { CategoryTag } from '@/components/CategoryTag';

interface TagListProps {
  tags?: string[];
}

export const TagList = ({ tags }: TagListProps) => {
  if (!tags) return null;
  return (
    tags && (
      <View style={styles.tags}>
        {tags.map((tag, index) => (
          <CategoryTag colorIndex={index}>{tag}</CategoryTag>
        ))}
      </View>
    )
  );
};
