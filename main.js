function exercise1 () {
    let myArray = new Array(5);
    for (let x =0 ; x <5 ; x++){
        myArray[x] = new Array(5);
    }
    for (let i = 0; i < 5; i++) {
        document.write('row ' + i + '<br>')
        for (let j = 0; j < 5; j++) {
            myArray[i][j] = Math.round(Math.random()*98);
            document.write('" ' + myArray[i][j] + '" <br>');
        }
    }
}

function exercise2 () {
    let str = prompt('Enter a word');
    let strArray = str.split('');
    let newStr = strArray.reverse().join('');
    alert(newStr);
}

function exercise3 () {
    let myArray = new Array(5);
    for (let i = 0; i < myArray.length; i++) {
        myArray[i] = Math.random()*98;
    }
alert(myArray.length);
}

function exercise4 () {
    let str = prompt('Enter a word');
    let strArray = str.split('');
    alert(strArray.length);
}

function exercise5 () {
    let str1 = prompt('Enter a word');
    let str2 = prompt('Enter a word');
    let strArray1 = str1.split('');
    let strArray2 = str2.split('');
    let confirm = true;
    for (let x = 0 ; x < strArray2.length; x++) {
        if (strArray1[x]!=strArray2[x])
            confirm = false;
        break;
    }
    alert(confirm);
}

function exercise6 () {
    let str = prompt('Enter a string');
    let strArray = str.split('');
    for (let x  in strArray){
        if (strArray[x] == '-')
            strArray[x] = '_';
    }
    let newStr = strArray.join('');
    alert(newStr);
}