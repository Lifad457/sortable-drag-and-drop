import { useState } from 'react';
import {
	CardContainer,
	CardCount,
	ColumnContainer,
	Title,
	Wrapper,
} from './columns.css';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import DropIndicator from '../DropIndicator/DropIndicator';
import AddCard from '../AddCard/AddCard';

export default function Column({
	title,
	headingColor,
	column,
	cards,
	setCards,
}) {
	const [active, setActive] = useState(false);
	const filteredCards = cards.filter((card) => card.column === column);

	const handleDragStart = (e, card) => {
		e.dataTransfer.setData('cardId', card.id);
	};

	const handleDragOver = (e) => {
		e.preventDefault();
		highlightIndicator(e);
		setActive(true);
	};

	const highlightIndicator = (e) => {
		const indicators = getIndicators();
		clearHighlights(indicators);
		const el = getNearestIndicator(e, indicators);
		el.element.style.opacity = '1';
	};

	const clearHighlights = (els) => {
		const indicators = els || getIndicators();
		indicators.forEach((indicator) => {
			indicator.style.opacity = '0';
		});
	};

	const getNearestIndicator = (e, indicators) => {
		const el = indicators.reduce(
			(closest, child) => {
				const box = child.getBoundingClientRect();
				const offset = e.clientY - box.top - box.height / 2;
				if (offset < 0 && offset > closest.offset) {
					return { offset: offset, element: child };
				}
				return closest;
			},
			{
				offset: Number.NEGATIVE_INFINITY,
				element: indicators[indicators.length - 1],
			}
		);

		return el;
	};

	const getIndicators = () => {
		return Array.from(
			document.querySelectorAll([`[data-column="${column}"]`])
		);
	};

	const handleDragLeave = () => {
		setActive(false);
		clearHighlights();
	};

	const handleDragEnd = (e) => {
		setActive(false);
		clearHighlights();
		const cardId = e.dataTransfer.getData('cardId');

		const indicators = getIndicators();
		const el = getNearestIndicator(e, indicators);
		const before = el.element.dataset.before || '-1';

		if (before !== cardId) {
			let copy = [...cards];

			let cardToMove = copy.find((card) => card.id === cardId);
			if (!cardToMove) return;

			cardToMove = { ...cardToMove, column };

			copy = copy.filter((card) => card.id !== cardId);

			const moveToBack = before === '-1';

			if (moveToBack) {
				copy.push(cardToMove);
			} else {
				const index = copy.findIndex((card) => card.id === before);
				if (index === undefined) return;
				copy.splice(index, 0, cardToMove);
			}

			setCards(copy);
		}
	};

	return (
		<ColumnContainer>
			<Wrapper>
				<Title $headingColor={headingColor}>{title}</Title>
				<CardCount>{filteredCards.length}</CardCount>
			</Wrapper>
			<CardContainer
				onDragOver={handleDragOver}
				onDragLeave={handleDragLeave}
				onDrop={handleDragEnd}
				$active={active}
			>
				{filteredCards.map((card) => {
					return (
						<Card
							key={card.id}
							{...card}
							handleDragStart={handleDragStart}
						/>
					);
				})}
				<DropIndicator beforeId='-1' column={column} />
				<AddCard column={column} setCards={setCards} />
			</CardContainer>
		</ColumnContainer>
	);
}

Column.propTypes = {
	title: PropTypes.string.isRequired,
	headingColor: PropTypes.string.isRequired,
	column: PropTypes.string.isRequired,
	cards: PropTypes.array.isRequired,
	setCards: PropTypes.func.isRequired,
};
