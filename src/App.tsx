import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import IntegrateWithCampminder from './Component/IntegrateWithCampminder/IntegrateWithCampminder';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/campminder' element={<IntegrateWithCampminder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
