import base from 'mdx-deck/themes';
import { theme } from '@sumup/circuit-ui';

export default {
  ...base,
  font: theme.circuit.fontStack.default,
  css: `
    @font-face {
      font-family: 'aktiv-grotesk';
      font-weight: 400;
      src: url('https://static.sumup.com/fonts/latin-greek-cyrillic/aktiv-grotest-400.woff2') format('woff2'),
        url('https://static.sumup.com/fonts/latin-greek-cyrillic/aktiv-grotest-400.woff') format('woff'),
        url('https://static.sumup.com/fonts/latin-greek-cyrillic/aktiv-grotest-400.eot') format('embedded-opentype');
    }
    @font-face {
      font-family: 'aktiv-grotesk';
      font-weight: 700;
      src: url('https://static.sumup.com/fonts/latin-greek-cyrillic/aktiv-grotest-700.woff2') format('woff2'),
        url('https://static.sumup.com/fonts/latin-greek-cyrillic/aktiv-grotest-700.woff') format('woff'),
        url('https://static.sumup.com/fonts/latin-greek-cyrillic/aktiv-grotest-700.eot') format('embedded-opentype');
    }
    
    font-size: 16px;
    text-align: center;

    @media screen and (min-width:64em) {
      font-size: 32px;
    }`
};
