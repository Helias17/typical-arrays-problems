
exports.min = function min (array) {
  if ( !array || array.length === 0) return 0;

  array.sort( (a,b) => {
    return a-b;
  } )

  return array[0];
}

exports.max = function max (array) {
  if ( !array || array.length === 0) return 0;

  array.sort( (a,b) => {
    return a-b;
  } )

  return array.reverse()[0];
}

exports.avg = function avg (array) {

  if ( !array || array.length === 0 ) return 0;

  let val = array.reduce( (prev, el) => {
    return prev += el;
  }, 0 )

  return val/array.length;

}
