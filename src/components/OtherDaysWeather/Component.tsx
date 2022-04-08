import classes from './styles.module.scss';

function OtherDaysWeather() {
    return (
        <div className={classes['other-days-weather']}>
            <div className={classes.container}>
                <div className={classes['weather-table']}>
                    <div className={classes['weather-table-item--title']}>
                        <div className={classes['weather-table-item__container']}>
                            <div className={classes['weather-table-item__data-title']}>Day</div>
                            <div className={classes['weather-table-item__data-title']}>Chance of rain</div>
                            <div className={classes['weather-table-item__data-title']}>Humidity</div>
                            <div className={classes['weather-table-item__data-title']}>Wind</div>
                            <div className={classes['weather-table-item__data-title']}>Temperature</div>
                        </div>
                        <hr />
                    </div>

                    <div className={classes['weather-table-item']}>
                        <div className={classes['weather-table-item__container']}>
                            <div className={classes['weather-table-item__data-title']}>Mon</div>
                            <div className={classes['weather-table-item__data-title']}>9%</div>
                            <div className={classes['weather-table-item__data-title']}>57%</div>
                            <div className={classes['weather-table-item__data-title']}>10 km/h</div>
                            <div className={classes['weather-table-item__data-title']}>19˚</div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OtherDaysWeather;
