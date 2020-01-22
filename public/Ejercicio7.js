"use strict";

var searchSwordsDance = '';
var baseStats = [];
var baseStatsPlus = [];
axios.get('https://pokeapi.co/api/v2/pokemon/bulbasaur/').then(function (response) {
  var findDance = response.data.moves.find(function (data) {
    return data.move.name === 'swords-dance';
  });
  searchSwordsDance = findDance.move.url;
  console.log(searchSwordsDance);
  console.log('-----------------------------------------------------------------');
  response.data.stats.forEach(function (element) {
    if (element.base_stat === 65) {
      baseStats.push(element);
      baseStatsPlus.push(element.base_stat + 1);
    }
  });
  console.log(baseStats);
  console.log('-----------------------------------------------------------------');
  console.log(baseStatsPlus);
})["catch"](function (response) {
  console.log('UPS ha ocurrido un problema , por favor intente nuevamente');
});