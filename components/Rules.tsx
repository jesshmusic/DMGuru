import React, {useState} from 'react';
import {ListItem} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import Markdown from 'react-native-markdown-display';

export type Rule = {
  id: number,
  name: string,
  description: string,
  rules?: Rule[]
}

export const Rules = (props: { results: Rule[] }) => {
  const { results } = props;
  const [expanded, setExpanded] = useState(-1);

  const onExpand = (index: number) => {
    if (expanded === index) {
      setExpanded(-1);
    } else {
      setExpanded(index);
    }
  }

  const renderRuleDescription = (rule: Rule, i: number) => {
    return (
      <ListItem.Accordion
        key={rule.id}
        content={
          <ListItem.Content>
            <ListItem.Title style={{fontFamily: 'MrEaves'}}>{rule.name}</ListItem.Title>
          </ListItem.Content>
        }
        isExpanded={expanded === i}
        onPress={() => {
          onExpand(i);
        }}
        containerStyle={{backgroundColor: 'transparent'}}
        style={{backgroundColor: 'transparent', width: '100%'}}>
        <ListItem bottomDivider containerStyle={{backgroundColor: '#972C1D21', borderRadius: 4}}>
          <ListItem.Content>
            <Markdown style={styles}>{rule.description}</Markdown>
          </ListItem.Content>
          <ListItem.Chevron/>
        </ListItem>
      </ListItem.Accordion>
    )
  }

  return (
    <>
      {results.map((rule, i) => (renderRuleDescription(rule, i)))}
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Bookinsanity'
  },
  body: {
    fontFamily: 'Bookinsanity'
  }
});

