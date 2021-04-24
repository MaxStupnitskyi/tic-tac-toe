import Square from '../Square/Square';
import './Field.sass';

function Field(props) {
	const renderSquare = id => {
		const classes = props.moves[id] !== '' ? `square ${props.moves[id]}` : 'square';
		return <Square classes={classes} move={() => props.move(id)} key={id} />;
	};
	return (
		<div className="field">
			{renderSquare(0)}
			{renderSquare(1)}
			{renderSquare(2)}
			{renderSquare(3)}
			{renderSquare(4)}
			{renderSquare(5)}
			{renderSquare(6)}
			{renderSquare(7)}
			{renderSquare(8)}
		</div>
	);
}
export default Field;
