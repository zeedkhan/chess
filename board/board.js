export function chessBoard() {
    return Array.from({ length: 8 }).map((i, row) => i = Array.from({ length: 8 })
        .map((i, k) => k % 2 === 0 && row % 2 === 0 || k % 2 !== 0 && row % 2 !== 0 ? i = 1 : 0));
}

export function cellCheck(cell1, cell2) {
    const 
        alphabet = 'abcdefgh',
        board = chessBoard(),
        _cell1 = board[alphabet.indexOf(cell1.charAt(0))][parseInt(cell1.charAt(1)-1)],
        _cell2 = board[board[alphabet.indexOf(cell2.charAt(0))][parseInt(cell2.charAt(1)-1)]];

    return _cell1 === _cell2 ? true : false
}