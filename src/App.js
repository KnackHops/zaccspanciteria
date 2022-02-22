import { BrowserRouter as Router } from 'react-router-dom';
import UnderRoot from './component/UnderRoot';
import ErrorBoundary from './wrapper/ErrorBoundary';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <UnderRoot />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
