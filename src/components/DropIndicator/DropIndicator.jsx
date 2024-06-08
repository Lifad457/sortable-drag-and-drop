import PropTypes from 'prop-types';
import { DropIndicatorContainer } from './drop-indicator.css';

export default function DropIndicator({ beforeId, column }) {
    return (
        <DropIndicatorContainer data-before={beforeId || "-1"} data-column={column} />
    )
}

DropIndicator.propTypes = {
    beforeId: PropTypes.string,
    column: PropTypes.string.isRequired
};