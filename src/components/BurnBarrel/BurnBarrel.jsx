import { useState } from "react";
import { FaFire } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import { BurnBarrelsContainer } from "./burn-barrels.css";
import PropTypes from "prop-types";

export default function BurnBarrel({ setCards }) {
    const [active, setActive] = useState(false);

    const handleDragOver = (e) => {
        e.preventDefault();
        setActive(true);
    }

    const handleDragLeave = () => {
        setActive(false);
    }

    const handleDragEnd = (e) => {
        const cardId = e.dataTransfer.getData("cardId");
        setCards(prevCards => prevCards.filter(card => card.id !== cardId));
        setActive(false);
    }

    return (
        <BurnBarrelsContainer 
            $active={active}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDragEnd}
        >
            { active ? <FaFire className="animate-bounce" /> : <FiTrash />}
        </BurnBarrelsContainer>
    )
}

BurnBarrel.propTypes = {
    setCards: PropTypes.func.isRequired
};