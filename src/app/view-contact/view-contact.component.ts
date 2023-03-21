import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  contactId:string=''
  contact:any;
  groupId:any;//any type
  groupName:any;
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService) { } //FOR initializing injection
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{    //parameter
      console.log(data);//id - contactid=3
      this.contactId=data.contactId //3

      //api call

      this.api.viewcontact(this.contactId).subscribe((data:any)=>{
        console.log(data);
        this.contact=data;
        this.groupId=data.groupId;

        // view groupname
        this.api.getGroupName(this.groupId).subscribe((data:any)=>{
          this.groupName=data.name;
          console.log(this.groupName);
          
        })
      
        
      })      
  })    

  }

}
