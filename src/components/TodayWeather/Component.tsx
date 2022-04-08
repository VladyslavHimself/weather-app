import cloudySvg from '../../assets/cloud.svg';
import classes from './styles.module.scss';

function TodayWeather() {
    return (
        <div className={classes['today-weather']}>
            <div className={classes.container}>
                <div className={classes['average-data']}>
                    <div className={classes['average-data__city']}>London</div>
                    <div className={classes['average-data__time']}>Sunday 07:09</div>
                    <div className={classes['average-data__temperature']}>12°C</div>
                </div>
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
