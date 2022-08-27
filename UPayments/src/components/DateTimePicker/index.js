import React from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
const DateTimePicker = props => {
  const { isVisible,mode,onConfirm,onCancel,date,minimumDate,maximumDate} = props;
  return (
    
      <DateTimePickerModal
        isVisible={isVisible}
        mode={mode}
        date={date}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    
  );
};

export default DateTimePicker;
