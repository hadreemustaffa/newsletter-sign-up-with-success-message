const subscribe = () => {
	const form = document.getElementById('form');

	const validateEmail = () => {
		const emailAddress = document.querySelector('.email');
		const errorMessage = document.querySelector('.error-message');
		const formSection = document.querySelector('.form-section');
		const successMessage = document.querySelector('.success-message');
		const dismissBtn = document.getElementById('dismissBtn');
		const inputEmail = document.getElementById('inputEmail');

		const testEmail = () => {
			const emailPattern = new RegExp(emailAddress.pattern);
			return (testPattern = emailPattern.test(emailAddress.value));
		};

		if (!testEmail()) {
			errorMessage.textContent = 'Valid email required';
			emailAddress.classList.add('error');
			emailAddress.classList.remove('success');
		} else {
			errorMessage.textContent = '';
			emailAddress.classList.remove('error');
			emailAddress.classList.add('success');
			formSection.style.display = 'none';
			successMessage.style.display = 'flex';
			inputEmail.textContent = emailAddress.value;
		}

		emailAddress.addEventListener('input', () => {
			if (!testEmail()) {
				errorMessage.textContent = 'Valid email required';
				emailAddress.classList.add('error');
				emailAddress.classList.remove('success');
			} else {
				errorMessage.textContent = '';
				emailAddress.classList.remove('error');
				emailAddress.classList.add('success');
			}
		});

		dismissBtn.addEventListener('click', () => {
			emailAddress.value = '';
			emailAddress.classList.remove('success');
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
