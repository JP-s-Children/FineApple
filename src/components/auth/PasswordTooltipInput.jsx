import React from 'react';
import styled from '@emotion/styled';
import { Tooltip, Stack, Title, Flex, Text, Input, Container } from '@mantine/core';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const TooltipBoxContainer = styled(Stack)`
  width: 300px;
  color: var(--font-color);
  background-color: var(--body-bg-color);
  padding: 20px;
  border: 1px solid #a3a3a3;
  border-radius: 6px;
`;

const TooltipBox = ({ value }) => {
  const validList = [
    { regExp: /.{8,}/, text: '8자 이상' },
    { regExp: /^(?=.*[a-z])(?=.*[A-Z]).+$/, text: '대소문자' },
    { regExp: /\d+/, text: '숫자 한개 이상' },
  ];

  return (
    <TooltipBoxContainer>
      <Title order={6}>암호 필수 조건</Title>
      {validList.map(({ regExp, text }) => (
        <Flex key={text} c={regExp.test(value) ? '#00a000' : '#a3a3a3'} align="center" gap="xs">
          <AiOutlineCheckCircle fontSize="20px" />
          <Text>{text}</Text>
        </Flex>
      ))}
    </TooltipBoxContainer>
  );
};

const PasswordTooltipInput = ({ name, placeholder, onChange, onBlur }, ref) => {
  const [value, setValue] = React.useState('');
  const [opened, setOpened] = React.useState(false);

  const handleChange = e => {
    onChange(e);
    setValue(e.target.value);
  };

  const handleBlur = e => {
    onBlur(e);
    setOpened(false);
  };

  return (
    <Container w="100%" p="0">
      <Tooltip label={<TooltipBox value={value} />} opened={opened} p="0">
        <Input
          type="password"
          placeholder={placeholder}
          name={name}
          ref={ref}
          onFocus={() => setOpened(true)}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </Tooltip>
    </Container>
  );
};

export default React.forwardRef(PasswordTooltipInput);
