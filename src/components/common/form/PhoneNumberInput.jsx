import { Input } from '@mantine/core';
import React from 'react';

const formatPhoneNumber = value => {
  const phoneNumber = value.replace(/\D/g, '').slice(0, 11);

  return phoneNumber.replace(
    phoneNumber.length >= 11 ? /(\d{3})(\d{4})(\d{4})/ : /(\d{3})(\d{3})(\d{1,4})/,
    '$1-$2-$3'
  );
};

const PhoneNumberInput = ({ name, placeholder, onChange, onBlur, setValue }, ref) => {
  const handleChange = e => {
    setValue(name, formatPhoneNumber(e.target.value));
    onChange(e);
  };

  return <Input placeholder={placeholder} name={name} ref={ref} onChange={handleChange} onBlur={onBlur} />;
};

export default React.forwardRef(PhoneNumberInput);
