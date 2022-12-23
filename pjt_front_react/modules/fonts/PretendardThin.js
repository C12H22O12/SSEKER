import { createGlobalStyle } from "styled-components";
import PretendardThin from "../../asset/fonts/Pretendard-Thin.woff2";

const PretendardThin = createGlobalStyle`
      @font-face {
          font-family: 'PretendardThin';
          src: url(${PretendardThin}) format('woff2');
          font-weight: normal;
          font-style: normal;
      }
  `;

export default PretendardThin;