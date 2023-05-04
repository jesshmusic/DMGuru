import React from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../../styles/colors';
import { inputStyles } from '../../styles/input';
import Entypo from '@expo/vector-icons/Entypo';
import {Colors} from '../../../../utilities';

const DropdownSelectedItemsView = ({
  placeholder,
  error,
  getSelectedItemsLabel,
  handleToggleModal,
  isMultiple,
  selectedItem,
  selectedItems,
  dropdownStyle,
  selectedItemStyle,
  placeholderStyle,
  multipleSelectedItemStyle,
  dropdownErrorStyle,
  primaryColor,
  disabled,
}: any) => {
  return (
    <Pressable
      onPress={() => handleToggleModal()}
      style={({ pressed }) => [
        pressed && {
          ...inputStyles.inputFocusState,
          borderColor: primaryColor,
        },
        inputStyles.input,
        dropdownStyle,
        error && //this must be last
          error !== '' &&
          !pressed && {
            ...inputStyles.inputFocusErrorState,
            ...dropdownErrorStyle,
          },
      ]}
      disabled={disabled}
    >
      <ScrollView
        horizontal
        alwaysBounceHorizontal
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={styles.selectedItemsContainer}
          onStartShouldSetResponder={() => true}
        >
          {isMultiple ? (
            getSelectedItemsLabel().map((item: any, i: Number) => (
              <TouchableOpacity
                onPress={() => handleToggleModal()}
                key={`react-native-input-select-${Math.random()}-${i}`}
                disabled={disabled}
              >
                <Text
                  style={[
                    styles.selectedItems,
                    { backgroundColor: primaryColor },
                    multipleSelectedItemStyle,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))
          ) : (
            <TouchableOpacity
              onPress={() => handleToggleModal()}
              disabled={disabled}
            >
              <Text style={[styles.blackText, selectedItemStyle]}>
                {getSelectedItemsLabel()}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {!selectedItem && selectedItems?.length === 0 && (
          <Text style={[styles.blackText, placeholderStyle]}>
            {placeholder ?? 'Select an option'}
          </Text>
        )}
      </ScrollView>
      <View style={styles.iconStyle}>
        <Entypo name="chevron-thin-down" size={15} color={Colors.white} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconStyle: { position: 'absolute', right: 20, top: 12 },
  selectedItemsContainer: { flexDirection: 'row', flexWrap: 'nowrap' },
  selectedItems: {
    color: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: colors.primary,
    marginRight: 10,
    overflow: 'hidden',
  },
  blackText: { color: colors.black },
});

export default DropdownSelectedItemsView;
