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
        $("#name").text(`${response.data.bio}`);
        console.log(response);
      }

  });

});