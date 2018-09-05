var musicians = ["John", "Paul", "George", "Ringo"];

var instruments = ["guitar", "guitar", "bass", "drums"];

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {
      array.push(`${musicians[0]} plays ${instruments[0]}`);
    }
  return theBeatlesPlay(musicians, instruments);
}

