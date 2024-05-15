// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './SearchPage';
import DetailPage from './DetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/detalle" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
