import { useEffect, useState } from 'react';
import { BoardContainer } from './board.css';
import Column from '../Column/Column';
import BurnBarrel from '../BurnBarrel/BurnBarrel';
import { DEFAULT_VALUES } from '../../utils/config';

export default function Board() {
	const [cards, setCards] = useState([]);
	const [hasCheckedStorage, setHasCheckedStorage] = useState(false);

	useEffect(() => {
		hasCheckedStorage &&
			localStorage.setItem('cards', JSON.stringify(cards));
	}, [cards, hasCheckedStorage]);

	useEffect(() => {
		const handleStorage = () => {
			const cardData = localStorage.getItem('cards');
			setCards(cardData ? JSON.parse(cardData) : DEFAULT_VALUES);
			setHasCheckedStorage(true);
		};
		handleStorage();

		window.addEventListener('storage', handleStorage);
		return () => window.removeEventListener('storage', handleStorage);
	}, []);

	return (
		<BoardContainer>
			<Column
				title='À faire'
				column='a-faire'
				headingColor='lightgray'
				cards={cards}
				setCards={setCards}
			/>
			<Column
				title='En cours'
				column='en-cours'
				headingColor='yellow'
				cards={cards}
				setCards={setCards}
			/>
			<Column
				title='À tester'
				column='a-tester'
				headingColor='cornflowerblue'
				cards={cards}
				setCards={setCards}
			/>
			<Column
				title='Terminé'
				column='termine'
				headingColor='lightseagreen'
				cards={cards}
				setCards={setCards}
			/>
			<BurnBarrel setCards={setCards} />
		</BoardContainer>
	);
}
