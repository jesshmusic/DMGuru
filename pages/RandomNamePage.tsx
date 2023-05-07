import PageLayout from '../containers/PageLayout';
import { RandomNameForm } from '../components/RandomNameForm';
import React from 'react';
import { RandomTavernForm } from '../components/RandomTavernForm';
import { ScrollView, StyleSheet } from 'react-native';

export const RandomNamePage = () => {
  return (
    <PageLayout>
      <ScrollView style={styles.scrollView}>
        <RandomNameForm />
        <RandomTavernForm />
      </ScrollView>
    </PageLayout>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    margin: 0,
    paddingHorizontal: 10,
    paddingVertical: 0,
    width: '100%',
  },
});
