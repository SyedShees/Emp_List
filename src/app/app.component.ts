import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Emp_List';
  public employee = [{id:"1",name:"shees",department:"hr"},
  {id:"2",name:"zaeem",department:"HR"},
  {id:"3",name:"farzam",department:"CS"},
  {id:"4",name:"haider",department:"QA"},
  {id:"5",name:"hussain",department:"tester"}];

  detail={id:"",name:"",department:""};

  details(data:any){
    this.detail=data;
    console.log(this.detail);
    
  }

}
