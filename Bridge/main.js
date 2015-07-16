const ROWS = 3;
const COLS = 4;
var str;

var matrixCV = new CompleteMatrix(ROWS, COLS, []);
console.log("Complete Matrix with Array");

matrixCV.put(1,2,1);
matrixCV.put(2,1,2);
matrixCV.put(0,3,3);
matrixCV.put(1,2,0);
str = '';
for (var i = 0; i < ROWS; i++)	{
 str += "\n";
	for (var j = 0; j < COLS; j++)
		str += matrixCV.get(i, j) + " ";
}

console.log(str);

var matrixCV = new SparseMatrix(ROWS, COLS, []);
console.log("Sparse Matrix with Array");
matrixCV.put(1,2,1);
matrixCV.put(2,1,2);
matrixCV.put(0,3,3);
matrixCV.put(1,2,0);

str = '';
for (var i = 0; i < ROWS; i++)	{
  str += "\n";
	for (var j = 0; j < COLS; j++)
		str += matrixCV.get(i, j) + " ";
}

console.log(str);

var matrixCV = new CompleteMatrix(ROWS, COLS, new Set());
console.log("Complete Matrix with Set");
matrixCV.put(1,2,1);
matrixCV.put(2,1,2);
matrixCV.put(0,3,3);
matrixCV.put(1,2,0);

str = '';
for (var i = 0; i < ROWS; i++)	{
 str += "\n";
	for (var j = 0; j < COLS; j++)
		str += matrixCV.get(i, j) + " ";
}

console.log(str);

var matrixCV = new SparseMatrix(ROWS, COLS, new Set());
console.log("Sparse Matrix with Set");
matrixCV.put(1,2,1);
matrixCV.put(2,1,2);
matrixCV.put(0,3,3);
matrixCV.put(1,2,0);

str = '';
for (var i = 0; i < ROWS; i++)	{
 str += "\n";
	for (var j = 0; j < COLS; j++)
		str += matrixCV.get(i, j) + " ";
}

console.log(str);