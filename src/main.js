import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorInfo } from './../src/project-service.js';

$(document).ready(function() {
  $("#docInfo").submit(function(event) {
    event.preventDefault();
    const prob = $("#symptom").val();
    $("#symptom").val("");

    (async () => {
      let doctorInfo = new DoctorInfo();
      const response = await doctorInfo.getInfo(prob);
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $(`#name").append("Based off of your symptoms: ${prob}, we recommend the following doctors.  <li> ${response.data.first_name} ${response.data.last_name}`);
      }
    }


  });

});