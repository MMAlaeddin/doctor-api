export class DoctorInfo {
	async getInfo(prob) {
			try {
				let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=2f43b27dfaff1f12faada478a028be97`);
				let jsonifiedResponse;
				if (response.ok && response.status == 200) {
					jsonifiedResponse = await response.json();
				} else {
					jsonifiedResponse = false; 
				}
				return jsonifiedResponse;
			 	} catch {
					 return false;
				 }
			}
		}