import styled from "styled-components";
import { motion } from "framer-motion";

export const CardContainer = styled(motion.div)`
    display: flex;
    cursor: grab;
    &:active {
        cursor: grabbing;
    }
    border-radius: .5rem;
    border: 1px solid #929191;
    padding: .3rem .8rem;
    background-color: #262626;
`
export const CardTitle = styled.p`
    font-size: 1rem;
    color: rgb(245 245 245);
`
