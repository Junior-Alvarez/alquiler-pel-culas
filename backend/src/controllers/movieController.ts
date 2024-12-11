import { Request, Response } from 'express';
import Movie from '../models/Movie';

export const getAllMovies = async (req: Request, res: Response): Promise<Response> => {
    try {
      const movie = await Movie.find();
      return res.status(200).json(movie);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error al obtener los productos';
      return res.status(500).json({ error: errorMessage });
    }
  };

export const createMovie = async (req: Request, res: Response): Promise<Response> => {
    try {
      const newMovie = new Movie(req.body);
      await newMovie.save();
      return res.status(201).json(newMovie); 
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error al crear el producto';
      return res.status(500).json({ error: errorMessage });
    }
  };

export const getMovieById = async (req: Request, res: Response): Promise<Response> => {
    try {
      const movie = await Movie.findById(req.params.id);
      if (!movie) {
        return res.status(404).json({ message: 'Movie not found' });
      }
      return res.status(200).json(movie);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error al obtener el producto';
      return res.status(500).json({ error: errorMessage });
    }
  };

export const deleteMovie = async (req: Request, res: Response): Promise<Response> => {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      return res.sendStatus(204);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error al eliminar el producto';
      return res.status(500).json({ error: errorMessage });
    }
  };