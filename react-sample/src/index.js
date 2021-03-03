import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// // Squareコンポーネント クラスコンポーネント
// class Square extends React.Component {
//   // //pthonで言うところのinitてきな?
//   // constructor(props) {
//   //   super(props); //constructorの直下、そーゆーものだと覚えときなさい。
//   //   this.state = {
//   //     //this.stateでpropsにデフォルト値を設定することができるぞ。
//   //     value: null,
//   //   };
//   // }

//   render() {
//     //setStateを使って、stateの状態を変更する。
//     return (
//       <button className="square" onClick={() => this.props.onClick()}>
//         {this.props.value}
//       </button>
//     );
//   }
// }

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

// Boardコンポーネント
class Board extends React.Component {
  //pthonで言うところのinitてきな?
  constructor(props) {
    //constructorの直下、そーゆーものだと覚えときなさい。
    super(props);
    this.state = {
      squares: Array(9).fill(null), //[ null, null, null, ... , null ]
      xIsNext: true,
    };
  }

  handleClick(i) {
    //stateを更新する一般的な流れ。①:更新したいstateを新しい変数に入れる。参照渡しさせない意図がある。=> ②:①で作ったのを更新する。=> ③:setStateで更新する！
    const squares = this.state.squares.slice(); //参照されないために新規で配列作り直している。
    squares[i] = this.state.xIsNext ? "X" : "O"; //squares配列を更新
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    }); //stateを更新
  }

  renderSquare(i) {
    //valueとonClickがSquareコンポーネントにpropsとして渡されている。
    return <Square value={this.state.Squares[i]} onClick={() => this.handleClick(i)} />;
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// Gameコンポーネント
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
