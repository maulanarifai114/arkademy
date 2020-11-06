// Reverse words in a string

// var reverseWords = function (sentence) {
// 	var words = sentence.split(" ").reverse(); // Split the sentence into an array of words and reverse it
// 	var string = "";
// 	for (word in words)
// 		string += (word > 0 ? " " : "") + words[word]; // Concatenate each word to the output and add spaces where required
// 	return string;

// }
// // Outputs: "backwards better look really would string This"
// console.log(reverseWords("This string would really look better backwards"));

var kalimat = 'Saya belajar Javascript';
var arrKalimat = kalimat.split(' ');
console.log(arrKalimat);

function reverseArray(arr) {
	var newArray = [];
	for (var i = arr.length - 1; i >= 0; i--) {
		newArray.push(arr[i]);
		console.log(i);
		console.log(newArray);
	}
	return newArray.join(' ');
}
console.log(reverseArray(arrKalimat));

// var newArray = [];
// for (var i = res.length - 1; i >= 0; i--) {
// 	console.log(i);
// 	newArray.push(res[i]);
// }
// newArray.join(' ');