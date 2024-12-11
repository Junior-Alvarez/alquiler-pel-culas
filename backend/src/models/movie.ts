import mongoose, { Schema, Document } from "mongoose";

export interface IRecipe extends Document {
    title: string;
    category: string;
    price: number;
    description: string;
    image: string;
}

const RecipeSchema: Schema = new Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String},
});

export default mongoose.model<IRecipe>("Recipe", RecipeSchema);