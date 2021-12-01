/*
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

const gridChallenge = (grid) => {
  const sortedRows = grid.reduce((acc, str) => {
    acc.push(str.split('').sort());
    return acc
  }, []);
  // console.log(sortedRows);
  
  const sortedColumns = sortedRows.reduce((acc, arrOfStr) => {
    arrOfStr.map((char, idx) => {
      return !acc[idx] ? acc[idx] = char : acc[idx] +=char
    });
    return acc;
  }, {});
  // console.log(sortedColumns);
  
  const checkAlphabetical = Object.values(sortedColumns).reduce((acc, arrOfStr) => {
    arrOfStr === arrOfStr.split('').sort().join('') ? acc.push('YES') : acc.push('NO');
    return acc;
  }, []);
  // console.log(checkAlphabetical);
  
  for(let i = 0; i < checkAlphabetical.length; i++) {
    if(checkAlphabetical[i] === 'NO') {
      return 'NO'
    }
  }
  return 'YES'
}
