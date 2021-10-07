import { chessBoard } from "../board/board.js";

/**
 * @param  {string} [position] ex: a3, b3 in chess move
 * @return  {number} of valid available moves
 *
 * Using dynamic programming to handle the board for curren and valid position of knight/horse
 *
 */


/* COMMENT CODE USING FOR VISUALIZE */
export function knightMove(pos) {
    // index of row and column in chess board
    const alphabet = 'abcdefgh';

    /*   COMMENT FOR 2D visual     */
    // 1. Generate 2d array for dynamic programming;
    // const board = chessBoard();

    // get first string represent as column in board
    // const column = alphabet.indexOf(pos.charAt(0));

    // substract 1 for current to computr language
    // const currRow = pos.charAt(1) - 1;

    // remark the board with some char
    // board[currRow][column] = 'h';
    /* END VISUAL */

    // current position of knight in the board
    const metrixPos = [[pos.charAt(1) - 1], [alphabet.indexOf(pos.charAt(0))]];

    // generate empty []
    const result = []

    // possibility that horse can do in chess, you may think like X or Y
    const x = [2, 1, -1, -2, -2, -1, 1, 2]
    const y = [-1, 2, -2, -1, 1, 2, -2, 1]

    for (let i = 0; i < x.length; i++) {
        if (metrixPos[0][0] + x[i] <= 7 &&
            metrixPos[0][0] + x[i] >= 0 &&
            metrixPos[1][0] + y[i] <= 7 &&
            metrixPos[1][0] + y[i] >= 0) {

            // board[currRow + x[i]][column + y[i]] = `${i}` /* visual */
            result.push([x[i], y[i]])
        }
    }

    // see board
    // console.table(board); /* visual */
    return result.length
}