import './Square.sass';

function Square(props) {
	const disabled = props.classes.includes('x') || props.classes.includes('o') ? true : false;
	return (
		<button className={props.classes} disabled={disabled} onClick={() => props.move()}></button>
	);
}

export default Square;
