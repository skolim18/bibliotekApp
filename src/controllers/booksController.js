import Book from '../models/book';

export default {
    async findOne(req, res, next) {
        const book = await Book.findOne({ slug: req.params.slug });
        if (!book) return next();
        return res.status(200).send({ data: book });
    },

    async findAll(req, res) {
        const books = await Book.find().sort({ createdAt: 'desc' });
        return res.status(200).send({ data: books });
    },

    async create(req, res) {
        const book = await new Book({
            title: req.body.title
        }).save();

        return res.status(201).send({ data: book, message: `Book was created` });
    },

    async update(req, res, next) {
        const book = await Book.find({ 'slug': req.params.slug });
        if (!book) return next();

        book.title = req.body.title;
        await book.save();

        return res.status(200).send({ data: book, message: `Book was updated` });
    },

    async remove(req, res, next) {
        const book = await Book.findOne({ 'slug': req.params.slug });
        if (!book) return next();
        await book.remove();

        return res.status(200).send({ message: `Book was removed` });
    }
}