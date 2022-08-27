import React, { memo } from 'react';
import { View, SafeAreaView, Dimensions, Text } from 'react-native';
import styles from './styles';
import Loader from '../../components/Loader';
import HTML from 'react-native-render-html';
import { ScrollView } from 'react-native-gesture-handler';
import { colors, fonts, sizes } from '../../utils/theme';

const IntroductionComponent = memo(props => {
  const deviceWidth = Dimensions.get('window').width;
  const systemFonts = ['Poppins-Regular', 'Poppins-Bold'];

  return (
    <View safe style={styles.container}>
      <Loader loading={props.isLoading} />
      <SafeAreaView style={styles.safeContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.HeadingText}>Crane ChemPharma Energy</Text>
          <View>
            <Text>Designs and manuufactores highly engineered products; check valves, sleeved plug valves, lined valves, process ball valves, high performance butterfly valves, bellows sealed globe valves, aseptic and industrial diaphragm valves, multi / quarter-turn valves, actuation, sight glasses, lined pipe, fittings and hoses, and air operated diaphragm and peristaltic pumps.</Text>
            <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 10 }}>RESOLUTION</Text>
            <Text style={{ textAlign: 'center', fontSize: 15, marginTop: 5 }}>MADE BY</Text>
            <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 5 }}>RICHARD TELLER CRANE</Text>
            <Text style={{ textAlign: 'center', fontSize: 15, marginTop: 5 }}>FOUNDER OF</Text>
            <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 5 }}>CRANE CO.</Text>
            <Text style={{ textAlign: 'center', fontSize: 15, marginTop: 5 }}>ON JULY 4, 1855</Text>
            <Text style={{ textAlign: 'center', marginTop: 10 }}>I AM RESOLVED TO CONDUCT MY BUSINESS IN THE STRICTEST HONESTY AND FAIRNESS; TO AVOID ALL DECEPTION AND TRICKERY; TO DEAL FAIRLY WITH BOTH CUSTOMERS AND COMPETITORS; TO BE LIBERAL AND JUST TOWARD EMPLOYEES; AND TO PUT MY WHOLE MIND UPON THE BUSINESS.
              THE ESSENCE OF THIS RESOLUTION IS THE BUSINESS POLICY OF CRANE CO. TODAY</Text>
          </View>




        </ScrollView>
      </SafeAreaView>
    </View>
  );
});

export default IntroductionComponent;
