import { Component } from '@angular/core';

@Component({
  selector: 'nav-footer',
  template: `<div class="w3-bottom w3-hide-small">
    <div class="w3-bar w3-white w3-center w3-padding w3-opacity-min w3-hover-opacity-off">
      <a href="#home" style="width:20%" class="w3-bar-item w3-button">Home</a>
      <a href="#us" style="width:20%" class="w3-bar-item w3-button">{{ coupleName }}</a>
      <a href="#engagement" style="width:20%" class="w3-bar-item w3-button">Engagement Highlights</a>
      <a href="#wedding" style="width:20%" class="w3-bar-item w3-button">Wedding</a>
      <a href="#rsvp" style="width:20%" class="w3-bar-item w3-button w3-hover-black">RSVP</a>
    </div>
  </div>
  <!-- RSVP modal -->
<div id="id01" class="w3-modal">
  <div class="w3-modal-content w3-card-4 w3-animate-zoom" style="padding:32px;max-width:600px">
    <div class="w3-container w3-white w3-center">
      <h1 class="w3-wide">CAN YOU COME?</h1>
      <p>We really hope you can make it.</p>
      <form>
        <input class="w3-input w3-border" type="text" placeholder="Name(s)" name="name">
      </form>
      <p><i>Sincerely, {{ coupleName }}</i></p>
      <div class="w3-row">
        <div class="w3-half">
          <button onclick="document.getElementById('id01').style.display='none'" type="button" class="w3-button w3-block w3-green">Going</button>
        </div>
        <div class="w3-half">
          <button onclick="document.getElementById('id01').style.display='none'" type="button" class="w3-button w3-block w3-red">Can't come</button>
        </div>
      </div>
    </div>
  </div>
</div>
`
})
export class NavFooterComponent {
  weddingDate = '04.12.2017';
  coupleName = 'Mitali & Amol';
}
