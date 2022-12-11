import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingdataService {

  private approvalStageMessage = new BehaviorSubject('false');
  currentApprovalStageMessage = this.approvalStageMessage.asObservable();

  private functioHideLoginNav = new BehaviorSubject('false');
  currentfunctioHideLoginNav = this.functioHideLoginNav.asObservable();
  
  constructor() { }

  updateApprovalMessage(message: string) {
    this.approvalStageMessage.next(message)
    }
    updateLoginNav(message: string) {
      this.functioHideLoginNav.next(message)
      }  


}
