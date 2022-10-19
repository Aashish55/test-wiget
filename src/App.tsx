import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Components
import EmptyWidget from './Component/EmptyWidget/EmptyWidget';
import IntegrateWithCampminder from './Component/IntegrateWithCampminder/IntegrateWithCampminder';
import IntegrateWithSharpspring from './Component/IntegrateWithSharpspring/IntegrateWithSharpspring';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/campminder' element={<IntegrateWithCampminder />} />
        <Route path='/sharpspring' element={<IntegrateWithSharpspring />} />
        <Route path='/' element={<EmptyWidget appName='' />} />
      </Routes>
    </Router>
  );
}

export default App;
