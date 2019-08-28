import React, {useCallback, useEffect} from 'react';
import {Options, Navigation} from 'react-native-navigation';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {tabbedNavigation} from 'layouts';
import {startupActions} from 'redux/startup';
import {useDispatch} from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';
import Example from './imperative';

export interface HomeProps {
  componentId: string;
}

function Home({componentId}: HomeProps) {
  function renderInner(props) {
    return (
      <View style={styles.container}>
        <Text>test</Text>
      </View>
    );
  }

  const dispatch = useDispatch();
  return <Example/>
  return (
    <View style={styles.container}>
      <Text>df</Text>
      <BottomSheet
        snapPoints={[450, 300, 0]}
        renderContent={renderInner}
        renderHeader={renderInner}
      />
    </View>
  );
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Header />
        {global.HermesInternal == null ? null : (
          <View style={styles.engine}>
            <Text style={styles.footer}>Engine: Hermes</Text>
          </View>
        )}
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Push new screen</Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>See Your Changes</Text>
            <Text style={styles.sectionDescription}>
              <ReloadInstructions />
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Debug</Text>
            <Text style={styles.sectionDescription}>
              <DebugInstructions />
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Learn More</Text>
            <Text style={styles.sectionDescription}>
              Read the docs to discover what to do next:
            </Text>
          </View>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

Home.options = (): Options => ({
  topBar: {
    title: {
      text: 'Home Screen',
    },
  },
});

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  contentainer: {
    flex: 1
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default gestureHandlerRootHOC(Home);