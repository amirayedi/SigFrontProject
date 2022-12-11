import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharingdataService } from '../service/sharingdata.service';

@Component({
  selector: 'app-tabledashboard',
  templateUrl: './tabledashboard.component.html',
  styleUrls: ['./tabledashboard.component.css']
})
export class TabledashboardComponent implements OnInit {

  
  approvalText:string="";
 
  constructor(private router: Router,private appService: SharingdataService) {
    
   }

  ngOnInit(): void {}

 
  sideBarOpen = false;
  
  sideBarToggler() {
    this.appService.currentApprovalStageMessage.subscribe(msg => this.approvalText = msg);
   console.log(this.approvalText);
    if(this.approvalText=="ttt"){
    this.sideBarOpen = !this.sideBarOpen;
  }
}
}
