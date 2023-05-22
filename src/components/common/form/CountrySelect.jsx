import React from 'react';
import { NativeSelect } from '@mantine/core';

import countyList from '../../../constants/countyList';

const getKrNameCountryList = () => {
  let krNameCountryList = [];

  for (const key of Object.keys(countyList)) {
    krNameCountryList = [...krNameCountryList, countyList[key].CountryNameKR];
  }

  return krNameCountryList.sort();
};

/**
 * useForm의 register('inputName') props로 전달
 *
 * @param {{...register('inputName') }}
 * @returns
 */

const CountrySelect = ({ name, onChange, onBlur, defaultCountry = '대한민국' }, ref) => (
  <NativeSelect
    name={name}
    ref={ref}
    defaultValue={defaultCountry}
    data={getKrNameCountryList()}
    onChange={onChange}
    onBlur={onBlur}
  />
);

export default React.forwardRef(CountrySelect);
