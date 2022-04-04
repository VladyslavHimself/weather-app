import { render } from '@testing-library/react';
import App from './Component';

describe('Render App components', () => {
    const components = {
        navbar: '.navbar',
        dailyWeather: '.daily-weather',
        hourlyWeather: '.hourly-weather',
        detailedDailyWeather: '.detailed-daily-weather',
    };

    it('should render App correctly', () => {
        const { container } = render(<App />);
        expect(container).toBeInTheDocument();
    });

    it('should render the Navbar component', () => {
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
        expect(container.querySelector(components.navbar)).toBeInTheDocument();
    });

    it('should render the dailyWeather component', () => {
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
        expect(
            container.querySelector(components.dailyWeather)
        ).toBeInTheDocument();
    });

    it('should render hourlyWeather component', () => {
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
        expect(
            container.querySelector(components.hourlyWeather)
        ).toBeInTheDocument();
    });

    it('should render DetailedDailyDescription component', () => {
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
        expect(
            container.querySelector(components.detailedDailyWeather)
        ).toBeInTheDocument();
    });
});
