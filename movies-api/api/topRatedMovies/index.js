import express from 'express';
import topMoviesModel from './topRatedMoviesModel';


const router = express.Router();
router.get('/', (req, res, next) => {
  topMoviesModel.find().then(topMovies => res.status(200).send(topMovies)).catch(next);
});

router.get('/toprated', asyncHandler(async (req, res) => {
  const topMovies = await topMoviesModel.find();
  res.status(200).json(topMovies);
}));

router.get('/toprated/:id', asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id);
  const topMovie = await topMoviesModel.findByMovieDBId(id);
  if (topMovie) {
      res.status(200).json(topMovie);
  } else {
      res.status(404).json({ message: 'The top-rated movie you requested could not be found.', status_code: 404 });
  }
}));

export default router;