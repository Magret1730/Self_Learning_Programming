const form = document.querySelector('#item-form');

function onSubmit(event)
{
    event.preventDefault();
    // console.log('Submit');

    const item = document.getElementById('item-input').value;
    const priority = document.getElementById('priority-input').value;

    if (item === '' || priority === '0')
    {
        alert('Fill in all fields');
        return;
    }

    console.log(item, priority);
}

function onSubmit2(event)
{
    event.preventDefault();

    const formData = new FormData(form);

    // console.log(formData);
    // const item = formData.get('item'); // The item in the get() is the name='item' in index.html
    // const priority = formData.get('priority'); // The item in the get() is the name='priority' in index.html

    const entries = formData.entries();
    // console.log(entries);

    for (let entry of entries)
    {
        console.log(entry[1]);
    }

    // console.log(item, priority);
}

// form.addEventListener('submit', onSubmit);
form.addEventListener('submit', onSubmit2);