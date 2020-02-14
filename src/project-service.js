export class DoctorInfo {
	async getInfo(info) {
			try {
				let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=2f43b27dfaff1f12faada478a028be97`);
				let jsonifiedResponse = await response.json(); 
				return jsonifiedResponse; 
			} catch(error) {
				console.error("I'm sorry, we cannot process your request.  We received an error: " + error.message);
			}
		}
	}