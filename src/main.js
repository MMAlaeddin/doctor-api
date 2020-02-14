import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorInfo } from './../src/project-service.js';

$(document).ready(function() {
  $("#docInfo").submit(function(event) {
    event.preventDefault();
    const prob = $("#docName").val();
    $("#docName").val("");

    (async () => {
      let doctorInfo = new DoctorInfo();
      const response = await doctorInfo.getInfo(prob);
      getElements(response);
    })();

    function getElements(response) {
      const docArr = response.data
      const nameArr = [];
      if (response) {
        for (let i = 0; i < docArr.length; i++) {
          nameArr.push(`<li> ${response.data[i].profile.first_name} ${response.data[i].profile.last_name} </li>`);
        }
      }
      
      console.log(response)
      $("#name").append(nameArr)
    }

    


  });

});