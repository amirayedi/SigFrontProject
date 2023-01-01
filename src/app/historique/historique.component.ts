import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { VideoService } from '../service/video.service';
import { User } from '../user';
import { Video } from '../video';
import { map } from 'rxjs';


@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  constructor(private userService: UserService,private videoservice:VideoService) { }

  user!:User
  public videos!:Video[];
  public users: User[]=  new Array;
  ngOnInit(): void {
    this.sleepMethode();
    
  }
  public getUsers():void{
    this.userService.getListeUserByRole().subscribe(data=>{
      this.users=data;
    });
  }
  private delay(ms: number)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

private async sleepMethode()
{
  this.videoservice.getListeVideo().subscribe(async data=>{
    this.videos=data;
   
    for (let i = 0; i < this.videos.length; i++) {
      this.userService.getUserById(Number(this.videos[i].idUser)).pipe(
        map((user: User) => this.user = user)
      ).subscribe()
      await this.delay(1000);
      console.log(this.user)
        this.users.push(this.user)
}

  
  

})}
}
