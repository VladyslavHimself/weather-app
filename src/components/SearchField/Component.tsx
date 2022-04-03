import React from 'react';
import loopaSvg from '../../assets/loopa.svg';
import classes from './styles.module.scss';

interface IProps {
    stateValue: string;
    setStateValue: React.Dispatch<React.SetStateAction<string>>;
    onSearchHandler?: () => void;
}

function SearchField({
    stateValue,
    setStateValue,
    onSearchHandler,
}: IProps): JSX.Element {
    return (
        <div className={classes['search-field']}>
            <input
                value={stateValue}
                className={classes['search-bar']}
                type="text"
                onChange={(e): void => setStateValue(e.target.value)}
            />
            <button
                onClick={onSearchHandler}
                type="button"
                className={classes.button}
            >
                <img src={loopaSvg} alt="loopa" />
            </button>
        </div>
    );
}

SearchField.defaultProps = {
    onSearchHandler: null,
};

export default SearchField;
