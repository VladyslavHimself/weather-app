import 'normalize.css';
import { useState } from 'react';
import logoSvg from '../../assets/logotype.svg';
import SearchField from '../SearchField/Component';

import classes from './styles.module.scss';

function App() {
    const [first, setfirst] = useState<string>('');

    return (
        <div className="App">
            <div className={classes.navbar}>
                <div className={classes.container}>
                    <div className={classes.logotype}>
                        <img src={logoSvg} alt="logotype" />
                    </div>
                    <div className={classes.search}>
                        <SearchField
                            stateValue={first}
                            setStateValue={setfirst}
                        />
                    </div>
                    <div className={classes.metrics}>s</div>
                </div>
            </div>
        </div>
    );
}

export default App;
