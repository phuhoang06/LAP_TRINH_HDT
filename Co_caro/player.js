class Game {
    constructor(size) {
        this.size = size;
        this.board = [];
        this.player1 = "x";
        this.player2 = "o";
        this.player1Color = "red";
        this.player2Color = "blue";
        this.player1Turn = true;
        this.initBoard();
        this.drawBoard();
        this.addBoardEvent();
    }

    drawBoard() {
        let s = `<table>`;
        for (let i = 0; i < this.size; i++) {
            s += `<tr>`;
            for (let j = 0; j < this.size; j++) {
                s += `<td class="cell" id="${i}_${j}"></td>`;
            }
            s += `</tr>`;
        }
        s += `</table>`;
        document.write(s);
    }

    initBoard() {
        for (let i = 0; i < this.size; i++) {
            this.board[i] = [];
            for (let j = 0; j < this.size; j++) {
                this.board[i][j] = "";
            }
        }
    }

    addBoardEvent() {
        let cells = document.getElementsByClassName("cell");
        for (const cell of cells) {
            cell.addEventListener("click", this.enterCell.bind(this));
        }
    }

    enterCell(event) {
        let target = event.target;
        let sArr = target.id.split("_");
        let x = +sArr[0];
        let y = +sArr[1];
        if (this.board[x][y] !== "") {
            return;
        }
        if (this.player1Turn) {
            this.board[x][y] = this.player1;
            target.innerHTML = this.player1;
            target.style.color = this.player1Color;
        } else {
            this.board[x][y] = this.player2;
            target.innerHTML = this.player2;
            target.style.color = this.player2Color;
        }
        this.checkIfWin(x, y);
        this.player1Turn = !this.player1Turn;
    }

    checkIfWin(x, y) {
        let type = this.player1Turn ? this.player1 : this.player2;
        let col = this.recursiveCheck(x + 1, y, 1, 0, type) + this.recursiveCheck(x - 1, y, -1, 0, type) + 1;
        let row = this.recursiveCheck(x, y + 1, 0, 1, type) + this.recursiveCheck(x, y - 1, 0, -1, type) + 1;
        let leftSlash = this.recursiveCheck(x + 1, y + 1, 1, 1, type) + this.recursiveCheck(x - 1, y - 1, -1, -1, type) + 1;
        let rightSlash = this.recursiveCheck(x + 1, y - 1, 1, -1, type) + this.recursiveCheck(x - 1, y + 1, -1, 1, type) + 1;
        if (col >= 5 || row >= 5 || leftSlash >= 5 || rightSlash >= 5) {
            this.declareWinner();
        }
    }

    recursiveCheck(x, y, dX, dY, type) {
        if (this.board[x] && this.board[x][y] === type) {
            return this.recursiveCheck(x + dX, y + dY, dX, dY, type) + 1;
        } else {
            return 0;
        }
    }

    declareWinner() {
        if (this.player1Turn) {
            alert("Player 1 WIN");
        } else {
            alert("Player 2 WIN");
        }
    }
}

function createGame() {
    let size = prompt("Enter board size: ");
    new Game(size);
}

createGame();