// function checkPalindrome(word) {
//     var l = word.length;
//     for (var i = 0; i < l; i++) {
//         var a = word.charAt(i);
//         var b = word.charAt(l - 1 - i);
//         console.log(i);
//         console.log(a);
//         console.log(b);
//         if (a !== b) {
//             console.log('salah');
//             return false;
//         } else {
//             console.log('ndaktau');
//         }
//     }
//     console.log('benar');
//     return true;
// }
// if (checkPalindrome('heuueh')) {
//     document.write("The word is a palindrome");
// } else {
//     document.write("The word is NOT a palindrome");
// }



// var word = 'malbm'
// var l = word.length;
// for (var i = 0; i < l; i++) {
//     var a = word.charAt(i);
//     var b = word.charAt(l - 1 - i);
//     console.log(i);
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     var c = a == b;
// }
// if (c) {
//     console.log('benar');
//     document.write(word + " is a palindrome<br>");
// } else {
//     console.log('salah');
//     document.write(word + " is NOT a palindrome<br>");
// }



// function checkPalindrom(palindrom) {
//     var flag = true;
//     var j = 0;
//     for (var i = palindrom.length - 1; i > palindrom.length / 2; i--) {
//         if (palindrom[i] != palindrom[j]) {
//             flag = false;
//             break; // why this? It'll exit the loop at once when there is a mismatch.
//         }
//         j++;
//     }
//     if (flag) {
//         document.write('the word is palindrome.');
//     } else {
//         document.write('the word is NOT palindrome.');
//     }
// }
// checkPalindrom('hahah');



function checkPalindrome(word) {
    var l = word.length;
    for (var i = 0; i < l / 2; i++) {
        if (word.charAt(i) !== word.charAt(l - 1 - i)) {
            return false;
        }
    }
    return true;
}
if (checkPalindrome("jancok")) {
    document.write("The word is a palindrome");
} else {
    document.write("The word is NOT a palindrome");
}



// word = 'malam'
// l = word.length
// for (var i = 0; i < l / 2; i++) {
//     if (word.charAt(i) !== word.charAt(l - 1 - i)) {
//         var salah = false
//     } else {
//         var benar = true
//     }
// }

// if ()