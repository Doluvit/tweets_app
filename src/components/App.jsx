import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import TweetsPage from 'pages/TweetsPage/TweetsPage';
import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path='*' element={<Home/>}/>
      </Route>
      <Route />
    </Routes>
  );
};
