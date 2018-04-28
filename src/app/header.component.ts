import { Component, OnInit } from '@angular/core';
import { WeddingService } from './wedding.service';
@Component({
  selector: 'my-header',
  template: `<header class="w3-display-container w3-wide bgimg w3-grayscale-min" id="home">
    <div class="w3-display-middle w3-text-white w3-center">
      <h1 class="w3-jumbo">{{ coupleName }}</h1>
      <h2>Are getting married</h2>
      <h2><b>{{ weddingDate }}</b></h2>
      <div class="middle">
        <hr>
        <p id="Timer" style="font-size:30px"></p>
      </div>
    </div>
  </header>`
})
export class HeaderComponent implements OnInit {
  coupleName:String;
  weddingDate:String;
  constructor(private weddingService: WeddingService) { }
  ngOnInit(): void {
    this.getWeddingDetails();
  };
  getWeddingDetails(): void {
    this.weddingService.getWeddingDetails()
      .then(weddingDetails => {this.coupleName = weddingDetails.coupleName;
        this.weddingDate = weddingDetails.weddingDate });
    // Set the date we're counting down to
var countDownDate = new Date("Dec 4, 2017 17:15:00").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("Timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s to go";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("Timer").innerHTML = "Wedding Started.Lets Rock!!!!";
    }
}, 1000);
  }
}
