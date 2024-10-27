import mongoose from 'mongoose';

const BlacklistSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Blacklist ||
  mongoose.model('Blacklist', BlacklistSchema);
