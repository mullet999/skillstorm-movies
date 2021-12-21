import { Typography, Box, styled } from '@mui/material';
import { Title as _Title } from './Title';
import { Body as _Body } from './Body';

export const Title = _Title;
export const Body = _Body;

const HeaderBox = styled(Box)`
    margin-top: 3em;
    padding: 1em;
    background-color: #343F50;
    border-radius: 50%;
    /* color: #D0D7DB; */
    color: #FFFFFF;
`;

const Header = ({children, props}) => {
    return (
        !children ? null : 
        <HeaderBox alignContent="center" textAlign="center" {...props}>
            <Typography>
                {children}
            </Typography>
        </HeaderBox>
        
        // <Paper elevation={5} sx={{padding: '1rem', backgroundColor: '#323E48', color: '#FFFFFF'}}>
        //     {children}
        // </Paper>
    );
};

export default Header;