import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema(
  {
    feedbacks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Feedback',
      },
    ],
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
    },
    name: String,
    staffUsers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    timestamps: true,
  }
);
const Product =
  mongoose?.models?.Product || mongoose.model('Product', productSchema);

export default Product;
