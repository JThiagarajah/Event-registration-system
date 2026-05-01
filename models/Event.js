import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  invitedBy: { type: String, required: true },
  description: { type: String }
});

export default mongoose.model("event", eventSchema);
