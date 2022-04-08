import classes from './styles.module.scss';

function DetailedNowWeather() {
    return (
        <div className={classes['detailed-now-weather']}>
            <div className={classes['detailed-now-weather__hint']}>Now</div>
            <div className={classes.container}>
                <div className={classes['detailed-information-tab']}>
                    <div className={classes['detailed-information-tab__title']}>Chance of Rain</div>
                    <div className={classes['detailed-information-tab__data']}>12%</div>
                </div>

                <div className={classes['detailed-information-tab']}>
                    <div className={classes['detailed-information-tab__title']}>Humidity</div>
                    <div className={classes['detailed-information-tab__data']}>60%</div>
                </div>

                <div className={classes['detailed-information-tab']}>
                    <div className={classes['detailed-information-tab__title']}>Wind speed</div>
                    <div className={classes['detailed-information-tab__data']}>10 k/h</div>
                </div>

                <div className={classes['detailed-information-tab']}>
                    <div className={classes['detailed-information-tab__title']}>Visibility</div>
                    <div className={classes['detailed-information-tab__data']}>100km</div>
                </div>

                <div className={classes['detailed-information-tab']}>
                    <div className={classes['detailed-information-tab__title']}>Pressure</div>
                    <div className={classes['detailed-information-tab__data']}>1015 hPa</div>
                </div>
            </div>
        </div>
    );
}

export default DetailedNowWeather;
