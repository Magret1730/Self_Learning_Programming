let x;

let d = new Date(); // instantiating the date object into the variable d

x = d;

x = d.toString();

x = d.getTime(); // gets timestamp
x = d.valueOf(); // gets timestamp

x = d.getFullYear(); // gets the year

x = d.getMonth(); // gets the month and it will be zero based i.e jan is 0, feb is 1 etc.
x = d.getMonth() + 1; // this gives the correct month

x = d.getDate(); // gets day of the month

x = d.getDay(); // gets day of the week

x = d.getHours(); // gets hour of the day

x = d.getMinutes(); // gets minutes of the day

x = d.getMilliseconds(); // gets milliseconds of the day

x = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;

x = Intl.DateTimeFormat('en-Ng').format(d);
x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('default').format(d);

x = Intl.DateTimeFormat('default', {month: 'long'}).format(d); // or

x = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
});

console.log(x);