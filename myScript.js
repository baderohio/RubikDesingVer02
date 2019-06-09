/*
* Programmer : Dr.-Ing. Bader Juma
* Date       : June 08,2019
* File       :
* Purpose    :
*/
/*
// Gives faces color
var colorFace = ["#08960A", "#CD9834", "#3364FB", "#BC0B00", "#FFFB03", "#FFFDFF"];
var classFace = [".back", ".rightside", ".front", ".leftside", ".top", ".bottom"];

$(document).ready(function(){

for (i=0; i < colorFace.length; i++){ 
   
   $(classFace[i]).css("background-color", colorFace[i]);
 }
 });
*/

// Create and color cell for each face
function dimensionInputFunction() {
 
  //Define variables and array
  var i, j, k, temp, matrixDimension, text;
  //var arr =[];
  var cL = ["ba", "ri","fr","le","to","bo"];
  var fL = ["back", "rightside","front","leftside", "top", "bottom"]; 
  var colorFace = ["#08960A", "#CD9834", "#3364FB", "#BC0B00", "#FFFB03", "#FFFDFF"];
  
  // Get the value of the input field with id="numb"
  matrixDimension = document.getElementById("numb").value;

  // If matrixDimension is Not a Number or less than one or greater than 10
  if (isNaN(matrixDimension) || matrixDimension < 1 || matrixDimension > 10) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("demo").innerHTML = text;
  
// Function call  
createFaceFunction(matrixDimension, cL, fL);
colorCellsFunction(matrixDimension, cL, colorFace);

}   


function createFaceFunction(matrixDimension, cL, fL) {
	  
 //Define variables and array
  var i, j, k, text;
  var arr =[];
  
  for (k=0; k< 6; k++) {
  // put class and id arribute for each faces cell
  for (j = 0; j < matrixDimension; j++) {
   text = "<tr>";
   for (i = 0; i < matrixDimension; i++) {
	 text += "<td class="+"back"+" id="+cL[k]+((j+1)*10+(i+1))+">"+" "+"</td>";
	 }
     text  += "</tr>";
     arr[j] = text;}
    
	// create cells in face (table) choose by id attributes
	document.getElementById(fL[k]).innerHTML = arr[0];
    for (j = 1; j < matrixDimension; j++){
     $("#"+fL[k]).append(arr[j]);}
               }	
}


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