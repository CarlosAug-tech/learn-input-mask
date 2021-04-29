import { createGlobalStyle } from 'styled-components';

import 'react-datepicker/dist/react-datepicker.min.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    &:focus {
      outline: 0;
    }
  }
`;
