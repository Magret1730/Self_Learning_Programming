const d = new Date(2024, 1, 19, 19, 0, 0);
const month = d.getMonth();
const hour = d.getHours();
//console.log(month);

switch (month)
{
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('february');
        break;
    case 3:
        console.log('March');
        break;
    default:
        console.log('It is not January, February or March.');
}

switch (true)
{
    case hour < 12:
        console.log('Good Morning');
        break;
    case hour < 18:
        console.log('Good Afternoon');
        break;
    default:
        console.log('Good Night');
}