let darkMode = true;

const rootColors = document.querySelector(':root');

// utility function to change :root variables in style.css
function setColor(rootVar, newColor) {
    rootColors.style.setProperty(rootVar, newColor);
}

// light mode colors
const lightText = '#253237';
const lightBackground = '#919890';
const lightItem = '#fffffd';
const lightShadow = '#d0d9cd';
const lightAccent1 = '#5AA77C';
const lightAccent2 = '#AD5D4E';

// dark mode colors
const darkText = '#F4F3EE';
const darkBackground = '#131312';
const darkItem = '#242324';
const darkShadow = '#1F1E1F';
const darkAccent1 = '#BB87FD';
const darkAccent2 = '#03DBC4';

// fetch web dark/light mode button
const headerButtonImage = document.getElementById('portfolio-header-avatar-image-profile')
const headerButton = document.getElementById('portfolio-header-avatar-image-standard');

// fetch mobile dark/light mode button
const headerButtonMobile = document.getElementById('portfolio-darkmode');

// register listener for web dark/light mode button to determine when it's clicked
headerButton.addEventListener("click", () => {
    if (darkMode == true) {
        setColor('--text', lightText);
        setColor('--background', lightBackground);
        setColor('--item', lightItem);
        setColor('--shadow', lightShadow);
        setColor('--accent-1', lightAccent1);
        setColor('--accent-2', lightAccent2);
        // change background image of web dark/light mode icon to light mode image
        headerButton.style.background = "url(images/Bounds-LightModeIcon.png)";
        // change background image of web avatar to light mode image
        headerButtonImage.src = "images/profile-b862e4b74d31722e21200a3f4f1ad0a8.jpg";
        // change background image of mobile dark/light mode button to light mode image
        headerButtonMobile.style.background = "url(images/Bounds-LightModeIconSmall.png)";
    }
    else {
        setColor('--text', darkText);
        setColor('--background', darkBackground);
        setColor('--item', darkItem);
        setColor('--shadow', darkShadow);
        setColor('--accent-1', darkAccent1);
        setColor('--accent-2', darkAccent2);
        // change background image of web dark/light mode icon to dark mode image
        headerButton.style.background = "url(images/Bounds-DarkModeIconAlt.png)";
        // change background image of web avatar to dark mode image
        headerButtonImage.src = "images/purple-flowers_Q3LW1BRCCL.jpg";
        // change background image of mobile dark/light mode button to dark mode image
        headerButtonMobile.style.background = "url(images/Bounds-DarkModeIconAltSmall.png)";
    }
    darkMode = !darkMode;
});

// register listener for mobile dark/light mode button to determine when it's clicked
headerButtonMobile.addEventListener("click", () => {
    if (darkMode == true) {
        setColor('--text', lightText);
        setColor('--background', lightBackground);
        setColor('--item', lightItem);
        setColor('--shadow', lightShadow);
        setColor('--accent-1', lightAccent1);
        setColor('--accent-2', lightAccent2);
        // change background image of mobile dark/light mode button to light mode image
        headerButtonMobile.style.background = "url(images/Bounds-LightModeIconSmall.png)";
        // change background image of web dark/light mode icon to light mode image
        headerButton.style.background = "url(images/Bounds-LightModeIcon.png)";
        // change background image of web dark/light mode button to light mode image
        headerButtonImage.src = "images/profile-b862e4b74d31722e21200a3f4f1ad0a8.jpg";
    }
    else {
        setColor('--text', darkText);
        setColor('--background', darkBackground);
        setColor('--item', darkItem);
        setColor('--shadow', darkShadow);
        setColor('--accent-1', darkAccent1);
        setColor('--accent-2', darkAccent2);
        // change background image of mobile dark/light mode button to dark mode image
        headerButtonMobile.style.background = "url(images/Bounds-DarkModeIconAltSmall.png)";
        // change background image of web dark/light mode icon to dark mode image
        headerButton.style.background = "url(images/Bounds-DarkModeIconAlt.png)";
        // change background image of web dark/light mode button to dark mode image
        headerButtonImage.src = "images/purple-flowers_Q3LW1BRCCL.jpg";
    }
    darkMode = !darkMode;
});