var toggle = document.querySelector('#toggle');

toggle.addEventListener('input', switchTheme);

function switchTheme(e) {
    let body = document.body;
    let all = document.querySelectorAll('body *');

    if (e.target.checked) {
        console.log("You're in the dark theme no! :D");
        body.classList.add('dark');
        for (let i = 0; i < all.length; i++) {
            all[i].classList.add('dark');
        }
    } else {
        console.log("You're in the light theme");
        body.classList.remove('dark');
        for (let i = 0; i < all.length; i++) {
            all[i].classList.remove('dark');
        }
    }
}