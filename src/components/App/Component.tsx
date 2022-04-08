import 'normalize.css';
import Navbar from '../Navbar/Component';
import TodayWeather from '../TodayWeather/Component';
import DetailedNowWeather from '../DetailedNowWeather/Component';
import OtherDaysWeather from '../OtherDaysWeather/Component';

function App() {
    return (
        <div className="App">
            <Navbar />
            <TodayWeather />
            <DetailedNowWeather />
            <OtherDaysWeather />
        </div>
    );
}

export default App;
