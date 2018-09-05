var musicians = ["John", "Paul", "George", "Ringo"];

var instruments = ["guitar", "guitar", "bass", "drums"];

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {
      array.push(`${musicians[0]} plays ${instruments[0]}`);
      array.push(`${musicians[1]} plays ${instruments[1]}`);
      array.push(`${musicians[2]} plays ${instruments[2]}`);
      array.push(`${musicians[3]} plays ${instruments[3]}`);
    }
  return array
}

