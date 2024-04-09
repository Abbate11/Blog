const lightSwitch = document.querySelector('#light-switch')
let mode = 'light'
lightSwitch.addEventListener('click', function() {
    if (mode === 'light') {
        document.querySelector(':root').style.setProperty('color-scheme', 'dark')
        mode = 'dark'
    } else {
        document.querySelector(':root').style.setProperty('color-scheme', 'light')
        mode = 'light'
    }
});

