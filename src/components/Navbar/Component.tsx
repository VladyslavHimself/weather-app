import { useState } from 'react';
import ChooseMetricButton from '../ChooseMetricButton/Component';
import SearchField from '../SearchField/Component';
import classes from './styles.module.scss';

import logoSvg from '../../assets/logotype.svg';

function Navbar(): JSX.Element {
    const [inputField, setInputField] = useState<string>('');

    return (
        <div className={classes.navbar}>
            <div className={classes.container}>
                <div className={classes.logotype}>
                    <img src={logoSvg} alt="logotype" />
                </div>

                <div className={classes.search}>
                    <SearchField
                        stateValue={inputField}
                        setStateValue={setInputField}
                    />
                </div>
                <ChooseMetricButton />
            </div>
        </div>
    );
}

export default Navbar;
