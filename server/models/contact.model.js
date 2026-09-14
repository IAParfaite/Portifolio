import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Name is required"], trim: true, maxlength: 100 },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    message: { type: String, required: [true, "Message is required"], trim: true, maxlength: 5000 },
    ip: { type: String, default: null },
  },
  { timestamps: true }
);

// Keep a model even when no DB is connected (mongoose will only persist if DB present)
const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
