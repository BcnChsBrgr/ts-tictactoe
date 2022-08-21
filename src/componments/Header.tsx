import React from "react";
import { headerInterface } from "../interface";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export const Header: React.FC<headerInterface> = ({
    title,
}: headerInterface) => {
    return (
        <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Typography
                component="h2"
                variant="h5"
                color="inherit"
                align="center"
                noWrap
                sx={{ flex: 1 }}
            >
                {title}
            </Typography>
        </Toolbar>
    );
};
export default Header;
