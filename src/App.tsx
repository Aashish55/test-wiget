import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// Components
import Widget from './ChampselectInlineWidget/ChampselectInlineWidget';
import IntegrateWithCampminder from './Component/IntegrateWithCampminder/IntegrateWithCampminder';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/campminder' element={<IntegrateWithCampminder />} />
        <Route path='/' element={<Widget appName='' />} />
      </Routes>
    </Router>
  );
}

export default App;
