import {Component,ViewChild,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

declare let google;
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  @ViewChild('map') mapElement:ElementRef;
  map:any;
  
  constructor(public navCtrl: NavController, public geolocation:Geolocation) {

  }

  ionViewDidLoad(){
    this.loadmap();
    }
    
    
    
    
    loadmap(){ 
      this.geolocation.getCurrentPosition().then((position)=>{
        let latlong= new google.maps.LatLng(position.coords.latitude,position.coords.longitude );
    
        let options ={
          center:latlong,
          zoom:14,
           mapTypeId: google.maps.MapTypeId.ROADMAP
           //mapTypeId: google.maps.MapTypeId.SATELLITE
          //mapTypeId: google.maps.MapTypeId.TERRAIN
          //mapTypeId: google.maps.MapTypeId.HYBIRD

        }
     this.map =new google.maps.Map(this.mapElement.nativeElement,options);
////
var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

     var marker = new google.maps.Marker({
      position: latlong,
      map:this.map, 
      title:"Hello World!",
      label: 'mayadah',
      icon : image,
     // draggable:true,
      
    });
////
    },(error)=>{
      console.log(error);
    
       
      });
      
    }

}
