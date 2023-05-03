
var main = document.querySelector('.main');
        
console.log(main.getAttribute('style')); 
console.log(numbers);

function updateColor() {
    var randnumber = Math.floor(Math.random()*200)
    var randnumber1 = Math.floor(Math.random()*100)
    var x = Math.floor(Math.random()*225)
    var y = Math.floor(Math.random()*225)
    var z = Math.floor(Math.random()*225)
    // var lineargrad = main.getAttribute('style');
    main.setAttribute('style', 'background: linear-gradient( '+randnumber+'deg, rgb('+x+', '+y+', '+z+') '+randnumber1+'%, black );')
    var linearGradColor = main.getAttribute('style')
    var textsyle = document.querySelector('.text-style');

    textsyle.innerHTML = linearGradColor
    
}
