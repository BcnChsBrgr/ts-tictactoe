import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { GamePlayInterface } from "../interface";

export const Side: React.FC<GamePlayInterface> = ({
    side,
}: GamePlayInterface) => {
    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{ p: 2, bgcolor: "grey.200" }}>
                <Typography variant="h6" gutterBottom>
                    {side.title}
                </Typography>
                <Typography>{side.description}</Typography>
            </Paper>
        </Grid>
    );
};

export default Side;
