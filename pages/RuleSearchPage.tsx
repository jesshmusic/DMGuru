import PageLayout from '../containers/PageLayout';
import React, { useRef, useState } from 'react';
import { FrameView } from '../containers/FrameView';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { API_URL, Colors } from '../utilities';
import DMButton from '../components/DMButton';
import DndSpinner from '../components/DndSpinner';
import axios from 'axios/index';
import { Rule, Rules } from '../components/Rules';

export const RuleSearchPage = () => {
  const [results, setResults] = useState<Rule[]>([]);
  const [noResultsText, setNoResultsText] = useState(false);
  const [searchTerm, onChangeSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const itemSize = 52;
  const scrollView = useRef(null);

  const searchRules = async () => {
    const apiURL = `${API_URL}/v1/rules.json?search=${searchTerm}`;
    setNoResultsText(false);
    try {
      setIsLoading(true);
      const response = await axios.get<{ name: string }>(apiURL);
      setIsLoading(false);
      // @ts-ignore
      const newResults = response.data.results.map((result) => {
        return {
          name: result.name,
          id: result.id,
          description: result.description,
          rules: result.rules,
        };
      });
      const filteredResults = newResults.filter((res) => {
        return !res.rules || res.rules.length < 1;
      });
      if (filteredResults.length < 1) {
        setNoResultsText(true);
      }
      setResults(filteredResults);
    } catch (error) {
      setResults([]);
      setIsLoading(false);
    }
  };

  const handlePress = (index) => {
    if (index === -1) {
      scrollView.current.scrollTo({ x: 0, y: 0, animated: true });
    } else {
      scrollView.current.scrollTo({
        x: 0,
        y: itemSize * index + 200,
        animated: true,
      });
    }
  };

  const renderResults = () => {
    return <Rules results={results} onPress={handlePress} />;
  };

  return (
    <PageLayout>
      <ScrollView style={styles.scrollView} ref={scrollView}>
        <FrameView
          title="Rules"
          subtitle="Search the SRD Rules for D&D 5e"
          iconName="Rules"
        >
          <TextInput
            style={styles.input}
            onChangeText={onChangeSearchTerm}
            value={searchTerm}
          />
          <DMButton title="Search" onClick={searchRules} />
          <View style={styles.container}>
            {noResultsText && (
              <Text style={styles.text}>The Sages found NOTHING!</Text>
            )}
            {isLoading ? (
              <DndSpinner text="Searching ancient texts..." />
            ) : (
              results.length > 0 && renderResults()
            )}
          </View>
        </FrameView>
      </ScrollView>
    </PageLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  scrollView: {
    margin: 0,
    paddingHorizontal: 10,
    paddingVertical: 0,
    width: '100%',
  },
  input: {
    backgroundColor: Colors.primaryLight,
    borderColor: Colors.primary,
    borderRadius: 5,
    borderWidth: 2,
    fontFamily: 'ScalySans',
    marginVertical: 5,
    padding: 15,
  },
  text: {
    color: Colors.warningDark,
    fontFamily: 'MrEaves',
    fontSize: 20,
    marginVertical: 20,
    textAlign: 'center',
  },
});
