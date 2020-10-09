// Tutorial comming from Traversy Media 
// https://www.youtube.com/watch?v=r_hYR53r61M&ab_channel=TraversyMedia

console.log('it is working');

let themeDots = document.getElementsByClassName('theme-dot');
for (var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        console.log('I was clicked!', mode);
        setTheme(mode);
    });
}
function setTheme(mode){
     switch (mode) {
        case 'light':
        document.getElementById('theme-style').href = '/firstportfolio/src/css/default.css';
        break;
        case 'purple':
            document.getElementById('theme-style').href = '/firstportfolio/src/css/purple.css';
        break;
        case 'blue':
            document.getElementById('theme-style').href = '/firstportfolio/src/css/blue-dot.css';
        break;
        case 'green':
            document.getElementById('theme-style').href = '/firstportfolio/src/css/green.css';
        break;

        default:
            document.getElementById('theme-style').href = '/firstportfolio/src/css/default.css';
            break;
    }
    // if(mode == light){
    //     document.getElementsById('theme-style').href = '/firstportfolio/src/css/default.css';
    // }
    // if(mode == purple){
    //     document.getElementsById('theme-style').href = '/firstportfolio/src/css/purple.css';
    // }
    // if(mode == blue){
    //     document.getElementsById('theme-style').href = '/firstportfolio/src/css/blue-dot.css';
    // }
    // if(mode == green){
    //     document.getElementsById('theme-style').href = '/firstportfolio/src/css/green.css';
    // }
}
   