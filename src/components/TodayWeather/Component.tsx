import AverageData from '../AverageData/Component';
import GeneralData from '../GeneralData/Component';
import classes from './styles.module.scss';

function TodayWeather() {
    return (
        <div className={classes['today-weather']}>
            <div className={classes.container}>
                <AverageData city="London" day="Sunday" temperature={13} time="6:00" />
                <GeneralData />
            </div>
        </div>
    );
}

export default TodayWeather;
