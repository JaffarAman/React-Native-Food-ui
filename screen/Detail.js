import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FeatureIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../assets/color/color';

const Detail = ({navigation, route}) => {
  const {item} = route.params;
  console.log(item, 'ponk');

  const ingredientsItem = ({item}) => {
    return (
      <View style={styles.imagesCardWrapper}>
        <Image
          //   resizeMode="conatin"
          style={styles.imagesCard}
          source={item.image}
        />
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={{flex: 1}}>
        {/* /header// */}
        <View style={styles.headerBox}>
          {/* //back icon */}
          <View style={styles.rightArrowBox}>
            <FeatureIcon
              onPress={() => navigation.navigate('Home')}
              color={colors.black}
              name="chevron-left"
              size={20}
            />
          </View>

          {/* //star  icon// */}
          <View style={styles.starBox}>
            <Icon name="star" color={'white'} size={20} />
          </View>
        </View>

        {/* //product Name // */}

        <View style={styles.productNameWrapper}>
          <Text style={styles.productTittle}>{item?.title.split(' ')[0]}</Text>
          <Text style={styles.productTittle}>{item?.title.split(' ')[1]}</Text>
        </View>

        {/* //price // */}
        <View style={styles.priceWrapper}>
          <Text style={styles.priceTitle}>${item?.price}</Text>
        </View>

        <View style={styles.sizeWrapper}>
          <Text style={styles.subHeadings}>Size</Text>
          <Text style={styles.subDetails}>
            {item?.sizeName} {item?.sizeNumber}"
          </Text>
        </View>

        <View style={styles.crustWrapper}>
          <Text style={styles.subHeadings}>Crust</Text>
          <Text style={styles.subDetails}>{item?.crust}</Text>
        </View>

        <View style={styles.deliveryWrapper}>
          <Text style={styles.subHeadings}>Delivery in</Text>
          <Text style={styles.subDetails}>{item?.deliveryTime} in</Text>
        </View>
        {/* /Ingredients/ */}
        <View style={styles.ingredientsWrapper}>
          <Text style={styles.ingredientsTitle}>Ingredients</Text>
          <FlatList
            data={item?.ingredients}
            renderItem={ingredientsItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.palceBtnwrapper}>
          <TouchableOpacity style={styles.palceBtn}>
            <Text style={styles.palceBtnTitle}>Place an order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerBox: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightArrowBox: {
    borderColor: colors.text,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
  },
  starBox: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: colors.primary,
  },
  productNameWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  productTittle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 30,
    color: colors.black,
  },
  priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  priceTitle: {
    fontSize: 30,
    color: colors.price,
  },
  sizeWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  crustWrapper: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  deliveryWrapper: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  subHeadings: {
    color: colors.text,
    fontSize: 16,
  },
  subDetails: {
    color: colors.black,
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
  },
  imagesCardWrapper: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginRight: 15,
    width: 100,
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.text,
  },
  imagesCard: {},
  ingredientsWrapper: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  ingredientsTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
    color: colors.black,
  },
  palceBtnwrapper: {
    marginVertical: 20,
    alignItems: 'center',
  },
  palceBtn: {
    backgroundColor: colors.primary,
    width: '80%',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  palceBtnTitle: {
    color: colors.black,
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
  },
});

export default Detail;
