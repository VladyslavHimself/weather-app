import 'normalize.css';
import Navbar from '../Navbar/Component';
import classes from './styles.module.scss';
import cloudySvg from '../../assets/cloud.svg';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className={classes['today-weather']}>
                <div className={classes.container}>
                    <div className={classes['average-data']}>
                        <div className={classes['average-data__city']}>
                            London
                        </div>
                        <div className={classes['average-data__time']}>
                            Sunday 07:09
                        </div>
                        <div className={classes['average-data__temperature']}>
                            12°C
                        </div>
                    </div>
                    <div className={classes['general-data']}>
                        <div className={classes['data-item']}>
                            <div className={classes['data-item__time']}>
                                08:00
                            </div>
                            <div className={classes['data-item__weather-type']}>
                                <img src={cloudySvg} alt="cloudy" />
                            </div>
                            <div className={classes['data-item__temperature']}>
                                13 °C
                            </div>
                        </div>

                        <div className={classes['data-item']}>
                            <div className={classes['data-item__time']}>
                                09:00
                            </div>
                            <div className={classes['data-item__weather-type']}>
                                <img src={cloudySvg} alt="cloudy" />
                            </div>
                            <div className={classes['data-item__temperature']}>
                                13 °C
                            </div>
                        </div>

                        <div className={classes['data-item']}>
                            <div className={classes['data-item__time']}>
                                10:00
                            </div>
                            <div className={classes['data-item__weather-type']}>
                                <img src={cloudySvg} alt="cloudy" />
                            </div>
                            <div className={classes['data-item__temperature']}>
                                13 °C
                            </div>
                        </div>

                        <div className={classes['data-item']}>
                            <div className={classes['data-item__time']}>
                                11:00
                            </div>
                            <div className={classes['data-item__weather-type']}>
                                <img src={cloudySvg} alt="cloudy" />
                            </div>
                            <div className={classes['data-item__temperature']}>
                                13 °C
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="detailed-now-weather">
                <div className="detailed-now-weather__hint">Now</div>
                <div className="container">
                    <div className="detailed-information-tab">
                        <div className="detailed-information-tab__title">
                            Chance of Rain
                        </div>
                        <div className="detailed-information-tab__data">
                            12%
                        </div>
                    </div>

                    <div className="detailed-information-tab">
                        <div className="detailed-information-tab__title">
                            Humidity
                        </div>
                        <div className="detailed-information-tab__data">
                            60%
                        </div>
                    </div>

                    <div className="detailed-information-tab">
                        <div className="detailed-information-tab__title">
                            Wind speed
                        </div>
                        <div className="detailed-information-tab__data">
                            10 k/h
                        </div>
                    </div>

                    <div className="detailed-information-tab">
                        <div className="detailed-information-tab__title">
                            Visibility
                        </div>
                        <div className="detailed-information-tab__data">
                            100km
                        </div>
                    </div>

                    <div className="detailed-information-tab">
                        <div className="detailed-information-tab__title">
                            Pressure
                        </div>
                        <div className="detailed-information-tab__data">
                            1015 hPa
                        </div>
                    </div>
                </div>
            </div>
            <div className="detailed-daily-weather" />
        </div>
    );
}

export default App;
