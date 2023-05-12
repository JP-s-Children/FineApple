import React from 'react';
import { Input, Flex } from '@mantine/core';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

/**
 * useForm의 register('inputName') props로 전달
 * 중복 체크하는 함수 기입 / boolean또는 프로스미스를 반환하는 함수
 * placeholder설정 가능
 *
 * @param {{...register('inputName'), placeholder, checker}}
 * @returns
 */

const DuplicateCheckInput = ({ checker, name, placeholder, onChange, onBlur }, ref) => {
  const [duplicated, setDuplicated] = React.useState(false);

  const handleBlur = async e => {
    const duplicated = await checker(e.target.value);

    onBlur(e);
    setDuplicated(duplicated);
  };

  return (
    <Input.Wrapper
      error={
        duplicated && (
          <Flex align="center" gap="4px">
            <AiOutlineExclamationCircle /> {`중복된 ${name}입니다.`}
          </Flex>
        )
      }>
      <Input placeholder={placeholder} name={name} ref={ref} onChange={onChange} onBlur={handleBlur} />
    </Input.Wrapper>
  );
};

export default React.forwardRef(DuplicateCheckInput);
