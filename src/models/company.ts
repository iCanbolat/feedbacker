import mongoose, { Schema } from 'mongoose';

const companySchema = new Schema({
  companyName: String,
  staffs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
});

const Company =
  mongoose?.models?.Company || mongoose.model('Company', companySchema);

export default Company;
