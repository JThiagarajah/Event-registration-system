import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import eventRoutes from "./routes/eventRoutes.js";
import registrationRoutes from "./routes/registrationRoutes.js";
dotenv.config();
const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/Events")

.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.error("MongoDB connection error:", err.message));

// Routes
app.use("/events", eventRoutes);
app.use("/registrations", registrationRoutes);
app.get("/", (req, res) => {
  res.send("Event Registration System API is running...");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
