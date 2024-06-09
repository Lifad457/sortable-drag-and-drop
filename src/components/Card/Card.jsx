import PropTypes from 'prop-types';
import { CardContainer, CardTitle } from './card.css';
import DropIndicator from '../DropIndicator/DropIndicator';

export default function Card({ title, id, column, handleDragStart }) {
	return (
		<>
			<DropIndicator beforeId={id} column={column} />
			<CardContainer
				layout
				layoutId={id}
				draggable='true'
				onDragStart={(e) => handleDragStart(e, { title, id, column })}
			>
				<CardTitle>{title}</CardTitle>
			</CardContainer>
		</>
	);
}

Card.propTypes = {
	title: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	column: PropTypes.string.isRequired,
	handleDragStart: PropTypes.func.isRequired,
};
