import { createBrowserRouter ,RouterProvider
 } from "react-router-dom";

 import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

 import {
   HomeLayout,
   About,
   Landing,
   Error,
   Newsletter,
   SinglePageError,
   Cocktail,
 } from './pages';

import {loader as LandingLoader} from './pages/Landing';
import { loader as singleCocktailLoader } from './pages/Cocktail';
import { action as newsletterAction } from './pages/Newsletter';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});


const router = createBrowserRouter([
  {
    // common styles will be written in home layout
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: LandingLoader(queryClient),
      },
      {
        path: 'cocktail/:id',
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader(queryClient),
        element: <Cocktail />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
        action: newsletterAction,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
export default App;






