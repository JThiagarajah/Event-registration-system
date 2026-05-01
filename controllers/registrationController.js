import Registration from "../models/Registration.js";

// Create Registration
export const createRegistration = async (req, res) => {
  try {
    const registration = new Registration(req.body);
    await registration.save();
    res.status(201).json(registration);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Registrations
export const getRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find().populate("eventId");
    res.json(registrations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
