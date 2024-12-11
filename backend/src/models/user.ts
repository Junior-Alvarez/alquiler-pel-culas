// backend/src/models/user.ts
import mongoose, { Schema, Document } from "mongoose";
import bcrypt from 'bcrypt';
export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  comparePassword(password: string): Promise<boolean>;
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

UserSchema.methods.comparePassword = async function(password: string) {
  const isMatch = await bcrypt.compare(password, this.password);
  return isMatch;
};

export default mongoose.model<IUser>("User", UserSchema);