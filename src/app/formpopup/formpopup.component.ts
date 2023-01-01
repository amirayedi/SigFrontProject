import { Component, OnInit ,Inject} from '@angular/core';
import { Objet } from '../objet';
import { ObjetService } from '../service/objet.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Video } from '../video';
import { User } from '../user';
import { UserService } from '../service/user.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { VideoService } from '../service/video.service';
import { SharingdataService } from '../service/sharingdata.service';
export interface DialogData {
  lat: number;
  lng: number;
}
@Component({
  selector: 'app-formpopup',
  templateUrl: './formpopup.component.html',
  styleUrls: ['./formpopup.component.css']
})
export class FormpopupComponent implements OnInit {

  constructor(private objetService: ObjetService,public dialogRef: MatDialogRef<FormpopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private userService:UserService, private httpClient: HttpClient,
    private videoservice:VideoService,private appService: SharingdataService) { }

  nums!:number;
  public objets!: Objet[];
  public visible!:boolean;
  user!:User
  addToMap:string="";
  idLog!:number
  video:Video = new Video();
  
  ngOnInit(): void {
    this.idLog=Number(localStorage.getItem("loggedUser"));
    console.log("ééééééééééééééééééééé"+this.idLog);
    this.getUser();
    this.getObjets();
    console.log(this.data)
  }

  getUser(){
    
    this.userService.getUserById(Number(this.idLog)).pipe(
      map((user: User) => this.user = user)
    ).subscribe()
  }

  public getObjets():void{
    this.objetService.getListeObjet().subscribe(data=>{
      this.objets=data;
    });
    
  }
  onCheckboxChange(e: any) {
   
    if (e.target.checked) {
      this.nums=e.target.value;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
    
  }

  onSubmit(){
  this.video.lat=this.data.lat;
  this.video.lng=this.data.lng;
  this.video.idUser=this.idLog;
  this.addToMap="true"

    this.videoservice.createVideo(this.video,this.nums,this.idLog).subscribe(data=>{
      
    })
    console.log(this.video)
  }
  changevisibility(){
    this.visible=!this.visible;
  }
}



