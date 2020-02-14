import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorInfo } from './../src/project-service.js';
import { DoctorSymp } from './../src/project-service.js';

$(document).ready(function() {
  $("#docInfo").submit(function(event) {
    event.preventDefault();
    const name = $("#docName").val();
    $("#docName").val("");

    (async () => {
      let doctorInfo = new DoctorInfo();
      const response = await doctorInfo.getInfo(name);
      getElements(response);
    })();

    function getElements(response) {
      const docArr = response.data;
      const nameArr = [];
      if (response) {
        for (let i = 0; i < docArr.length; i++) {
          nameArr.push(`<li> ${response.data[i].profile.first_name} ${response.data[i].profile.last_name} - ${response.data[i].practices[i].visit_address.street} - ${response.data[i].practices[i].accepts_new_patients} </li>`)
        
        }
      }



      console.log(response)
      $("#name").append(nameArr)

    
    
    }
  });

});