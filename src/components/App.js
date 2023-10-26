import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';

function App() {
  return (
    <>
      {/* <Layout /> */}
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
