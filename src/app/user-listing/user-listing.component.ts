import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../service/auth.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { UpdatePopupComponent } from '../update-popup/update-popup.component';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements OnInit {
 constructor(private service:AuthService, private dialog:MatDialog){}
 userList:any;
 dataSource:any;
 @ViewChild(MatPaginator) paginator !:MatPaginator
 displayedColumns:string[]=['id','name', 'email', 'role', 'gender', 'dob', 'action']
 ngOnInit(): void {
  this.service.getAll().subscribe(resp=>{
    this.userList = resp;
    console.log("user list =",this.userList);
    
    this.dataSource = new MatTableDataSource(this.userList);
    this.dataSource.paginator = this.paginator;

  })
     
 }

 Update(code:any){
  // this.dialog.open(UpdatePopupComponent),{
  //   enterAnimationDuration:'1000ms',
  //   exitAnimationDuration:'500ms',
  //   width:'50%',
  //   data:{
  //     usercode:id
  //   }


    
  // }
  this.openDialog('300ms', '600ms', code)

 }
 openDialog(enterAnimation:any,exitAnimation:any, code:string)
 {
  const popup = this.dialog.open(UpdatePopupComponent,{
    enterAnimationDuration:enterAnimation,
    exitAnimationDuration:exitAnimation,
    width:'30%',
    data:{
      usercode:code,
    }
      
    });
    popup.afterClosed().subscribe(res=>{
  this.ngOnInit()      
    })
 }
  
}
