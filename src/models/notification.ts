import mongoose, { Schema } from 'mongoose';

const notificationSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  feedback: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Feedback',
  },

  type: {
    enum: ['invite', 'feedback'],
  },
});

const Notification =
  mongoose?.models?.Notification ||
  mongoose.model('Notification', notificationSchema);

export default Notification;
