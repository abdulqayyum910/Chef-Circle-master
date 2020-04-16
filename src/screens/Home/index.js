import 'react-native-get-random-values';
import React, {useState, useEffect} from 'react';
import {Text, Content, H1, Icon, Badge} from 'native-base';
import {Image, View} from 'react-native';
import styles from './styles';
import Carousel from 'react-native-banner-carousel';
import SnapCarousel from 'react-native-snap-carousel';
import {WebView} from 'react-native-webview';
import {screenWidth} from '../../constants/screen';
import AppFooter from '../../components/Footer';
import {useSelector} from 'react-redux';

const Home = (props) => {
  const [state, setState] = useState({
    data1: [
      {title: 'Chef Name'},
      {title: 'Chef Name'},
      {title: 'Chef Name'},
      {title: 'Chef Name'},
      {title: 'Chef Name'},
    ],
    data2: [
      {title: 'Recipe', price: '- 25$'},
      {title: 'Recipe', price: '- 11$'},
      {title: 'Recipe', price: '- 35$'},
      {title: 'Recipe', price: '- 45$'},
      {title: 'Recipe', price: '- 33$'},
    ],
  });
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.user === null) {
      return props.navigation.navigate('Authentication');
    }
  }, [auth.user]);

  const _renderCarouselItem1 = ({item, index}) => {
    return (
      <View key={index} style={styles.carouselItemsContainer}>
        <Image
          style={styles.carouselItemsImage}
          source={{
            uri:
              'https://i.pinimg.com/originals/1a/63/cd/1a63cd5b2c2ef316fd49e6980cc54dcb.jpg',
          }}
        />
        <Icon style={styles.carouselItemsIcon} name="md-git-network" />
        <Text style={styles.carouselItemsText}>{item.title}</Text>
      </View>
    );
  };

  const _renderCarouselItem2 = ({item, index}) => {
    return (
      <View key={index} style={styles.carouselItemsContainer}>
        <View>
          <Image
            style={styles.carouselItemsImage}
            source={{
              uri:
                'https://www.theday.com/storyimage/NL/20200324/ENT04/200329743/AR/0/AR-200329743.jpg&Maxw=800&q=62',
            }}
          />
          <Badge style={styles.carouselDiscountBadge}>
            <Text style={styles.carouselDiscountText}>50% Off</Text>
          </Badge>
        </View>
        <Icon style={styles.carouselItemsIcon} name="md-git-network" />
        <View style={styles.popularMealTextContainer}>
          <Icon style={styles.carouselItemsIcon} name="md-school" />
          <Text style={styles.carouselItemsText}>{item.title}</Text>
        </View>
        <View style={styles.popularMealPriceContainer}>
          <Text style={[styles.carouselItemsText, styles.carouselOldPrice]}>
            {item.price}
          </Text>
          <Text style={styles.carouselItemsText}>{item.price}</Text>
        </View>
      </View>
    );
  };

  let {data1, data2} = state;
  return (
    <React.Fragment>
      <Content>
        <Carousel
          autoplay
          autoplayTimeout={5000}
          loop
          index={0}
          pageIndicatorContainerStyle={styles.bannerPageIndicatorContainer}
          pageIndicatorStyle={styles.bannerPageIndicator}
          activePageIndicatorStyle={styles.bannerActivePageIndicator}
          pageIndicatorOffset={24}>
          <Image
            style={styles.bannerImages}
            source={{
              uri:
                'https://thumbs.dreamstime.com/z/chef-text-banner-super-chef-high-quality-flat-vector-illustration-design-concept-chef-indian-cuisine-funny-vector-118362377.jpg',
            }}
          />
          <Image
            style={styles.bannerImages}
            source={{
              uri:
                'https://thumbs.dreamstime.com/z/chef-fresh-food-text-vector-illustration-banner-super-high-quality-flat-design-concept-118362346.jpg',
            }}
          />
          <Image
            style={styles.bannerImages}
            source={{
              uri:
                'https://image.shutterstock.com/z/stock-vector-international-chef-day-greeting-card-or-horizontal-banner-vector-funny-cartoon-tiny-brown-smiling-1460915024.jpg',
            }}
          />
        </Carousel>
        <H1 style={styles.headings}>Latest Interview</H1>
        <WebView
          scalesPageToFit
          bounces={false}
          javaScriptEnabled
          automaticallyAdjustContentInsets={false}
          allowsFullscreenVideo
          source={{
            html:
              '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
          }}
          style={styles.iframe}
        />
        <H1 style={styles.headings}>Featured Chefs</H1>
        <View style={styles.carouselContainer}>
          <SnapCarousel
            itemWidth={screenWidth / 3}
            sliderWidth={screenWidth}
            firstItem={2}
            renderItem={_renderCarouselItem1}
            data={data1}
          />
        </View>
        <H1 style={styles.headings}>Popular Meals</H1>
        <View style={styles.carouselContainer}>
          <SnapCarousel
            itemWidth={screenWidth / 3}
            sliderWidth={screenWidth}
            firstItem={2}
            renderItem={_renderCarouselItem2}
            data={data2}
          />
        </View>
      </Content>
      <AppFooter />
    </React.Fragment>
  );
};

export default Home;
