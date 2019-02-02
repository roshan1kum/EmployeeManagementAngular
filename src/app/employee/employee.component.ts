import { Component, OnInit } from '@angular/core';
import { Employee }from './employee.model';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
   qualification: string[];
   experience: string[];
  languages: { LanguageName: string; IsEnabled: boolean; }[];
  str:string="";
 
  
  ngOnInit(){
    this.qualification = ["10th","12th","B.Tech","B.Sc"];
    this.experience = ["Fresher","One Year","Two year","Five Year"];
    this.languages = [{LanguageName:"Java",IsEnabled:true},
    {LanguageName:"c/c++",IsEnabled:false},{LanguageName:"php",IsEnabled:false},
    {LanguageName:"python",IsEnabled:false},{LanguageName:"C#",IsEnabled:true}];
   
  }
  model=new Employee("",""," "," "," "," ",""," "," "," ",[{LanguageName:"java",IsEnabled:true},
  {LanguageName:"c/c++",IsEnabled:false},{LanguageName:"php",IsEnabled:false},
  {LanguageName:"python",IsEnabled:false},{LanguageName:"C#",IsEnabled:true}]);

  get_checked_values(option: { IsEnabled: boolean; LanguageName: string; },event:any)
  {
    if(event.target.checked)
    {
        this.str+=option.LanguageName+",";
    }
  }

  display_in_console(model:string){
    console.log(model);
    console.log("firstname:"+this.model.firstname);
    console.log("lastname:"+this.model.lastname);
    console.log("email:"+this.model.email);
    console.log("qualification:"+this.model.qualification);
    console.log("experience:"+this.model.experience);
    console.log("username:"+this.model.username);
    console.log("password:"+this.model.password);
    console.log("gender:"+this.model.gender);
    console.log("qualification:"+this.model.qualification);
    console.log("experience:"+this.model.experience);
    console.log("languages:"+this.str)
  }
}