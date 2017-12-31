
function main(){
	generateTable();
}

var objecthtml;
var sudoku;
var result;
var holes=0;

function generateTable(){
	objecthtml = document.getElementsByTagName("body")[0];


	var table   = document.createElement("table");

	for(var i=0; i<9; i++){

		var row=document.createElement("tr");

		for (var j=0; j<9; j++){

			var cell=document.createElement("td");
			cell.className="cell";
			row.appendChild(cell);

			/*if(sudoku[i][j]!='.'){			
				cell.appendChild(sudoku[i][j]);
			}*/

			if((j+1)%3==0){
				var div=document.createElement("div");
				div.className="space-h";
				row.appendChild(div);
			}

		}

		table.appendChild(row);
		if((i+1)%3==0){
			var div=document.createElement("div");
			div.className="space-v";
			table.appendChild(div);
		}

	}

	objecthtml.appendChild(table);

}

function calculateHoles(){
	for(var i=0; i<9; i++)
		for(var j=0; j<9; j++)
			if(sudoku[i][j]=='.')
				holes++;
}

function iniSudoku (n){
	sudoku [0][0]=8;sudoku [0][1]='.';sudoku [0][2]=9;sudoku [0][3]='.';sudoku [0][4]=7;sudoku [0][5]=5;sudoku [0][6]='.';sudoku [0][7]='.';sudoku [0][8]=1;
	sudoku [1][0]='.';sudoku [1][1]='.';sudoku [1][2]=6;sudoku [1][3]='.';sudoku [1][4]='.';sudoku [1][5]='.';sudoku [1][6]=5;sudoku [1][7]='.';sudoku [1][8]='.';
	sudoku [2][0]='.';sudoku [2][1]=3sudoku [2][2]='.';sudoku [2][3]=1;sudoku [2][4]='.';sudoku [2][5]='.';sudoku [2][6]='.';sudoku [2][7]=9;sudoku [2][8]=9;
	sudoku [3][0]=6;sudoku [3][1]='.';sudoku [3][2]='.';sudoku [3][3]='.';sudoku [3][4]=3;sudoku [3][5]='.';sudoku [3][6]=9;sudoku [3][7]='.';sudoku [3][8]='.';
	sudoku [4][0]=3;sudoku [4][1]='.';sudoku [4][2]='.';sudoku [4][3]=2;sudoku [4][4]='.';sudoku [4][5]=9;sudoku [4][6]='.';sudoku [4][7]='.';sudoku [4][8]=5;
	sudoku [5][0]='.';sudoku [5][1]='.';sudoku [5][2]=8;sudoku [5][3]='.';sudoku [5][4]=5;sudoku [5][5]='.';sudoku [5][6]='.';sudoku [5][7]='.';sudoku [5][8]=3;
	sudoku [6][0]=7;sudoku [6][1]=9;sudoku [6][2]='.';sudoku [6][3]='.';sudoku [6][4]='.';sudoku [6][5]=3;sudoku [6][6]='.';sudoku [6][7]=8;sudoku [6][8]='.';
	sudoku [7][0]='.';sudoku [7][1]='.';sudoku [7][2]=5;sudoku [7][3]='.';sudoku [7][4]='.';sudoku [7][5]='.';sudoku [7][6]=2;sudoku [7][7]='.';sudoku [7][8]='.';
	sudoku [8][0]=4;sudoku [8][1]='.';sudoku [8][1]='.';sudoku [8][3]=9;sudoku [8][4]=2;sudoku [8][5]='.';sudoku [8][6]=7;sudoku [8][7]='.';sudoku [8][8]=6;

}



function iniResult (n){
	sudoku [0][0]=8;sudoku [0][1]=4;sudoku [0][2]=9;sudoku [0][3]=6;sudoku [0][4]=7;sudoku [0][5]=5;sudoku [0][6]=3;sudoku [0][7]=2;sudoku [0][8]=1;
	sudoku [1][0]=2;sudoku [1][1]=1;sudoku [1][2]=6;sudoku [1][3]=3;sudoku [1][4]=9;sudoku [1][5]=8;sudoku [1][6]=5;sudoku [1][7]=4;sudoku [1][8]=7;
	sudoku [2][0]=5;sudoku [2][1]=3;sudoku [2][2]=7;sudoku [2][3]=1;sudoku [2][4]=4;sudoku [2][5]=2;sudoku [2][6]=6;sudoku [2][7]=9;sudoku [2][8]=8;
	sudoku [3][0]=6;sudoku [3][1]=5;sudoku [3][2]=1;sudoku [3][3]=8;sudoku [3][4]=3;sudoku [3][5]=4;sudoku [3][6]=9;sudoku [3][7]=7;sudoku [3][8]=2;
	sudoku [4][0]=3;sudoku [4][1]=7;sudoku [4][2]=4;sudoku [4][3]=2;sudoku [4][4]=1;sudoku [4][5]=9;sudoku [4][6]=8;sudoku [4][7]=6;sudoku [4][8]=5;
	sudoku [5][0]=9;sudoku [5][1]=2;sudoku [5][2]=8;sudoku [5][3]=7;sudoku [5][4]=5;sudoku [5][5]=6;sudoku [5][6]=4;sudoku [5][7]=1;sudoku [5][8]=3;
	sudoku [6][0]=7;sudoku [6][1]=9;sudoku [6][2]=2;sudoku [6][3]=5;sudoku [6][4]=6;sudoku [6][5]=3;sudoku [6][6]=1;sudoku [6][7]=8;sudoku [6][8]=4;
	sudoku [7][0]=1;sudoku [7][1]=6;sudoku [7][2]=5;sudoku [7][3]=4;sudoku [7][4]=8;sudoku [7][5]=7;sudoku [7][6]=2;sudoku [7][7]=3;sudoku [7][8]=9;
	sudoku [8][0]=4;sudoku [8][1]=8;sudoku [8][2]=3;sudoku [8][3]=9;sudoku [8][4]=2;sudoku [8][5]=1;sudoku [8][6]=7;sudoku [8][7]=5;sudoku [8][8]=6;

}

