let atHome = true;
let atBackpack = false;
let atMap = false;
let atSettings = false;

const home = document.getElementById('home');
const backpack = document.getElementById('backpack');
const map = document.getElementById('map');
const settings = document.getElementById('settings');

const homeBtn = document.getElementById('homeBtn');
const backpackBtn = document.getElementById('backpackBtn');
const mapBtn = document.getElementById('mapBtn');
const settingsBtn = document.getElementById('settingsBtn');

function toHome() {
    if (!atHome) {
        backpack.style.display = 'none';
        atBackpack = false;
        backpackBtn.style.opacity = '1';

        map.style.display = 'none';
        atMap = false
        mapBtn.style.opacity = '1';

        settings.style.display = 'none';
        atSettings = false;
        settingsBtn.style.opacity = '1';

        home.style.display = 'block';
        atHome = true;
        homeBtn.style.opacity = '0.7';
    };
};

function toBackpack() {
    if (!atBackpack) {
        home.style.display = 'none';
        atHome = false;
        homeBtn.style.opacity = '1';

        map.style.display = 'none';
        atMap = false
        mapBtn.style.opacity = '1';

        settings.style.display = 'none';
        atSettings = false;
        settingsBtn.style.opacity = '1';

        backpack.style.display = 'block';
        atBackpack = true;
        backpackBtn.style.opacity = '0.7';
    };
};

function toMap() {
    if (!atMap) {
        home.style.display = 'none';
        atHome = false;
        homeBtn.style.opacity = '1';

        backpack.style.display = 'none';
        atBackpack = false;
        backpackBtn.style.opacity = '1';

        settings.style.display = 'none';
        atSettings = false;
        settingsBtn.style.opacity = '1';

        map.style.display = 'block';
        atMap = true;
        mapBtn.style.opacity = '0.7';
    };
};

function toSettings() {
    if (!atSettings) {
        home.style.display = 'none';
        atHome = false;
        homeBtn.style.opacity = '1';

        backpack.style.display = 'none';
        atBackpack = false;
        backpackBtn.style.opacity = '1';

        map.style.display = 'none';
        atMap = false;
        mapBtn.style.opacity = '1';

        settings.style.display = 'block';
        atSettings = true;
        settingsBtn.style.opacity = '0.7';
    };
};

homeBtn.onclick = function() { toHome(); };
backpackBtn.onclick = function() { toBackpack(); };
mapBtn.onclick = function() { toMap(); };
settingsBtn.onclick = function() { toSettings(); };
