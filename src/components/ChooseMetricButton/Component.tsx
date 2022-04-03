import { useState } from 'react';
import classes from './styles.module.scss';

type MetricTypes = '°C' | '°F';

function ChooseMetricButton(): JSX.Element {
    const [metric, setMetric] = useState<MetricTypes>('°C');

    const changeMetric = (): void => {
        if (metric === '°C') {
            setMetric('°F');
        } else {
            setMetric('°C');
        }
    };

    return (
        <button
            onClick={() => changeMetric()}
            type="button"
            className={classes.metrics}
        >
            <span className={metric === '°C' ? classes.active : undefined}>
                °C
            </span>
            <span style={{ margin: '0px 5px' }}>/</span>
            <span className={metric === '°F' ? classes.active : undefined}>
                °F
            </span>
        </button>
    );
}

export default ChooseMetricButton;
