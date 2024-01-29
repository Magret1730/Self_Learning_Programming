let d;

d = new Date(); // to get current date

d = d.toString();

d = new Date(2024, 0, 3, 5, 45, 34); // to get specific date // year, month, day, hour, minute, seconds

d = new Date('2024-01-17T12:30:00');

d = new Date('05/17/2023 12:30:00');

d = Date.now(); // Timestamp is the difference between 1970 and now in milliseconds(ms) i.e difference in time from 1970 and now in ms

d = new Date('07-16-2020 12:30:00'); // the exact timestamp for
d = d.getTime(); // this time i.e 07-16-2020.
d = d.valueOf(); // either this or getTime()

d = new Date(1594911600000); // creating date object from a timestamp

d = Math.floor(Date.now() / 1000); // converting timestamp from ms to seconds

console.log(d);