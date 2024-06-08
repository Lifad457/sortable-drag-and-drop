import styled from "styled-components";
import { motion } from "framer-motion";

export const AddCardForm = styled(motion.form)`
    textarea {
        width: 100%;
        border-radius: 0.25rem;
        border-width: 1px;
        border-color: rgb(167, 139, 250);
        background-color: rgba(167, 139, 250, .2);
        padding: 0.75rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: rgb(250 250 249);
        
        &::placeholder {
            color: rgb(167, 139, 250);
        }
        &:focus {
            outline: 0;
        }

    }
        
    .wrapper {
        display: flex;
        margin-top: 0.375rem;
        align-items: center;
        justify-content: end;
        gap: 0.375rem;

    }

    .close-button {
        padding-inline: 0.375rem;
        padding-block: 0.25rem;
        font-size: 0.75rem;
        line-height: 1rem;
        color: rgb(163, 163, 163);
        transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);
        background-color: inherit;
        border: none;

        &:hover {
            color: rgb(250, 250, 250);
        }
    }

    .add-button {
        display: flex;
        place-items: center;
        gap: 0.375rem;
        border-radius: 0.25rem;
        background-color: rgb(250 250 250);
        padding-inline: 0.375rem;
        padding-block: 0.25rem;
        font-size: 0.75rem;
        line-height: 1rem;
        color: rgb(10 10 10);
        transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
        border: none;

        &:hover {
            background-color: rgb(212 212 212);
        }
    }
`
export const AddCardButton = styled(motion.button)`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 0.375rem;
    padding-inline: 0.75rem;
    padding-block: 0.375rem;
    font-size: 0.75rem;
    line-height: 1rem;
    color: rgb(163 163 163);
    transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);
    background-color: inherit;
    border: none;

    &:hover {
        color: rgb(250 250 250);
    }
`