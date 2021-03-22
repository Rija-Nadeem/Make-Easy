import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {
  FoodCard,
  FoodIcon,
  HorizontalList,
  ItemCard,
  Wrapper,
} from '../Components';
import {colors, fonts, metrics} from '../utils/Theme';
import data from '../../data'

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const {item,index,onPress,selected} = this.props;
    return (
        <TouchableWithoutFeedback
          onPress={onPress}>
          <View style={{}} >
            <View style={[styles.category,{
            shadowOpacity: selected ? 0.34: 0.20,
            shadowRadius:  selected ? 6.27: 1.41,
            
            elevation: selected?  10: 2,
            }]}>
              <Text
                style={[
                  styles.categoryText,
                  {
                    fontWeight:
                      selected ? 'bold': 'normal',
                      fontFamily:selected ? fonts.primaryBold:fonts.primary
                  },
                ]}>
                {item.name}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      );
  }
}

const styles = StyleSheet.create({
    category: {
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'white',
      borderRadius:3,
      marginVertical: metrics.smallMargin,
      marginRight:2,
      // paddingHorizontal:10,
      marginLeft:metrics.smallMargin,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation: 2,
      
    },
    categoryText: {
      fontFamily: fonts.primary,
      fontSize: 14,
      textAlign: 'center',
      width:'100%',
      padding:10,
      textTransform: 'capitalize',
      color:colors.grey
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 5,
      marginTop:5
    },
  });
  