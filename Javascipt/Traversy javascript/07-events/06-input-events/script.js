const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(event)
{
    console.log(event.target.value);
    heading.textContent = event.target.value;
}

function onChecked(event)
{
    // console.log(event.target.checked);
    const isChecked = event.target.checked;
    heading.textContent = isChecked ? 'Checked' : 'Not Checked';
}

function onFocus(event)
{
    console.log('Input is focused');
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineWidthidth = '1px';
    itemInput.style.color = 'red';
}

function onBlur(event)
{
    console.log('Input is not focused');
    itemInput.style.outlineStyle = 'none';
}

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput); // same as the above one for priorityInput
checkbox.addEventListener('input', onChecked);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);