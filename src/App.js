/* eslint-disable camelcase */
import React, { useCallback, useRef } from 'react';
import { FaBirthdayCake, FaRegIdCard } from 'react-icons/fa';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import * as Yup from 'yup';
import { Form } from '@unform/web';

import Input from './components/Input';
import getValidationErrors from './utils/getValidationErrors';

import GlobalStyle from './assets/Styles/global';

function App() {
  const formRef = useRef();

  const handleSubmit = useCallback(async (formData) => {
    const { date_birthday } = formData;

    console.log(date_birthday);

    const dateFormatted =
      date_birthday &&
      format(date_birthday, 'dd/MM/yyyy', {
        locale: pt,
      });

    console.log(dateFormatted);

    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        date_birthday: Yup.date().required('This field is required'),
        cpf: Yup.string().required('This field is required'),
        rg: Yup.string().required('This field is required'),
      });

      await schema.validate(formData, {
        abortEarly: false,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  return (
    <>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          type="date"
          name="date_birthday"
          labelText="Data de Nascimento"
          icon={FaBirthdayCake}
          isDate
        />
        <Input
          name="cpf"
          mask="999.999.99-99"
          labelText="CPF"
          icon={FaRegIdCard}
        />
        <Input
          name="rg"
          mask="99.999.999-*"
          labelText="RG"
          icon={FaRegIdCard}
        />
        <button type="submit">Enviar</button>
      </Form>
      <GlobalStyle />
    </>
  );
}

export default App;
