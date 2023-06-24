import { CategoryTag } from '@components/CategoryTag';
import { CustomSafeAreaView } from '@components/CustomSafeAreaView';
import { CustomText } from '@components/CustomText';
import { Divider } from '@components/Divider';
import { TopBar } from '@components/TopBar';

import { ArrowBack, ArrowForward, MoreVertical } from 'Assets/SVG';
import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { AddListButton } from '@components/AddListButton';
import { ContentIndicators } from '@components/ContentIndicators';

interface ListItem {
  id: string;
  title: string;
  chatBubbleCount: number;
  attachFileCount: number;
}

export const ProjectDetailsScreen = (): React.ReactElement => {
  const data: ListItem[] = [
    {
      id: '1',
      title: "Let's talk about the kitchen!",
      chatBubbleCount: 3,
      attachFileCount: 1,
    },
    // Add more items as needed
  ];

  const renderItem = ({ item }: { item: ListItem }) => (
    <TouchableOpacity style={[styles.item, styles.row]}>
      <CustomText style={styles.rowTitle} fontStyle="bold">
        {item.title}
      </CustomText>
      <View style={[styles.row, styles.spacing]}>
        <ContentIndicators chatBubbleCount={1} attachFileCount={3} />
        <ArrowForward />
      </View>
    </TouchableOpacity>
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
      <TopBar leftComponent={<ArrowBack />} rightComponent={<MoreVertical />} />

      <View style={styles.header}>
        <CustomText style={styles.title} fontStyle="black">
          Pages "About" and "Careers"
        </CustomText>
        <CustomText style={styles.description}>
          All the details are in the file, I’m sure it will turn out cool! Let’s
          do the exact opposite of the first concept.
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

      <AddListButton onPress={() => {}} />
    </CustomSafeAreaView>
  );
};
