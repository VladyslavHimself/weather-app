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

            <div className={classes['detailed-now-weather']}>
                <div className={classes['detailed-now-weather__hint']}>Now</div>
                <div className={classes.container}>
                    <div className={classes['detailed-information-tab']}>
                        <div
                            className={
                                classes['detailed-information-tab__title']
                            }
                        >
                            Chance of Rain
                        </div>
                        <div
                            className={
                                classes['detailed-information-tab__data']
                            }
                        >
                            12%
                        </div>
                    </div>

                    <div className={classes['detailed-information-tab']}>
                        <div
                            className={
                                classes['detailed-information-tab__title']
                            }
                        >
                            Humidity
                        </div>
                        <div
                            className={
                                classes['detailed-information-tab__data']
                            }
                        >
                            60%
                        </div>
                    </div>

                    <div className={classes['detailed-information-tab']}>
                        <div
                            className={
                                classes['detailed-information-tab__title']
                            }
                        >
                            Wind speed
                        </div>
                        <div
                            className={
                                classes['detailed-information-tab__data']
                            }
                        >
                            10 k/h
                        </div>
                    </div>

                    <div className={classes['detailed-information-tab']}>
                        <div
                            className={
                                classes['detailed-information-tab__title']
                            }
                        >
                            Visibility
                        </div>
                        <div
                            className={
                                classes['detailed-information-tab__data']
                            }
                        >
                            100km
                        </div>
                    </div>

                    <div className={classes['detailed-information-tab']}>
                        <div
                            className={
                                classes['detailed-information-tab__title']
                            }
                        >
                            Pressure
                        </div>
                        <div
                            className={
                                classes['detailed-information-tab__data']
                            }
                        >
                            1015 hPa
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes['other-days-weather']}>
                <div className={classes.container}>
                    <div className={classes['weather-table']}>
                        <div className={classes['weather-table-item']}>
                            <div
                                className={
                                    classes['weather-table-item__data-title']
                                }
                            >
                                Day
                            </div>
                            <div
                                className={
                                    classes['weather-table-item__data-title']
                                }
                            >
                                Chance of rain
                            </div>
                            <div
                                className={
                                    classes['weather-table-item__data-title']
                                }
                            >
                                Humidity
                            </div>
                            <div
                                className={
                                    classes['weather-table-item__data-title']
                                }
                            >
                                Wind
                            </div>
                            <div
                                className={
                                    classes['weather-table-item__data-title']
                                }
                            >
                                Temperature
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
