
/*
* Programmer : Dr.-Ing. Bader Juma
* Date       : June 08, 2019
* File       : faceCreationScript.js
* Purpose    : automatic create cells faces with class and id
*/

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