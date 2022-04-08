import cloudySvg from '../../assets/cloud.svg';
import AverageData from '../AverageData/Component';
import classes from './styles.module.scss';

function TodayWeather() {
    return (
        <div className={classes['today-weather']}>
            <div className={classes.container}>
                <AverageData city="London" day="Sunday" temperature={13} time="6:00" />
                <div className={classes['general-data']}>
                    <div className={classes['data-item']}>
                        <div className={classes['data-item__time']}>08:00</div>
                        <div className={classes['data-item__weather-type']}>
                            <img src={cloudySvg} alt="cloudy" />
                        </div>
                        <div className={classes['data-item__temperature']}>13 °C</div>
                    </div>

                    <div className={classes['data-item']}>
                        <div className={classes['data-item__time']}>09:00</div>
                        <div className={classes['data-item__weather-type']}>
                            <img src={cloudySvg} alt="cloudy" />
                        </div>
                        <div className={classes['data-item__temperature']}>13 °C</div>
                    </div>

                    <div className={classes['data-item']}>
                        <div className={classes['data-item__time']}>10:00</div>
                        <div className={classes['data-item__weather-type']}>
                            <img src={cloudySvg} alt="cloudy" />
                        </div>
                        <div className={classes['data-item__temperature']}>13 °C</div>
                    </div>

                    <div className={classes['data-item']}>
                        <div className={classes['data-item__time']}>11:00</div>
                        <div className={classes['data-item__weather-type']}>
                            <img src={cloudySvg} alt="cloudy" />
                        </div>
                        <div className={classes['data-item__temperature']}>13 °C</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodayWeather;
