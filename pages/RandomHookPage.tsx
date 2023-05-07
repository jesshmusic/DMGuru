import PageLayout from '../containers/PageLayout';
import { RandomAdventureHookForm } from '../components/RandomAdventureHookForm';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export const RandomHookPage = () => {
  return (
    <PageLayout>
      <ScrollView style={styles.scrollView}>
        <RandomAdventureHookForm />
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
