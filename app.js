
//ejercicio 1


 var array = [1,2,3,4];// solo rota los numeros

 	function reverse (arr){
 		for(var i = arr.length-1; i>=0; i--) {
 			console.log(arr[i]);
 		}
 	}
	
//Ejercicio 8
var array = [1,5,8,19]; // Creo un variable para guardar mis numeros en un arreglo
array.indexOf(8); // con el idexOf retorna el indice  de la poscion del numero.


// Ejercicio 10
var pasajero = ["Allison", "Belén", "Nadia", "Marcia", "Ale", "Fabián"]; //creo mi lista en un array 
function asiento (lista){
	for (var i = 0; i < pasajero.length; i++) {   // mi for recorre los nombres de los pasajeros
		if(pasajero[i] === lista){ // comparo pasajero y la lista 
			return i+1;				// esto es para que el asiento no se muestre en 0 y  comience en el primer asisento
		}
	}
	return 0;	// si no conicide con los pasajeros retorne 0
}
console.log(asiento("Allison"))

// Ejercicio 12
function palindrome(str){ 
	var str1 = str.split("").reverse().join("")//el split separa las letras, despues ser reversan con reverse y el join hace une las letras
 
if (str === str1) { //con el if comparo si esta palabra es igual 
	return true; // si es verdardero retorne verdadero
}
	return false;// de lo contrario retorene falso

}
	palindrome("salas")

// ejercicio 13 
function anagrama(palabra1,palabra2){ // creo mi funcion 
	var nuevapalabra1 = palabra1.split("").sort(); // creo mi varible para que guarde en la nueva palabra, el split separa en letras, el sort ordenara de la A a la Z.
	var nuevapalabra2 = palabra2.split("").sort();

	if (nuevapalabra1.join("") === nuevapalabra2.join("")){ // aqui comparo la palabra1 con plabra 2  y agrego el join para juntar las palbras 

		return true; // si se cumple la condicion retorne verdadero;
	}

		return false; // de lo contrario retorne false
}
console.log(anagrama("maria","imara")); // aqui debiera retornar verdadero 


console.log(anagrama("maria","amaria")); // aqui debiera retornar falso






//ejercicio 14
numPar([1,2,3,4,5,6,7,8,9,10]) // este es mi array 

function numPar(array){ // creo una funcion 

 var newArr = [];// esta variable guardara  los numeros pares 
 for (var i = 0; i < array.length; i++){ //recorro el array completo
 	if (array[i] % 2 == 0){ // formula para devolver numeros para si este se cumple
 		newArr.push(array[i]) // paso  los numeros a mi variable array vacia
 	}
 }
 return newArr // esto hace que retorne solo mi newArray
}

// Ejercicio 15

var arr = 12; //  creo una variable con el numero que voy a multiplicar
var num = 4; //  cantidad de veces que quiero que multiplique
for (var i=1; i<=num; i++){  // creo un for en donde mi variable i comienza en 1  porque es desde el numero que comienza a multiplicar

	document.write(arr*i+",");  // aqui se imprime los numeros de mi arreglo y los separo con una coma.
}

