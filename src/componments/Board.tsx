import React from "react";
import { UserType } from "../interface";
interface BoardInterface {
    boardData: UserType | null;
    index: number;
    clickHandler: (index: number) => void;
}

export const Board: React.FC<BoardInterface> = ({
    boardData,
    index,
    clickHandler,
}: BoardInterface) => {
    return (
        <div
            style={{
                width: "60px",
                height: "60px",
                backgroundColor: "white",
                float: "left",
                border: "black 1px solid",
            }}
            onClick={() => {
                clickHandler(index);
            }}
        >
            {boardData}
        </div>
    );
};
export default Board;
