import mongoose from 'mongoose';
import URLSlugs from 'mongoose-url-slugs';

const Book = mongoose.Schema({
    title: String
}, {
   timestamps: true
});

Book.plugin(URLSlugs('title', { field: 'slug', update: true }));

export default mongoose.model('Book', Book);