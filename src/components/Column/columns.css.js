import styled from "styled-components";

export const ColumnContainer = styled.div`
    width: 15rem;
    flex-shrink: 0;
`
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Title = styled.h3`
    font-weight: 500;
    color: ${props => props.$headingColor || "black"};
`
export const CardCount = styled.span`
    font-size: .8rem;
    color: lightgray;
`
export const CardContainer = styled.div`
    height: 90%;
    width: 100%;
    background-color: ${props => props.$active ? "rgba(38, 38, 38, 0)" : "rgba(38, 38, 38, 0.5)"};
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
`
