import mongoose, { Schema } from 'mongoose';

const commentSchema = new Schema();

commentSchema.add({
  context: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  subComments: [commentSchema],
});

const feedbackSchema = new Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    notifications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Notification',
      },
    ],
    comments: [commentSchema],
    owner: String,
    status: String,
    context: String,
    vote: String,
  },
  {
    timestamps: true,
  }
);
const Feedback =
  mongoose?.models?.Feedback || mongoose.model('Feedback', feedbackSchema);

export default Feedback;
