import mongoose, { Schema } from 'mongoose';
import Product from './product';

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    password: {
      required: true,
      type: String,
    },
    fullName: {
      type: String,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
    },
    customerCompany: String,
    notifications: [
      {
        title: String,
        value: Boolean,
      },
    ],
    feedbacks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Feedback',
      },
    ],
    productIncluded: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose?.models?.User || mongoose.model('User', userSchema);

export default User;
