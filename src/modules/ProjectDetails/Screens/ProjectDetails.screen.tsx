import { ArrowBack, MoreVertical } from '@/assets/SVG';
import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import styles from './styles';

import { TopicListItem } from '../types';
import { TopicRow } from '../Components/TopicRow';
import { useNavigation } from '@react-navigation/native';
import { GenericNavigation } from '@/modules/Navigation/types';
import { CustomText } from '@/components/CustomText';
import { CustomSafeAreaView } from '@/components/CustomSafeAreaView';
import { TopBar } from '@/components/TopBar';
import { CategoryTag } from '@/components/CategoryTag';
import { Divider } from '@/components/Divider';
import { AddListButton } from '@/components/AddListButton';

export const ProjectDetailsScreen = (): React.ReactElement => {
  const { goBack } = useNavigation<GenericNavigation>();
  const data: TopicListItem[] = [
    {
      id: '1',
      title: "Let's talk about the kitchen!",
      chatBubbleCount: 3,
      attachFileCount: 1,
    },
    // Add more items as needed
  ];

  const renderItem = ({ item }: { item: TopicListItem }) => (
    <TopicRow item={item} />
  );

  const renderListHeader = () => (
    <View style={styles.listHeader}>
      <CustomText fontStyle="bold" style={styles.listTitle}>
        List of Topics
      </CustomText>
    </View>
  );

  return (
    <CustomSafeAreaView>
      <View style={styles.page}>
        <TopBar
          leftComponent={
            <TouchableOpacity onPress={goBack}>
              <ArrowBack />
            </TouchableOpacity>
          }
          rightComponent={<MoreVertical />}
        />

        <View style={styles.header}>
          <CustomText style={styles.title} fontStyle="black">
            Pages "About" and "Careers"
          </CustomText>
          <CustomText style={styles.description}>
            All the details are in the file, I’m sure it will turn out cool!
            Let’s do the exact opposite of the first concept.
          </CustomText>
          <View style={styles.tagContainer}>
            <CategoryTag colorIndex={1}>Website</CategoryTag>
            <CategoryTag colorIndex={0}>+</CategoryTag>
          </View>
        </View>

        <Divider />

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListHeaderComponent={renderListHeader}
          stickyHeaderIndices={[0]}
        />
      </View>
      <AddListButton onPress={() => {}} />
    </CustomSafeAreaView>
  );
};
