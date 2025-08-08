function createPhoneNumber(numbers){
    let numOutput = '('+ numbers.slice(0, 3).join('') + ') ' +
                  numbers.slice(3, 6).join('') + '-' +
                  numbers.slice(-4).join('');
    console.log('Formatted Phone Number:', numOutput);
} 

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);







