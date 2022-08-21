import React from "react";
import { Container, createTheme, Grid, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./Header";
import Main from "./Main";
import Side from "./Side";

const theme = createTheme();
const title: string = "Tic-Tac-Toe";
const gamePlay = {
    title: "TicTacToe - how to play?",
    description:
        "The game is played on a grid that's 3 squares by 3 squares. You are X, your friend (or the computer in this case) is O. Players take turns putting their marks in empty squares. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner. When all 9 squares are full, the game is over.",
};
export const Game: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title={title} />
                <main>
                    <Grid container spacing={4}>
                        <Main key="0" title={title} />
                        <Side key="1" side={gamePlay} />
                    </Grid>
                </main>
            </Container>
        </ThemeProvider>
    );
};

export default Game;
