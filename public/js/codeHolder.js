    // EDIT a dog

    function showEditDogForm() {
        document.querySelector('.edit-dog-form').style.display = 'block';
        document.querySelector('#submitEdit-btn').style.display = 'block';
      }
    
  
      // Hide the dog form after the form has been submitted
      function hideEditDogForm() {
      document.querySelector('.edit-dog-form').style.display = 'none';
      document.querySelector('#submitEdit-btn').style.display = 'none';
      }
    
    
      const editDogFormHandler = async (event) => {
        event.preventDefault();
    
        const name = document.querySelector('#editdog-name').value.trim();
        const age = document.querySelector('#editdog-age').value.trim();
        const breed = document.querySelector('#editdog-breed').value.trim();
        const gender = document.querySelector('#editdog-gender').value.trim();
  
        const id = window.location.toString().split('/')[
          window.location.toString().split('/').length -1
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
          } else {
            alert(response.statusText);
          }
        
      
      };
      
      document.querySelector('#submitEdit-btn').addEventListener('click', editDogFormHandler);

// ME TO DO: 
// - event PUT set up & test when Myles fixes host_id
// - profile user delete button & redirect to homepage
// - profile edit button & 
// --- form for password verification
// --- form for editing the user fields (password needs to have placeholder of "Enter New Password")
// - obtain gender value via radio button chosen