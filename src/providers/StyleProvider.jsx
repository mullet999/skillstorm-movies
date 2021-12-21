import { CssBaseline } from "@mui/material";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body {
        background-color: #192437;
    }
`;

export const StyleProvider = ({ children }) => {
    return (
        <>
            <CssBaseline />
            <GlobalStyle />
            {children}
        </>
    );
}