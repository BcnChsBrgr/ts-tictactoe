import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { headerInterface, UserType } from "../interface";
import Board from "./Board";
const INITAL_ARRAY = Array<UserType | null>(9).fill(null);
export const Main: React.FC<headerInterface> = ({ title }: headerInterface) => {
    const [boardData, setBoardData] =
        useState<Array<UserType | null>>(INITAL_ARRAY);
    const [winner, setWinner] = useState<UserType | null>(null);
    const [currentUser, setCurrentUser] = useState<UserType>(UserType.X);

    const clickHandler = (index: number) => {
        if (boardData[index]) {
            return;
        }
        const newBoard = boardData;
        newBoard[index] = currentUser;
        console.log(newBoard);
        setBoardData(newBoard);
        setCurrentUser(currentUser === UserType.X ? UserType.O : UserType.X);
    };

    useEffect(() => {
        const winArray = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [1, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        winArray.forEach((element) => {
            if (
                boardData[element[0]] === boardData[element[1]] &&
                boardData[element[1]] === boardData[element[2]]
            ) {
                if (boardData[element[0]] === UserType.X) {
                    setWinner(UserType.X);
                } else if (boardData[element[0]] === UserType.O) {
                    setWinner(UserType.O);
                }
            }
        });
    }, [boardData, currentUser]);

    return (
        <Grid item xs={12} md={8}>
            <Typography variant="h6">{title}</Typography>
            <Paper elevation={0} sx={{ p: 2, bgcolor: "grey.200" }}>
                <Typography variant="h6">
                    Next player is: {currentUser}
                </Typography>

                <div style={{ width: "186px", height: "186px" }}>
                    {boardData.map((item: UserType | null, index: number) => {
                        return (
                            <Board
                                key={index}
                                boardData={item}
                                index={index}
                                clickHandler={clickHandler}
                            />
                        );
                    })}
                </div>

                <div>The Winner is: {winner}</div>
            </Paper>
        </Grid>
    );
};
export default Main;
