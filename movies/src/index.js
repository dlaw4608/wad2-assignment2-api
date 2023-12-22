import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import TopRatedMoviePage from "./pages/topRatedMoviesPage";
import SimilarMoviesPage from "./pages/similarMoviesPage.js";
import TrendingMoviesPage from "./pages/trendingMoviesPage";
import TVShowPage from "./pages/discoverTVShowsPage";
import TemplateTVShowPage from "./pages/tvShowDetailsPage";
import TvShowContextProvider from "./contexts/tvShowContext";
import FavoriteTvShowPage from "./pages/favoriteTvShowsPage";
import SignUpPage from "./pages/signUpPage";
import LoginPage from "./pages/loginPage";
import AuthContextProvider from "./contexts/authContext.js";
import MovieActorsPage from "./pages/movieActorsPage";
import MovieActorDetailsPage from "./pages/movieActorsDetailsPage";
import ProtectedRoutes from "./protectedRoutes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <AuthContextProvider>
        <MoviesContextProvider>
        <TvShowContextProvider>
        <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/movies/trending" element={ <TrendingMoviesPage /> } />
          {/* <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} /> */}
          {/*<Route path="/tvshows/page=:pageNumber" element = {<TVPage/>}/>*/}
          <Route path="/movies/topratedmovies" element={<TopRatedMoviePage />} />
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/tvshows/discover" element={<TVShowPage/>}/>
          <Route path="/tvshow/favorites" element={<FavoriteTvShowPage></FavoriteTvShowPage>}></Route>
          <Route path="/actors/" element={<MovieActorsPage />} />
          <Route path="/actors/:id" element={<MovieActorDetailsPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/" /> } />
          <Route path="/movies/:id/similar" element={<SimilarMoviesPage />} />
          <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
          <Route path="/tvshow/:id" element={<TemplateTVShowPage/>}></Route>
          </Route>
        </Routes>
        </TvShowContextProvider>
        </MoviesContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);