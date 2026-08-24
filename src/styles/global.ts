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

    h1, h2, h3, h4 {
        font-family: "Sora", sans-serif;
    }

    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme["gray-300"]};
        border-radius: 8px;
    }
`;
