document.addEventListener("DOMContentLoaded", function() {
  const daysOfWeek = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];

  const scheduleContainer = document.getElementById('scheduleContainer');

  daysOfWeek.forEach(day => {
    const section = document.createElement('section');
    section.classList.add('schedule');

    const dayHeader = document.createElement('h2');
    dayHeader.textContent = day;

    const ul = document.createElement('ul');
    ul.id = `${day.toLowerCase()}Schedule`;

    const form = document.createElement('form');
    form.id = `${day.toLowerCase()}Form`;
    form.classList.add('schedule-form');

    const input = document.createElement('input');
    input.type = 'text';
    input.id = `${day.toLowerCase()}Item`;
    input.placeholder = 'Add new item';

    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = 'Add';

    form.addEventListener('submit', event => {
      event.preventDefault();
      const input = document.getElementById(`${day.toLowerCase()}Item`);
      const scheduleList = document.getElementById(`${day.toLowerCase()}Schedule`);

      const newItemText = input.value.trim();
      if (newItemText !== '') {
        const li = document.createElement('li');
        li.textContent = newItemText;
        scheduleList.appendChild(li);
        input.value = '';
      }
    });

    form.appendChild(input);
    form.appendChild(button);

    section.appendChild(dayHeader);
    section.appendChild(ul);
    section.appendChild(form);
    scheduleContainer.appendChild(section);
  });
});
