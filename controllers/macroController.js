const Macro = require('../models/macroModel');

const getMacroById = (req, res, next) => {
  const { id } = req.params;

  Macro.findById(id).then((macros) => {
    res.status(200).json({
      status: 'success',
      data: macros,
    });
  }).catch((err) => {
    res.status(400).json({ status: 'error', message: err });
  });
};

const getAllMacros = (req, res, next) => {
  Macro.find({}).then((macros) => {
    res.status(200).json({
      status: 'success',
      data: macros,
    });
  }).catch((err) => {
    res.status(400).json({ status: 'error', message: err });
  });
};

const deleteMacro = (req, res, next) => {
  const { id } = req.params;

  Macro.findByIdAndDelete(id).then((data) => {
    res.status(204).json({
      status: 'success',
      data: null,
    });
  }).catch((err) => {
    res.status(400).json({
      status: 'error',
      message: err,
    });
  });
};

const insertMacro = (req, res, next) => {
  const { name, code, xml } = req.body;

  const macroInstance = new Macro({
    name,
    code,
    xml,
  });

  macroInstance.save().then((message) => {
    res.status(201).json({
      status: 'success',
      data: message,
    });
  }).catch((err) => {
    res.status(400).json({ status: 'error', message: err });
  });
};

const updateMacro = (req, res, next) => {
  Macro.findByIdAndUpdate(
    req.session.user.id,
    req.body,
    {
      new: true,
    },
  ).then((data) => {
    res.status(200).json({
      status: 'success',
      data,
    });
  }).catch((err) => {
    res.status(400).json({
      status: 'error',
      message: err,
    });
  });
};

const switchActived = (req, res, next) => {
  const { id } = req.query;

  Macro.findByIdAndUpdate(
    id,
    req.body,
    {
      new: true,
    },
  ).then((data) => {
    res.status(200).json({
      status: 'success',
      data,
    });
  }).catch((err) => {
    res.status(400).json({
      status: 'error',
      message: err,
    });
  });
};

module.exports = {
  deleteMacro,
  getAllMacros,
  getMacroById,
  insertMacro,
  updateMacro,
  switchActived,
};
