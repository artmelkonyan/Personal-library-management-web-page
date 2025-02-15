import { Board } from "./board";
import { Colors } from "./color";
import { Figure } from "./figures/figure";

export class Cell {
    x: number;
    y: number;
    color: Colors;
    figure: Figure | null;
    board: Board;
    avalable: boolean = false;
    id: number

    constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
        this.board = board;
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.id = Math.random();
    }

    getMove():any[][] {
        let moves:any[][] = [];

        if (this.figure) {
            alert("not empty");
            moves.push([this.x+1,this.y+1]);
        }

        return moves;
    }

    moveFigure(target: Cell) {
        if (this.figure && this.figure.canMove(target)) {//թարգեթը մեր ընտրած վանդակն է, եթե վրան կա ֆիգուր և anMoveը true է
            this.figure.moveFigure(target)// ֆիգուռը կարող ենք տեղաշարժել,թարգեթը վանդակն է որտեղուզում ենք տեղաշարժել
            target.figure = this.figure;//  տանել նշված դաշտ
            this.figure = null; //հեռացնել ֆիգուրը ընթացիկ դաշտից

        }

    }
}

