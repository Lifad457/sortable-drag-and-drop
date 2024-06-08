import styled from "styled-components";

export const BurnBarrelsContainer = styled.div`
display: grid;
    margin-top: 2.5rem;
    height: 14rem;
    width: 14rem;
    flex-shrink: 0;
    place-content: center;
    border-radius: 0.25rem;
    border-width: 1px;
    font-size: 1.875rem;
    line-height: 2.25rem;
    border-color: ${props => props.$active ? "rgb(153, 27, 27)" : "rgb(115, 115, 115)"};
    background-color: ${props => props.$active ? "rgba(153,  27,  27, .2)" : "rgb(115,  115,  115, .2)"};
    color: ${props => props.$active ? "rgb(153, 27, 27)" : "rgb(115, 115, 115)"};

    .animate-bounce {
        animation: bounce 1s infinite;

        @keyframes bounce {
            0%, 100% {
                transform: translateY(-25%);
                animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
            }
            50% {
                transform: translateY(0);
                animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
            }
        }
    }
`