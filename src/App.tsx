import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Animals } from './components/Animals';
import { Layout } from './components/Layout';
import { NotFound } from './components/NotFound';
import { Test } from './components/Test';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<Animals />}></Route>
    <Route path="/test" element={<Test />}></Route>
    <Route path="*" element={<NotFound />}></Route>
  </Route>
</Routes>
</BrowserRouter>
  );
}

export default App;
