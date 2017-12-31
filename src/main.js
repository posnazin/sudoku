
function main(){
	iniSudoku();
	calculateHoles();
	iniResult();
	generateTable();
}

var objecthtml;
var sudoku = [];
sudoku.length=81;
var result;
var holes=0;
var c=document.createElement("td");

function generateTable(){
	objecthtml = document.getElementsByTagName("body")[0];


	var table   = document.createElement("table");
	table.className="sudoku";

	
	for(var i=0; i<9; i++){

		var row=document.createElement("tr");

		for (var j=0; j<9; j++){

			var cell=document.createElement("td");
			cell.className="cell";
			row.appendChild(cell);

			if(sudoku[i][j]!='.'){
				cell.innerHTML=sudoku[i][j];
			}else{
				var input=document.createElement("input");
				cell.appendChild(input);
			}

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


function iniSudoku (){
	sudoku=new Array(9);


	for (var i = 0; i < 9; i++) {
		var row=new Array(9);
		sudoku[i]=row;
	}


	sudoku [0][0]=8;  sudoku [0][1]='.';sudoku [0][2]=9;  sudoku [0][3]='.';sudoku [0][4]=7;  sudoku [0][5]=5;  sudoku [0][6]='.';sudoku [0][7]='.';sudoku [0][8]=1;
	sudoku [1][0]='.';sudoku [1][1]='.';sudoku [1][2]=6;  sudoku [1][3]='.';sudoku [1][4]='.';sudoku [1][5]='.';sudoku [1][6]=5;  sudoku [1][7]='.';sudoku [1][8]='.';
	sudoku [2][0]='.';sudoku [2][1]=3;	sudoku [2][2]='.';sudoku [2][3]=1;  sudoku [2][4]='.';sudoku [2][5]='.';sudoku [2][6]='.';sudoku [2][7]=9;  sudoku [2][8]=9;
	sudoku [3][0]=6;  sudoku [3][1]='.';sudoku [3][2]='.';sudoku [3][3]='.';sudoku [3][4]=3;  sudoku [3][5]='.';sudoku [3][6]=9;  sudoku [3][7]='.';sudoku [3][8]='.';
	sudoku [4][0]=3;  sudoku [4][1]='.';sudoku [4][2]='.';sudoku [4][3]=2;  sudoku [4][4]='.';sudoku [4][5]=9;  sudoku [4][6]='.';sudoku [4][7]='.';sudoku [4][8]=5;
	sudoku [5][0]='.';sudoku [5][1]='.';sudoku [5][2]=8;  sudoku [5][3]='.';sudoku [5][4]=5;  sudoku [5][5]='.';sudoku [5][6]='.';sudoku [5][7]='.';sudoku [5][8]=3;
	sudoku [6][0]=7;  sudoku [6][1]=9;	sudoku [6][2]='.';sudoku [6][3]='.';sudoku [6][4]='.';sudoku [6][5]=3;  sudoku [6][6]='.';sudoku [6][7]=8;  sudoku [6][8]='.';
	sudoku [7][0]='.';sudoku [7][1]='.';sudoku [7][2]=5;  sudoku [7][3]='.';sudoku [7][4]='.';sudoku [7][5]='.';sudoku [7][6]=2;  sudoku [7][7]='.';sudoku [7][8]='.';
	sudoku [8][0]=4;  sudoku [8][1]='.';sudoku [8][2]='.';sudoku [8][3]=9;  sudoku [8][4]=2;  sudoku [8][5]='.';sudoku [8][6]=7;  sudoku [8][7]='.';sudoku [8][8]=6;
	console.log(sudoku);


}



function iniResult (){

	result=new Array(9);


	for (var i = 0; i < 9; i++) {
		var row=new Array(9);
		result[i]=row;
	}

	result [0][0]=8;result [0][1]=4;result [0][2]=9;result [0][3]=6;result [0][4]=7;result [0][5]=5;result [0][6]=3;result [0][7]=2;result [0][8]=1;
	result [1][0]=2;result [1][1]=1;result [1][2]=6;result [1][3]=3;result [1][4]=9;result [1][5]=8;result [1][6]=5;result [1][7]=4;result [1][8]=7;
	result [2][0]=5;result [2][1]=3;result [2][2]=7;result [2][3]=1;result [2][4]=4;result [2][5]=2;result [2][6]=6;result [2][7]=9;result [2][8]=8;
	result [3][0]=6;result [3][1]=5;result [3][2]=1;result [3][3]=8;result [3][4]=3;result [3][5]=4;result [3][6]=9;result [3][7]=7;result [3][8]=2;
	result [4][0]=3;result [4][1]=7;result [4][2]=4;result [4][3]=2;result [4][4]=1;result [4][5]=9;result [4][6]=8;result [4][7]=6;result [4][8]=5;
	result [5][0]=9;result [5][1]=2;result [5][2]=8;result [5][3]=7;result [5][4]=5;result [5][5]=6;result [5][6]=4;result [5][7]=1;result [5][8]=3;
	result [6][0]=7;result [6][1]=9;result [6][2]=2;result [6][3]=5;result [6][4]=6;result [6][5]=3;result [6][6]=1;result [6][7]=8;result [6][8]=4;
	result [7][0]=1;result [7][1]=6;result [7][2]=5;result [7][3]=4;result [7][4]=8;result [7][5]=7;result [7][6]=2;result [7][7]=3;result [7][8]=9;
	result [8][0]=4;result [8][1]=8;result [8][2]=3;result [8][3]=9;result [8][4]=2;result [8][5]=1;result [8][6]=7;result [8][7]=5;result [8][8]=6;

}

