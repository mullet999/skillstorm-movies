import { Grid } from '@mui/material';
import Header, { Title, Body } from './components/Header';

export const App = () => {
    return (
        <Grid container justifyContent="center">
            <Grid item>
                <Header>
                    <Title>SkillStorm Movies</Title>
                    <Body>Enter your text here.</Body>
                </Header>
            </Grid>
        </Grid>
    );
}