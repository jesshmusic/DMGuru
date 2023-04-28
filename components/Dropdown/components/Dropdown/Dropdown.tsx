import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropdownSelectedItemsView from './DropdownSelectedItemsView';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';
import {Colors} from '../../../../utilities/enums';

const Dropdown = ({
  label,
  placeholder,
  helperText,
  error,
  getSelectedItemsLabel,
  handleToggleModal,
  isMultiple,
  selectedItem,
  selectedItems,
  labelStyle,
  dropdownStyle,
  dropdownContainerStyle,
  selectedItemStyle,
  placeholderStyle,
  multipleSelectedItemStyle,
  dropdownErrorStyle,
  dropdownErrorTextStyle,
  dropdownHelperTextStyle,
  primaryColor,
  disabled,
}: any) => {
  return (
    <View style={[styles.dropdownInputContainer, dropdownContainerStyle]}>
      {label && label !== '' && (
        <Text style={[styles.label, labelStyle]}>{label}</Text>
      )}
      <DropdownSelectedItemsView
        placeholder={placeholder}
        error={error}
        getSelectedItemsLabel={getSelectedItemsLabel}
        handleToggleModal={handleToggleModal}
        isMultiple={isMultiple}
        selectedItem={selectedItem}
        selectedItems={selectedItems}
        dropdownStyle={dropdownStyle}
        selectedItemStyle={selectedItemStyle}
        multipleSelectedItemStyle={multipleSelectedItemStyle}
        dropdownErrorStyle={dropdownErrorStyle}
        primaryColor={primaryColor}
        disabled={disabled}
        placeholderStyle={placeholderStyle}
      />

      {error && error !== '' && (
        <Text style={[styles.error, dropdownErrorTextStyle]}>{error}</Text>
      )}

      {helperText && helperText !== '' && !error && (
        <Text style={[styles.helper, dropdownHelperTextStyle]}>
          {helperText}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'MrEaves',
    marginBottom: 2,
    color: Colors.primary,
    ...typography.caption
  },
  error: {
    color: Colors.danger,
    marginTop: 8,
    ...typography.caption
  },
  helper: { marginTop: 8, color: colors.primary, ...typography.caption },
  dropdownInputContainer: {
    width: '49%'
  },
  blackText: { color: colors.black },
});

export default Dropdown;
