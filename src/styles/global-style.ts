import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { media } from "styles/theme";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        font-size: 16px;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    button {
        background: none;
        border: none;
        cursor: pointer;
    }
    .pc-only {
        display: block;
        ${media.mobile} {
            display: none;
        }
    }
    .mobile-only {
        display: none;
        ${media.mobile} {
            display: block;
        }
    }
`;
