// Back button for the dog form if the user doesn't want to add another dog 
function backEditDogForm() {
  document.location.replace('/profile');
}

// Hide and appear  
function editFromDogSummary() {
  const dogEditForm = document.querySelector('.edit-dog-form');

  document.querySelector('#dogEditCard').style.display = 'block';
  dogEditForm.scrollIntoView({behavior: 'smooth', block: "start"});
}

const editDogFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#editdog-name').value.trim();
  const age = document.querySelector('#editdog-age').value.trim();
  const breed = document.querySelector('#editdog-breed').value.trim();
  const gender = document.querySelector('#editdog-gender').value.trim();
  const dogProfileForm = document.querySelector('#dogProfileForm');

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  console.log(id);

  const response = await fetch(`/api/dogs/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ name, age, breed, gender }),
    headers: { 'Content-Type': 'application/json' },
  });

  // IF response is successful, then reload
  if (response.ok) {
    document.location.reload();
    dogProfileForm.reload();
  } else {
    console.log(response.statusText);
  }

};

document.querySelector('#submitEdit-btn').addEventListener('click', (event) => {
  dogValidation(event);
  editDogFormHandler(event);
});

//Validations
function dogValidation(event) {
  event.preventDefault();
  const name = document.querySelector('#editdog-name').value.trim();
  const age = document.querySelector('#editdog-age').value.trim();
  const ageLength = age.length;
  const breed = document.querySelector('#editdog-breed').value.trim();

  const nameError = document.querySelector('.no-dog-name-msg')
  const ageError = document.querySelector('.no-dog-age-msg')
  const maxAgeError = document.querySelector('.max-dog-age-msg')
  const breedError = document.querySelector('.no-dog-breed-msg')

  if (!name) {
    nameError.classList.remove("d-none")
  } else {
    nameError.classList.add("d-none")
  }

  if (!age) {
    ageError.classList.remove("d-none")
    maxAgeError.classList.add("d-none")
  } else if (ageLength > 2) {
    ageError.classList.add("d-none")
    maxAgeError.classList.remove("d-none")
  }
  else if (age > 35) {
    ageError.classList.add("d-none")
    maxAgeError.classList.remove("d-none")
  } else {
    ageError.classList.add("d-none")
    maxAgeError.classList.add("d-none")
  }

  if (!breed) {
    breedError.classList.remove("d-none")
  } else {
    breedError.classList.add("d-none")
  }

  if (!name || !age || ageLength > 2 || age > 35 || !breed) {
    return
  }
}