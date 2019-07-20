import { Router } from 'express';
import { catchAsync } from "../middlewares/errors";
import booksController from '../controllers/booksController';

export default () => {
    const api = Router();
    // GET /books/:slug
    api.get('/:slug', catchAsync(booksController.findOne));

    // GET /books
    api.get('/', catchAsync(booksController.findAll));

    // POST /books
    api.post('/', catchAsync(booksController.create));

    // PUT /books/:slug
    api.put('/:slug', catchAsync(booksController.update));

    // DELETE /books/:slug
    api.delete('/:slug', catchAsync(booksController.remove));

    return api;
}