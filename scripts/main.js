const activeBar = document.getElementsByClassName('event-status');
const activeButtons = document.getElementsByClassName('notify-actions');
const activeButton = document.getElementById('active-events');
const inactiveButton = document.getElementById('inactive-events');
let installPrompt;

if (navigator.serviceWorker) {
    console.log('service worker is supported');
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('../service-worker.js')
            .then(reg => {
                console.log('service worker successfully installed')
            })
            .catch(err => {
                alert('Service workers not registered');
                console.log(`error: ${err}`)
            })
    });

} else {
    alert('service worker not supported');
}



window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    installPrompt = event;
    if (installPrompt !== undefined) {
        installPrompt.prompt();
        installPrompt.userChoice.then(choice => {
            console.log(`User Choice ${choice.outcome}`);
        })
    } else {
        return false;
    };
});

function activeElements() {
    activeButton.click();
    activeButton.focus();
}

let activebuttonclick = activeButton.addEventListener('click', () => {
    activeBar[1].style.display = 'none';
    activeBar[0].style.display = 'block';
});

let inactivebuttonclick = inactiveButton.addEventListener('click', () => {
    activeBar[0].style.display = 'none';
    activeBar[1].style.display = 'block';
})

function openNav() {
    document.getElementById("sidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}