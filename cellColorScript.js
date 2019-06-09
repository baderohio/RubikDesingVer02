
/*
* Programmer : Dr.-Ing. Bader Juma
* Date       : June 08, 2019
* File       : cellColorScript.js
* Purpose    : color each cells separatelly
*/

function colorCellsFunction(matrixDimension, cL, colorFace) {
	
 //Define variables and array
  var i, j, k, temp;

  
for (k=0; k< 6; k++) {	
    // put color for each cell j is row and i is cols of matrix first cell is 0,0
   for (j = 0; j < matrixDimension; j++) {
      for (i = 0; i < matrixDimension; i++) {
        temp = (j+1)*10+(i+1);
 /*         if(i==j){
            $("#"+ temp).css("background-color", "#CD9834"); // give brown color for diagonal
             } else if(j==2){
            $("#"+ temp).css("background-color", "#3364FB"); // give blue color for third row
                         }
               else    {
            $("#"+ temp).css("background-color", "#08960A"); // give green color for other cells
                     } */
					 $("#"+cL[k]+temp).css("background-color", colorFace[k]); // give green color for other cells
                                            } 
                                        }
										
                         }	
}