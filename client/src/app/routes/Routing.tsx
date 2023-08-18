import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/homePage/home.page';
import { RouteData } from '../../types/route.types';
import AboutPage from '../../pages/aboutPage/about.page';

const Routing = () => {
  const routes: RouteData[] = [
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/about',
      element: <AboutPage />
    },
    {
      path: '/',
      element: <HomePage />
    }
  ];

  return (
    <Routes>
      {routes.map((props, id) => (
        <Route {...props} key={id} />
      ))}
    </Routes>
  );
};

export { Routing };
