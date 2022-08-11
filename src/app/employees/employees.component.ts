import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  @Input() employee:any;
  @Output() data= new EventEmitter<{id:string,name:string, department:string}>();

  Addtask(input:any){
    var Id=input.id;
    var Name=input.name;
    var Department=input.department;
    this.data.emit({id:Id,name:Name,department:Department});
    
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
