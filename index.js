const subscribe = () => {
	const form = document.getElementById('form');

	const validateEmail = () => {
		const emailAddress = document.querySelector('.email');
		const errorMessage = document.querySelector('.error-message');
		const formSection = document.querySelector('.form-section');
		const successMessage = document.querySelector('.success-message');
		const dismissBtn = document.getElementById('dismissBtn');
		const inputEmail = document.getElementById('inputEmail');

		const emailPattern = new RegExp(emailAddress.pattern);
		const testPattern = emailPattern.test(emailAddress.value);

		if (testPattern === false) {
			errorMessage.textContent = 'Valid email required';
			emailAddress.classList.add('error');
		} else {
			errorMessage.textContent = '';
			emailAddress.classList.remove('error');
			formSection.style.display = 'none';
			successMessage.style.display = 'flex';
			inputEmail.textContent = emailAddress.value;
		}

		dismissBtn.addEventListener('click', () => {
			emailAddress.value = '';
			formSection.style.display = 'flex';
			successMessage.style.display = 'none';
		});
	};

	form.setAttribute('novalidate', '');

	form.addEventListener('submit', (event) => {
		event.preventDefault();

		validateEmail();
	});
};

subscribe();
