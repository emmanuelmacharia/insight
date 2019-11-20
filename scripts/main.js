const activeBar = document.getElementsByClassName('event-status');
const activeButtons = document.getElementsByClassName('notify-actions');
const activeButton = document.getElementById('active-events');
const inactiveButton = document.getElementById('inactive-events');
let installPrompt;

function activeElements() {
    activeButton.click();
    activeButton.focus();
    console.log('called')
}

let activebuttonclick = activeButton.addEventListener('click', () => {
    activeBar[1].style.display = 'none';
    activeBar[0].style.display = 'block';
});

let inactivebuttonclick = inactiveButton.addEventListener('click', () => {
    activeBar[0].style.display = 'none';
    activeBar[1].style.display = 'block';
})

if (navigator.serviceWorker) {
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

window.addEventListener('appinstalled', event => {
    if (Notification.permission === 'granted') {
        console.log('true')
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission()
            .then(permit => {
                if (pernit === 'granted') console.log('You can get notifications now')
            });
    };

    var new1Notification = new Notification('Notification Three', {
        body: 'This is the first Notification',
        badge: "./android-chrome-256x256.png",
        icon: "./android-chrome-256x256.png",
        renotify: true,
        tag: 'pwa',
        lang: 'en-US',
        dir: 'ltr',
        silent: true,
        timestamp: Date.now()
    });

    var new2Notification = new Notification('Notification Three', {
        body: 'This is the second Notification',
        badge: "./android-chrome-256x256.png",
        icon: "./android-chrome-256x256.png",
        renotify: true,
        tag: 'pwa',
        lang: 'en-US',
        dir: 'ltr',
        silent: true,
        timestamp: Date.now()
    });

    var new3Notification = new Notification('Notification Three', {
        body: 'This is the third Notification',
        badge: "./android-chrome-256x256.png",
        icon: "./android-chrome-256x256.png",
        renotify: true,
        tag: 'pwa',
        lang: 'en-US',
        dir: 'ltr',
        silent: true,
        timestamp: Date.now()
    });
});

function openNav() {
    document.getElementById("sidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}