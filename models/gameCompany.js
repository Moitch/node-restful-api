const mongoose = require('mongoose');

const GameCompaniesSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
    set: value => value.trim().replace(/\s+/g, " ").toLowerCase(),
    validate: [
      {
        validator: async function (value) {
          const count = await this.model('GameCompany')
          .countDocuments({ name: value });

          return !count;
        },
        message: props => `${props.value} exists. Please try a different company name.`
      }
    ]
  }
}, {
  timestamps: true
});

GameCompaniesSchema.methods.getGames = async function () {
  return await mongoose.model('Game').find({
    GameCompany: this._id
  });
}

module.exports = mongoose.model('GameCompany', GameCompaniesSchema);