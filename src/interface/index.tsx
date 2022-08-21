export enum UserType {
    X = "X",
    O = "O",
}
export interface headerInterface {
    title: string;
}
export interface GamePlayInterface {
    side: {
        title: string;
        description: string;
    };
}
