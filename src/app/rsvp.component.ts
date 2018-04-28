import { Component } from '@angular/core';

@Component({
  selector: 'rsvp',
  template: `<div class="w3-container w3-padding-64 w3-pale-red w3-center w3-wide" id="rsvp">
  <h1>HOPE YOU CAN MAKE IT!</h1>
  <p class="w3-large">Kindly Respond By November, 2017</p>
  <p class="w3-xlarge">
    <button onclick="document.getElementById('id01').style.display='block'" class="w3-button w3-round w3-red w3-opacity w3-hover-opacity-off" style="padding:8px 60px">RSVP</button>
  </p>
</div>`
})
export class RSVPComponent {
  weddingDate = '04.12.2017';
  coupleName = 'Mitali & Amol';
}
