import React from 'react';
import Field from '../Field/Field';
import './App.sass';

export default class App extends React.Component {
	state = {
		xTurn: true,
		moves: Array(9).fill(''),
		title: 'Turn: X',
	};

	move(id) {
		const moves = this.state.moves.map((i, idx) =>
			idx === id ? (this.state.xTurn ? 'x' : 'o') : i
		);

		this.setState({
			xTurn: !this.state.xTurn,
			moves: moves,
			title: this.state.xTurn ? 'Turn: O' : 'Turn: X',
		});
	}

	endGame() {
		document.querySelectorAll('.square').forEach(i => (i.disabled = true));
	}

	restart() {
		this.setState({
			xTurn: true,
			moves: Array(9).fill(''),
			title: 'Turn: X',
		});
		document.querySelectorAll('.square').forEach(i => (i.disabled = false));
	}

	checkWinner() {
		const wins = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		const moves = this.state.moves;

		let res = null;

		wins.forEach(comb => {
			if (
				moves[comb[0]] &&
				moves[comb[0]] === moves[comb[1]] &&
				moves[comb[2]] === moves[comb[1]]
			) {
				res = moves[comb[0]];
				this.endGame();
			}
			if (!moves.includes('')) res = 'draw';
		});
		return res;
	}

	render() {
		const winner = this.checkWinner();
		let title;
		switch (winner) {
			case 'x':
			case 'o':
				title = `${winner.toUpperCase()} is the winner!`;
				break;
			case 'draw':
				title = 'It`s a draw';
				break;
			default:
				title = this.state.title;
		}

		const restart = winner ? 'New Game' : 'Restart';
		return (
			<div className="game">
				<h1 className="title">{title}</h1>
				<Field turn={this.state.xTurn} moves={this.state.moves} move={id => this.move(id)} />
				<button className="restart" onClick={() => this.restart()}>
					{restart}
				</button>
			</div>
		);
	}
}
