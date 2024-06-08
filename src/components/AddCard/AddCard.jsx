import { FiPlus } from "react-icons/fi";
import { AddCardButton, AddCardForm } from "./add-card.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';

export default function AddCard({ column, setCards }) {
    const [text, setText] = useState("");
    const [adding, setAdding] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === "") {
            return;
        }
        setCards(prev => [...prev, {
            id: nanoid(),
            title: text.trim(),
            column
        }])
        setText("");
        setAdding(false);
    }

    return (
        <>
            {adding ? 
                <AddCardForm layout onSubmit={handleSubmit}> 
                    <textarea 
                        onChange={(e) => setText(e.target.value)}
                        autoFocus
                        placeholder="Add new Task..."
                    />
                    <div className="wrapper">
                        <button
                            className="close-button"
                            onClick={() => setAdding(false)}
                        >
                            Close
                        </button>
                        <button
                            type="submit"
                            className="add-button">
                                <span>Add</span>
                                <FiPlus />
                        </button>
                    </div>
                </AddCardForm>                
                :
                <AddCardButton 
                    layout
                    className="add-card-button" 
                    onClick={() => setAdding(true)}
                > 
                    <span>Add Card</span><FiPlus />
                </AddCardButton>
            }
        </>
    )
}

AddCard.propTypes = {
    column: PropTypes.string.isRequired,
    setCards: PropTypes.func.isRequired
};