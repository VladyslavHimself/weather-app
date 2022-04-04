import 'normalize.css';
import Navbar from '../Navbar/Component';
import classes from './styles.module.scss';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className={classes['daily-weather']}>hello</div>
        </div>
    );
}

export default App;
