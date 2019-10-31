const handleWitData = data => {
  let intent = data.entities.intent;
  let { confidence, value } = intent[0];
};
module.exports = {
  handleWitData
};
