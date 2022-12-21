const currentDate = document.querySelector('.current-date');

// getting new date, current year and month
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octomber', 'November', 'December'];

const renderCalendar = () => {
    //* getDate() returns the day of the month (1 to 31) of a date
    let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(); // getting last date of month

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
}
renderCalendar();