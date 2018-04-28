import { Component, OnInit } from '@angular/core';
import { WeddingService} from './wedding.service';
@Component({
  selector: 'engagement-hightlights',
    template: `<div class="w3-container w3-padding-64 w3-pale-red w3-grayscale-min w3-center" id="engagement">
  <header class="w3-center w3-margin-bottom">
  <h1><b>Engagement Highlights</b></h1>
  <p><b>We got engaged on {{ engagementDate }}</b></p>
</header>


<!-- Photo Grid -->
<div class="w3-row" id="myGrid" style="margin-bottom:128px">
  <div class="w3-third" *ngFor="let k of [0,1,2]">
    <div *ngFor="let image of engagementImages; let i=index">
      <img *ngIf="i>=0+rowNo*k && i<rowNo+rowNo*k" src="assets/IMG-20171020-WA000{{ image }}.jpg" style="width:100%;cursor:pointer" (click)="showImageView(i)">
    </div>
  </div>
</div>
</div>
  <!-- Image View modal -->
<div id="id02" class="w3-modal">
  <div class="w3-modal-content w3-card-4 w3-animate-zoom" style="max-width:800px">
  <span style="padding-left:20px;padding-top:10px">
    <b> 
      Image {{ selectedImage+1 }} of {{ noOfImages }} 
    </b>
  </span>
  <button onclick="document.getElementById('id02').style.display='none'" type="button" class="w3-button w3-red" style="float:right">x</button>
  
  <button (click)="onNext();$event.stopPropagation()" [disabled]="selectedImage === 11" type="button" class="w3-button w3-green" style="float:right">Next ></button> 
  
  <button (click)="onPrevious();$event.stopPropagation()" [disabled]="selectedImage === 0" type="button" class="w3-button w3-green" style="float:right">< Previous</button> 

    <div class="w3-container w3-white w3-center">
      <img src="assets/IMG-20171020-WA000{{ selectedImage }}.jpg" style="width:100%">
    </div>
  </div>
</div>




`
})
export class EngagementHighLights implements OnInit {
  engagementDate:String;
  engagementImages:string[];
  rowNo=4;
  selectedImage;
  noOfImages=12;
  constructor(private weddingService: WeddingService) { }
  ngOnInit(): void {
    this.getEngagementDate();
    this.getEngagementImages();
  };

  getEngagementDate(): void {
    this.weddingService.getWeddingDetails()
      .then(weddingDetails => {this.engagementDate=weddingDetails.engagementDate});
  }

  getEngagementImages(): void {
    this.weddingService.getEngagementImages()
      .then(engagementImages => {this.engagementImages=engagementImages});
  }

  showImageView(image):void {
    this.selectedImage=image;
    document.getElementById('id02').style.display='block';
  }

  onPrevious():void {
    console.log("previous");
    this.selectedImage=this.selectedImage-1;
  }
  onNext():void {
    this.selectedImage=this.selectedImage+1;
  }
}