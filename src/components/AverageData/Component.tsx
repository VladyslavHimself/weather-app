import classes from './styles.module.scss';

interface IProps {
    city: string;
    day: string;
    temperature: number;
    time: string;
}

function AverageData({ city, day, time, temperature }: IProps) {
    return (
        <div className={classes['average-data']}>
            <div className={classes['average-data__city']}>{city}</div>
            <div className={classes['average-data__time']}>{`${day} ${time}`}</div>
            <div className={classes['average-data__temperature']}>{temperature}°C</div>
        </div>
    );
}

export default AverageData;
