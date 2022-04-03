import ReactDOM from 'react-dom/client';

import App from './components/App/Component';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootElement: Element | false = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
