document.getElementById('fontList').addEventListener('click', changeFont);

function changeFont(event) {
    if (event.target.tagName.toLowerCase() === 'li') {
        const header = document.getElementById('title');
        const chosenFont = event.target.getAttribute('data-font');

        if (chosenFont === 'ZZZ') {
            header.classList.add('special-font');
        } else {
            header.classList.remove('special-font');
        }
    }
}