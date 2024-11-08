var toggleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('experience');
toggleButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
    if (toggleButton.textContent === 'Show Skills') {
        toggleButton.textContent = 'Hide Skills';
    }
    else {
        toggleButton.textContent = 'Show Skills';
    }
    localStorage.setItem('displaySkills', skills.style.display);
});
