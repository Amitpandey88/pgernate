const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

function generatePassword() {
	const length = document.getElementById('length').value;
	const includeUppercase = document.getElementById('uppercase').checked;
	const includeNumbers = document.getElementById('numbers').checked;
	const includeSymbols = document.getElementById('symbols').checked;
	
	let chars = lowercaseChars;
	if (includeUppercase) chars += uppercaseChars;
	if (includeNumbers) chars += numberChars;
	if (includeSymbols) chars += symbolChars;
	
	let password = '';
	for (let i = 0; i < length; i++) {
		password += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	
	document.getElementById('password').value = password;
}

document.getElementById('generate-btn').addEventListener('click', generatePassword);

// JavaScript for pop-up
window.onload = function() {
  var popupWrapper = document.querySelector('.popup-wrapper');
  var closePopup = document.querySelector('#close-popup');
  
  if(!sessionStorage.getItem('popupDisplayed')) {
    popupWrapper.style.display = 'flex';
    sessionStorage.setItem('popupDisplayed', 'true');
  }
  
  closePopup.addEventListener('click', function() {
    popupWrapper.style.display = 'none';
  });
}
