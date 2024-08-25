const saySanjaya = function(){
    console.log('sanjaya')
}

const changeHeading = function(){
    document.querySelector('h1').innerHTML= 'Aa raha hu'

}
setTimeout(saySanjaya, 2000);
const changeMe = setTimeout(changeHeading, 5000);

document.querySelector('.stop').addEventListener('click', function(){
    clearTimeout(changeMe);
    console.log('stopped')
})