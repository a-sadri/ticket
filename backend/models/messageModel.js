import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
  {
    // user: {},
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model('Message', messageSchema);

export default Message;
