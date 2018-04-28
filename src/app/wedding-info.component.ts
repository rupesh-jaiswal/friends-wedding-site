import { Component } from '@angular/core';

@Component({
  selector: 'wedding-info',
    template: `<div class="w3-container w3-padding-64 w3-pale-red w3-grayscale-min w3-center" id="wedding">
    <div class="w3-content">
      <h1 class="w3-text-grey"><b>THE WEDDING</b></h1>
      <img class="w3-round-large w3-grayscale-min" src="https://www.w3schools.com/w3images/wedding_location.jpg" style="width:100%;margin:64px 0">
      <div class="w3-row">
        <div class="w3-half">
          <h2>When</h2>
          <p>Wedding Ceremony - {{ weddingCeremonyTime }}</p>
          <p>Reception & Dinner - {{ receptionDinnerTime }}</p>
        </div>
        <div class="w3-half">
          <h2>Where</h2>
          <p>Madh Island, Mumbai</p>
          <p><a href="https://www.google.co.in/maps/place/Madh+Island/@19.154738,72.7672343,14z/data=!4m8!1m2!2m1!1smadh+island!3m4!1s0x3be7b5c266a4c43f:0xef992c49ccdee72b!8m2!3d19.1466986!4d72.7890754" title="Madh Island, Mumbai" target="_new" class="w3-hover-text-green">View on map</a></p>
        </div>
      </div>
    </div>
  </div>`
})
export class WeddingInfoComponent {
  weddingCeremonyTime = '2:00pm';
  receptionDinnerTime = '5:00pm';
}
