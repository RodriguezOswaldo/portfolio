// Tutorial comming from Traversy Media 
// https://www.youtube.com/watch?v=r_hYR53r61M&ab_channel=TraversyMedia

let theme = localStorage.getItem('theme');
if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot');
for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode;
        console.log('I was clicked!', mode);
        setTheme(mode);
    });
}
function setTheme(mode) {
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
    localStorage.setItem('theme', mode);
}

function auth() {

    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var email = document.getElementById("email").value;

    //     window.location.assign("submit.html");
    //     if (name.length != 0 || email.length != 0) {
    //     } else {
    //         alert("Fields must be completed before submitting the form")
    //     }
}
