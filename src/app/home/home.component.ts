import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import {MatDialog} from '@angular/material/dialog';
import { HomeserviceService } from '../service/homeservice.service';
import { FormpopupComponent } from '../formpopup/formpopup.component';
import { VideoService } from '../service/video.service';
import { Video } from '../video';
import { Objet } from '../objet';
import { SharingdataService } from '../service/sharingdata.service';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../service/user.service';
import { map } from 'rxjs';


export interface DialogData {
  lat: number;
  lng: number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
   
    ngOnInit(): void {
      this.idLog=Number(localStorage.getItem("loggedUser"));
      console.log("ééééééééééééééééééééé"+this.idLog);
      this.getUser();
         this.sleepMethode();
        } 

constructor(public dialog: MatDialog,private homeserviceService:HomeserviceService,private videoservice:VideoService ,
  private appService: SharingdataService,private userService:UserService, private httpClient: HttpClient) { }
  
  addToMap:string="";  
public videos!:Video[];
private map: any;
addto:boolean=false
private centroid: L.LatLngExpression = [36.81521854992971, 10.062354818948034]; //
private centroidmax: number[]= new Array;
public indexedArray: number[] = new Array;
searchValue!:any;
public objet!:Objet;
public objets:Objet[] = new Array;
user!:User
idLog!:Number
public greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

public defaultIcon = L.icon({
  iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII='
  ,shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

getUser(){
    
  this.userService.getUserById(Number(this.idLog)).pipe(
    map((user: User) => this.user = user)
  ).subscribe()
}

private delay(ms: number)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

private async sleepMethode()
{
  this.getVideos();
  await this.delay(300);
  this.initMap();
}

public getVideos():void{
  this.videoservice.getListeVideo().subscribe(data=>{
    this.videos=data; 
    console.log(this.videos)
  }); 
}

private initMap(): void {
 
  const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    minZoom: 9,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });
 
  this.map = L.map('map', {
    center: this.centroid,
    zoom: 12
  });

  for (let i = 0; i < this.videos.length; i++) {
    this.objet = this.videos[i].objet;
    this.objets.push(this.objet)
    console.log(this.objets);
  }

for (let i = 0; i < this.videos.length; i++) {
  
  this.indexedArray.push(this.videos[i].lat) 
  this.indexedArray.push(this.videos[i].lng)
  this.centroidmax = this.indexedArray;
  L.marker(this.centroidmax as L.LatLngExpression , {icon: this.defaultIcon})
  .bindPopup(this.homeserviceService.makeCapitalPopup(this.videos[i]))
  .addTo(this.map)
  this.indexedArray.pop()
  this.indexedArray.pop()
  
}

if(this.user.role=="streamer"){
    this.map.on("click", async (e: { latlng: { lat: number; lng: number; }; }) => {
        console.log(e.latlng);
         this.openDialog(e.latlng);// get the coordinates
        L.marker([e.latlng.lat, e.latlng.lng], {icon: this.defaultIcon})
        .addTo(this.map); // add the marker onclick
         
      });
      
    }
   
  (L.Control as any).geocoder().addTo(this.map);
  tiles.addTo(this.map);

}


  openDialog(e : any): void {
    const dialogRef = this.dialog.open(FormpopupComponent, {
      data: {lat: e.lat, lng:  e.lng},
    });
  }


  search(){
    if(this.searchValue=="")
    {
      for (let i = 0; i < this.videos.length; i++) {
          this.indexedArray.push(this.videos[i].lat) 
          this.indexedArray.push(this.videos[i].lng)
          this.centroidmax = this.indexedArray;
          L.marker(this.centroidmax as L.LatLngExpression , {icon: this.defaultIcon})
          .bindPopup(this.homeserviceService.makeCapitalPopup(this.videos[i]))
          .addTo(this.map)
          this.indexedArray.pop()
          this.indexedArray.pop()
        
      }
    }
    else{
      for (let i = 0; i < this.objets.length; i++) {
        if(this.objets[i].value==this.searchValue){
          this.indexedArray.push(this.videos[i].lat) 
          this.indexedArray.push(this.videos[i].lng)
          this.centroidmax = this.indexedArray;
          L.marker(this.centroidmax as L.LatLngExpression , {icon: this.greenIcon})
          .bindPopup(this.homeserviceService.makeCapitalPopup(this.videos[i]))
          .addTo(this.map)
          this.indexedArray.pop()
          this.indexedArray.pop()
        }
      }
      }
    }
  }




