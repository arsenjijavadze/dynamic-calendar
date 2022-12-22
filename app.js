const currentDate = document.querySelector('.current-date'),
    daysTag = document.querySelector('.days'),
    prevNextIcon = document.querySelectorAll('.icons span');

// getting new date, current year and month
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octomber', 'November', 'December'];

const renderCalendar = () => {
    //* getDate() returns the day of the month (1 to 31) of a date
    let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(); // getting last date of month
    let liTag = '';

    for (let i = 1; i <= lastDateOfMonth; i++) {
        liTag += `<li>${i}</li>`;

    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener('click', () => { //adding click event on both icons
        console.log(icon);
    })
});