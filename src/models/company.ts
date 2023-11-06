import mongoose, { Schema } from 'mongoose';

const companySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  staffs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }
})

const Company = mongoose?.models?.Company || mongoose.model('Company', companySchema);

export default Company;