import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Components
import EmptyWidget from './Component/EmptyWidget/EmptyWidget';
import IntegrateWithCampminder from './Component/IntegrateWithCampminder/IntegrateWithCampminder';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/campminder' element={<IntegrateWithCampminder />} />
        <Route path='/' element={<EmptyWidget appName='' />} />
      </Routes>
    </Router>
  );
}

export default App;
