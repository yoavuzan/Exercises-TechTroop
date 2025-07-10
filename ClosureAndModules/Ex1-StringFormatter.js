module.exports = function StringFormatter() 
{
  function capitalizeFirst(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  }

  function toSkewerCase(str) {
    return str.replace(" ", "-");
  }
  return { capitalizeFirst, toSkewerCase };
};
