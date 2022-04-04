import { render } from '@testing-library/react';
import App from './Component';

describe('Render App components', () => {
    it('should render App correctly', () => {
        const { container } = render(<App />);
        expect(container).toBeInTheDocument();
    });

    it('should render the Navbar component', () => {
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
        expect(container.querySelector('.navbar')).toBeInTheDocument();
    });

    it('should render the dailyWeather component', () => {
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
        expect(container.querySelector('.daily-weather')).toBeInTheDocument();
    });

    it('should render hourlyWeather component', () => {
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
        expect(container.querySelector('.hourly-weather')).toBeInTheDocument();
    });

    it('should render DetailedDailyDescription component', () => {
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
        expect(
            container.querySelector('.detailed-daily-description')
        ).toBeInTheDocument();
    });
});
