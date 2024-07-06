module.exports = (Sequelize, DataTypes) => {
    const ballot = Sequelize.define("ballot", {
      title: DataTypes.STRING,
      time: DataTypes.DATE,
      count: DataTypes.INTEGER,
    });
    return ballot;
  };