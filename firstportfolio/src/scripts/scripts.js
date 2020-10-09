// Tutorial comming from Traversy Media 
// https://www.youtube.com/watch?v=r_hYR53r61M&ab_channel=TraversyMedia

console.log('it is working');

let themeDots = document.getElementsByClassName('theme-dot');
for (var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        console.log('I was clicked!');
    });
}