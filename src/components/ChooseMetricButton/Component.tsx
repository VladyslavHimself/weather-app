import classes from './styles.module.scss';

function ChooseMetricButton(): JSX.Element {
    return (
        <button type="button" className={classes.metrics}>
            <span>°C / °F</span>
        </button>
    );
}

export default ChooseMetricButton;
