import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { useField } from '@unform/core';

import { FaInfoCircle } from 'react-icons/fa';
import { Container, InputElement, Error, InputDate } from './styles';

export default function Input({
  isDate,
  name,
  labelText,
  icon: Icon,
  ...rest
}) {
  const inputRef = useRef();
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [date, setDate] = useState(defaultValue || null);
  const [isActiveFocus, setIsActiveFocus] = useState(!!date);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: isDate ? 'props.selected' : 'value',
      setValue(ref, value) {
        ref.setInputValue(value);
      },
      clearValue(ref) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container isActiveFocus={isActiveFocus}>
      {isDate ? (
        <>
          <InputDate
            ref={inputRef}
            selected={date}
            onFocus={() => setIsActiveFocus(true)}
            onBlur={() => setIsActiveFocus(!!date)}
            onChange={setDate}
            value={date}
            isErrored={!!error}
            dateFormat="dd/MM/yyyy"
          />
          {Icon && <Icon />}
          <label htmlFor="">{labelText}</label>
        </>
      ) : (
        <>
          <InputElement
            ref={inputRef}
            placeholder=" "
            isErrored={!!error}
            defaultValue={defaultValue}
            {...rest}
          />
          {Icon && <Icon />}
          <label htmlFor="">{labelText}</label>
        </>
      )}

      {error && (
        <Error title={error}>
          <FaInfoCircle size={16} />
        </Error>
      )}
    </Container>
  );
}

Input.propTypes = {
  isDate: PropTypes.bool,
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
};
