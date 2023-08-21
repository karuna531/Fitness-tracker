import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth!:boolean;
  constructor(){}
  ngOnInit(){
    // this.authSubscription = this.authService.authChange.subscribe(authStatus =>{
    //   this.isAuth = authStatus;
    //   authSubscription:Subscription

    // })
    
  }
  
  onToggleSidenav(){
    this.sidenavToggle.emit();

  }
}
