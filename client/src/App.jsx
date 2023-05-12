import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Global } from '@emotion/react';
import GlobalStyle from './styles/GlobalStyle';
import AuthenticationGuard from './guard/AuthenticationGuard';
import { Layout, RootError } from './components';
import { postsByCategoryLoader, myPostsLoader, postDetailLoader, rankLoader, myProfileLoader } from './loaders';
import {
  Home,
  CommunityMain,
  CommunityPostDetail,
  CommunityQuestion,
  ProfileEdit,
  RegisterProduct,
  SignIn,
  SignUp,
  CommunityRank,
  CommunityMyPosts,
  CommunityCategory,
  PopularPosts,
  MyProfile,
  NotFound,
  CommunityProfile,
  CommunityFaq,
  // PreparePage,
  ComputerIt,
  Game,
} from './pages';
import { SIGNIN_PATH } from './routes/routePaths';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <RootError />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/computer-it',
        element: <ComputerIt />,
        children: [
          { index: true, element: <CommunityMain category="computer-it" /> },
          {
            path: ':subCategory',
            loader: postsByCategoryLoader(queryClient),
            element: <CommunityCategory category="computer-it" />,
          },
          {
            path: 'list/popular',
            element: <PopularPosts category="computer-it" />,
          },
        ],
      },
      {
        path: '/game',
        element: <Game />,
        children: [
          { index: true, element: <CommunityMain category="game" /> },
          {
            path: ':subCategory',
            loader: postsByCategoryLoader(queryClient),
            element: <CommunityCategory category="game" />,
          },
          {
            path: 'list/popular',
            element: <PopularPosts category="game" />,
          },
        ],
      },
      {
        path: 'post/:postId',
        loader: postDetailLoader(queryClient),
        element: <CommunityPostDetail />,
      },
      {
        path: 'myposts',
        loader: myPostsLoader(queryClient),
        element: <CommunityMyPosts />,
      },
      { path: 'guide-faq', element: <CommunityFaq /> },
      {
        path: 'question',
        element: <AuthenticationGuard redirectTo={SIGNIN_PATH} element={<CommunityQuestion />} />,
      },
      { path: 'rank', loader: rankLoader(queryClient), element: <CommunityRank /> },
      {
        path: 'profile/:nickName',
        element: <CommunityProfile />,
      },
      {
        path: '/profile',
        loader: myProfileLoader(queryClient),
        element: <MyProfile />,
      },
      {
        path: '/profile/edit',
        element: <AuthenticationGuard redirectTo={SIGNIN_PATH} element={<ProfileEdit />} />,
      },
      {
        path: '/fav-category',
        element: <AuthenticationGuard redirectTo={SIGNIN_PATH} element={<RegisterProduct />} />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => (
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <Global styles={GlobalStyle} />
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </RecoilRoot>
);

export default App;
