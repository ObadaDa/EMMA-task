const isSafe = (arr, row, col, visited) => ((row >= 0) && (row < arr.length) &&
                                            (col >= 0) && (col < arr[0].length) &&
                                            (arr[row][col] == 1 && !visited[row][col]));

function DFS(arr, row, col, visited) {

  const directions = Object.freeze([
    {row: -1, col: 0}, // N
    {row: -1, col: 1}, // NE
    {row: 0, col: 1}, // E
    {row: 1, col: 1}, // SE
    {row: 1, col: 0}, // S
    {row: 1, col: -1}, // SW
    {row: 0, col: -1}, // W
    {row: -1, col: -1} // NW
  ]);
  
  visited[row][col] = true;
  
  for(const dir of directions) {
    const neighborRowNumber = row + dir.row;
    const neighborColNumber = col + dir.col;
    
    if(isSafe(arr, neighborRowNumber, neighborColNumber, visited)) {
      DFS(arr, neighborRowNumber, neighborColNumber, visited);
    }
  }
}

function countForests(arr) {
  const rowCount = arr.length;
  const colCount = arr[0].length;
  
  const visited = Array.from(Array(rowCount), () => new Array(colCount));

  let forestsCount = 0;
  for(let i = 0 ; i < rowCount ; ++i) {
    for(let j = 0 ; j < colCount ; ++j) {
      if (arr[i][j] == 1 && !visited[i][j]) {
        DFS(arr, i, j, visited);
        forestsCount++;
      }
    }
  }
  
  return forestsCount;
}

const example1 = [
	[0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1],
	[0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1],
	[0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
	[0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1],
	[1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1],
	[1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1],
	[1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1],
];

const result = countForests(example1);

console.log(result);  /* should output 2 */