import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import FeatureIcon from 'react-native-vector-icons/dist/Feather';
import colors from '../assets/color/color';
import categoriesData from '../assets/data/categoryData';
import popularData from '../assets/data/productData';
import Categories from '../components/HomeCmp/Categories';
const Home = ({navigation}) => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior={false}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {/* //headers// */}
        <View style={styles.headerWrapper}>
          <Image
            style={styles.profileImg}
            source={require('../assets/images/profile.png')}
          />

          <Icon name="align-horizontal-right" size={24} />
        </View>

        {/* ////title// */}
        <View style={styles.titleWrapper}>
          <Text style={styles.subTitle}>Food</Text>
          <Text style={styles.mainTitle}>Delivery</Text>
        </View>

        {/* ////searchBar // */}
        <View style={styles.searchWrapper}>
          <FeatureIcon name="search" style={styles.iconStyle} size={24} />
          <TextInput style={styles.searchInput} placeholder="Search..." />
        </View>

        {/* categories// */}

        <Categories />

        {/* ///POPULAR CARD// */}

        <View style={styles.popularWrapper}>
          <Text style={styles.popularTitle}>Popular</Text>

          <View>
            {popularData.map((val, ind) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Detail', {
                      item: val,
                    })
                  }
                  key={ind}>
                  <View style={styles.popularMainCard}>
                    <View style={styles.popularCard}>
                      <View style={styles.popHead}>
                        <Icon
                          name="crown"
                          style={{color: colors.primary}}
                          size={16}
                        />
                        <Text style={styles.popHeadTitle}>top of the week</Text>
                      </View>
                      <View style={styles.popDesc}>
                        <Text style={styles.popDescTitle}> {val.title} </Text>
                        <Text style={styles.popDescSubTitle}>
                          Weight {val.weight}
                        </Text>
                      </View>
                      <View style={styles.popFooter}>
                        <View style={styles.adBtn}>
                          <FeatureIcon
                            name="plus"
                            style={{color: colors.black, fontWeight: 'bold'}}
                            size={18}
                          />
                        </View>
                        <View style={styles.ratingBox}>
                          <FeatureIcon
                            name="star"
                            style={{color: colors.black}}
                            size={18}
                          />
                          <Text
                            style={{
                              color: colors.black,
                              fontFamily: 'Roboto-Bold',
                            }}>
                            {val.rating}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View>
                      <Image
                        resizeMode="contain"
                        style={{width: 150, height: 150, marginLeft: 30}}
                        source={val.image}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  titleWrapper: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    marginTop: 20,
  },
  subTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: colors.black,
  },
  mainTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 30,
    color: colors.black,
  },
  searchWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  searchInput: {
    borderBottomColor: colors.black,
    borderBottomWidth: 2,
    width: '90%',
    padding: 5,
    marginLeft: 10,
  },
  popularWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  popularTitle: {
    fontSize: 25,
    fontFamily: 'Roboto-Bold',
    color: colors.black,
  },
  popHead: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 10,
    marginHorizontal: 20,
  },
  popHeadTitle: {
    color: colors.black,
    fontFamily: 'Roboto-Bold',
    marginHorizontal: 5,
  },
  popDesc: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  popDescTitle: {
    fontSize: 16,
    color: colors.black,
    fontFamily: 'Roboto-Bold',
  },
  popDescSubTitle: {
    color: colors.text,
    // marginTop: 5,
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    marginLeft: 5,
  },
  popFooter: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  adBtn: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    // marginLeft: -10,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  ratingBox: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  popularMainCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.text,
    marginVertical: 10,
    borderRadius: 20,
    overflow: 'hidden',
  },
});

export default Home;
