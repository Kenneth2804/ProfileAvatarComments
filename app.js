document.addEventListener('DOMContentLoaded', function () {
	const coverPhoto = document.getElementById('coverPhoto');
	const profilePhoto = document.getElementById('profilePhoto');
	const coverPhotoInput = document.getElementById('coverPhotoInput');
	const profilePhotoInput = document.getElementById('profilePhotoInput');
	const commentInput = document.getElementById('commentInput');
  	const commentPhotoInput = document.getElementById('commentPhotoInput');
  	const commentButton = document.getElementById('commentButton');
  	const commentsContainer = document.getElementById('comments'); 


  	coverPhotoInput.addEventListener('change', function (event) {
  		const file = event.target.files[0];
  		if (file) {
  			const reader = new FileReader();
  			reader.onload = function (e) {
  				coverPhoto.src = e.target.result;
  			};
  			reader.readAsDataURL(file);
  		}
  	});


  	profilePhotoInput.addEventListener('change', function (event) {
  		const file = event.target.files[0];
  		if (file) {
  			const reader = new FileReader();
  			reader.onload = function (e) {
  				profilePhoto.src = e.target.result;
  			};
  			reader.readAsDataURL(file);
  		}
  	});



  	commentButton.addEventListener('click', function (){

  		const commentText = commentInput.value;
  		const commentPhoto = commentPhotoInput.files[0];

  		if (commentText || commentPhoto) {
  			const commentElement = document.createElement('div');
  			commentElement.classList.add('comment');

  			if (commentText) {
  				const textElement = document.createElement('p');
  				textElement.textContent = commentText;
  				commentElement.appendChild(textElement);
  			}
  			if (commentPhoto) {
  				const photoElement = document.createElement('img');
  				const reader = new FileReader();

  				reader.onload = function (e) {
  					photoElement.src = e.target.result;
  					commentElement.appendChild(photoElement);
  				}
  				reader.readAsDataURL(commentPhoto);
  			}

  			commentsContainer.appendChild(commentElement);
  			commentInput.value = '';
  			commentPhotoInput.value = '';
  		}

  	})

})