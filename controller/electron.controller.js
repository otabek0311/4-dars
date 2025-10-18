const CustomErrorHendler = require("../error/custom-error-handler");
const ElectronSchema = require("../schema/electron.schema");

const getAllElectron = async (req, res, next) => {
  try {
    const electron = await ElectronSchema.find();
    res.status(200).json(electron);
  } catch (err) {
    next(CustomErrorHendler.BadRequest("Failed to retrieve books", err));
  }
};

const getElectron = async (req, res, next) => {
  try {
    const electron = await ElectronSchema.findById(req.params.id);
    if (!electron) {
      return next(CustomErrorHendler.NotFound("electron not found"));
    }
    res.status(200).json(electron);
  } catch (err) {
    next(CustomErrorHendler.BadRequest("Invalid ID format", err));
  }
};

const addElectron = async (req, res, next) => {
  try {
    const newelectron = await ElectronSchema.create(req.body);
    res.status(201).json({ message: "electron added successfully", data: newelectron });
  } catch (err) {
    next(CustomErrorHendler.BadRequest("Failed to add electron", err));
  }
};

const updateElectron = async (req, res, next) => {
  try {
    const updated = await ElectronSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
      return next(CustomErrorHendler.NotFound("electron not found"));
    }
    res.status(200).json({ message: "electron updated successfully", data: updated });
  } catch (err) {
    next(CustomErrorHendler.BadRequest("Failed to update electron", err));
  }
};

const deleteElectron = async (req, res, next) => {
  try {
    const deleted = await ElectronSchema.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return next(CustomErrorHendler.NotFound("electron not found"));
    }
    res.status(200).json({ message: "electron deleted successfully" });
  } catch (err) {
    next(CustomErrorHendler.BadRequest("Failed to delete electron", err));
  }
};


module.exports = {
  getAllElectron,
  getElectron,
  addElectron,
  updateElectron,
  deleteElectron
};
