import { useEffect, useState } from "react";
import { BoardContainer } from "./board.css";
import Column from "../Column/Column";
import { DEFAULT_CARDS } from "../../utils/config";
import BurnBarrel from "../BurnBarrel/BurnBarrel";

export default function Board() {
    const [cards, setCards] = useState([])
    const [hasCheckedLocalStorage, setHasCheckedLocalStorage] = useState(false)

    useEffect(() => {
        hasCheckedLocalStorage && localStorage.setItem("cards", JSON.stringify(cards))
    }, [cards])

    useEffect(() => {
        const cardData = localStorage.getItem("cards")

        setCards(cardData ? JSON.parse(cardData) : [])
        setHasCheckedLocalStorage(true)
    }, [])

    return (
        <BoardContainer>
            <Column
                title="Backlog"
                column="backlog"
                headingColor="lightgray"
                cards={cards}
                setCards={setCards}
            />
            <Column
                title="TODO"
                column="todo"
                headingColor="yellow"
                cards={cards}
                setCards={setCards}
            />
            <Column
                title="In progress"
                column="doing"
                headingColor="cornflowerblue"
                cards={cards}
                setCards={setCards}
            />
            <Column
                title="Complete"
                column="done"
                headingColor="lightseagreen"
                cards={cards}
                setCards={setCards}
            />
            <BurnBarrel setCards={setCards} />
        </BoardContainer>
    )
}