import styled from '@emotion/styled';
import { Input, Flex } from '@mantine/core';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

const Wrapper = styled(Input.Wrapper)`
  width: 100%;
  position: relative;
  input,
  select,
  textarea {
    height: 50px;
    border-radius: 10px;
    background-color: var(--body-bg-color);
    color: var(--font-color);
  }

  textarea {
    height: 150px;
  }
`;

const InputWrapper = ({ label, desc, error, children }) => (
  <Wrapper
    label={label}
    error={
      error && (
        <Flex align="center" gap="4px">
          <AiOutlineExclamationCircle /> {error}
        </Flex>
      )
    }>
    {children}
    <Input.Description mt="8px">{desc}</Input.Description>
  </Wrapper>
);

export default InputWrapper;
