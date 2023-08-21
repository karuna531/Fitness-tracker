import { Component, OnInit, EventEmitter, Output, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth!:boolean;
  constructor(private router:Router){}
  ngOnInit(){
    
    
  }
  
  onToggleSidenav(){
    this.sidenavToggle.emit();

  }
  ismenuRequired=false;
ngDoCheck(): void {
  let currentUrl = this.router.url;
  if(currentUrl == '/login' || currentUrl == '/signup'){
    this.ismenuRequired = false;
  }
  else{
    this.ismenuRequired = true;

  }

}  
}
