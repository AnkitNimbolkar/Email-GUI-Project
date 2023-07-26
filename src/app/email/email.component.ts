import { Component, OnInit } from '@angular/core';
import { EmailService } from '../service/email.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit
{
  data={
    to:"",
    subject:"",
    message:""

  }
  constructor(private email:EmailService, private snak:MatSnackBar){}
  ngOnInit(): void{

  }

  doSubmitForm()
  {
    console.log("try to submit form") ;
    console.log("DATA", this.data);

    if(this.data.to=='' || this.data.subject=='' || this.data.message=='')
    {
    }
    this.email.sendEmail(this.data).subscribe
    (
      Response=>{console.log(Response)},
      error=>{console.log(error)}
    )
  }
}
