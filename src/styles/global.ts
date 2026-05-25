import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        min-height: 100vh;
        min-width: 100vw;
        overflow: hidden;
        background-color: ${(props) => props.theme.black};
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;

        @media (max-width: 1050px) {
            overflow-y: auto;
        }

    }
`;
