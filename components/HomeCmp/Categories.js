import React from 'react';
import {View, Image, Text, FlatList, StyleSheet} from 'react-native';
import FeatureIcon from 'react-native-vector-icons/dist/Feather';
import colors from '../../assets/color/color';
import categoriesData from '../../assets/data/categoryData';

const Categories = () => {
  const categoriesCard = ({item}) => {
    // console.log('jaffar aman', item);
    return (
      <View style={styles.cateCardWrapper}>
        <Image source={item.image} />
        <Text style={styles.cateCardTitle}> {item.title} </Text>
        <View style={styles.rightIcon}>
          <FeatureIcon name="chevron-right" size={20} />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.categoryWrapper}>
      <Text style={styles.categoryTitle}>Categories</Text>
      <FlatList
        style={{backgroundColor: 'transparent'}}
        data={categoriesData}
        renderItem={categoriesCard}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryWrapper: {
    // backgroundColor: 'red',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  categoryTitle: {
    fontSize: 25,
    fontFamily: 'Roboto-Bold',
    color: colors.black,
  },
  iconStyle: {
    alignSelf: 'flex-end',
  },
  cateCardWrapper: {
    marginTop: 20,
    backgroundColor: colors.primary,
    marginRight: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  rightIcon: {
    backgroundColor: 'white',
    width: 25,
    padding: 3,
    borderRadius: 50,
    marginTop: 20,
  },
  cateCardTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    marginTop: 10,
  },
});

export default Categories;
