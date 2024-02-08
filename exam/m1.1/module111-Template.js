//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID: 65130500115     Name: Lalita Benjamanukul

function findVowels(word) {
    //your code here...
    const char = word.split('')
    console.log(char);

    for (index = 0; index < char.length; index++) {
            if (index === 'e') return index
            if (index === 'a') return index
            if (index === 'i') return index
            if (index === 'o') return index
            if (index === 'u') return index
    }   
    return 
}


console.log(findVowels("Heleelaeiouo"));
// Output
// {
//   e: [ '1', '3', '4', '7' ],
//   a: [ '6' ],
//   i: [ '8' ],
//   o: [ '9', '11' ],
//   u: [ '10' ]
// }
