import logoSvg from '../../assets/logotype.svg';

function App() {
    return (
        <div className="App">
            <div className="navbar">
                <div className="logotype">
                    <img src={logoSvg} alt="logotype" />
                </div>
                <div className="search-field">s</div>
                <div className="metrics">s</div>
            </div>
        </div>
    );
}

export default App;
