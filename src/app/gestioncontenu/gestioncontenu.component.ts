import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Objet } from '../objet';
import { ObjetService } from '../service/objet.service';

@Component({
  selector: 'app-gestioncontenu',
  templateUrl: './gestioncontenu.component.html',
  styleUrls: ['./gestioncontenu.component.css']
})
export class GestioncontenuComponent implements OnInit {

  constructor(private objetService: ObjetService,private router:Router ,private route : ActivatedRoute) { }

  public objets!: Objet[];
  ngOnInit(): void {
    this.getObjets();
  }
  public getObjets():void{
    this.objetService.getListeObjet().subscribe(data=>{
      this.objets=data;
    });
    
  }

  deleteobjet(id:number){
    this.objetService.deleteObjet(id).subscribe(data=>{
      console.log("deleted");
      this.router.navigate(['home']);
    })

  }

}
