const GameCompany = require('../models/gameCompany');


exports.index = async (request, response, next) => {
  try {
    const gameCompanies = await GameCompany.find();
    
    response.status(200)
    .json(gameCompanies);
  } catch (error) {
    next(error);
  }
};

exports.show = async (request, response, next) => {
  try {
    const { id } = request.params;
    const gameCompany = await GameCompany.findById(id);
    const games = await game.getGames();

    response.status(200)
    .json({ ...gameCompany._doc, games });
  } catch (error) {
    next(error);
  }
};

exports.create = async (request, response, next) => {
  try {
    const { companyName } = request.body;
    const gameCompany = await GameCompany.create({
      companyName
    });

    response.status(200)
    .json({
      message: "Game Company was created successfully",
      status: "success",
      gameCompany
    });
  } catch (error) {
    next(error);
  }
};

exports.update = async (request, response, next) => {
  try {
    const { id, companyName } = request.body;

    await GameCompany.findOneAndUpdate({ _id: id }, { companyName });
    const gameCompany = await GameCompany.findById(id);

    response.status(200)
    .json({
      message: "Game Company was updated successfully",
      status: "success",
      gameCompany
    });
  } catch (error) {
    next(error);
  }
};

exports.destroy = async (request, response, next) => {
  try {
    const { id } = request.body;

    await GameCompany.findOneAndDelete({ _id: id });

    response.status(200)
    .json({
      message: "Game Company was deleted successfully",
      status: "success"
    });
  } catch (error) {
    next(error);
  }
};