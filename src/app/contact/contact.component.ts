import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public HttpClient:HttpClient) { }

  submitForm: FormGroup = new FormGroup({
    'firstName': new FormControl ( null , [Validators.required , Validators.minLength(3) , Validators.pattern(/^([a-zA-Z]+[,.]?[]?|[a-z]+['-]?)+/)]),
    'LastName': new FormControl ( null , [Validators.required , Validators.minLength(3) , Validators.pattern(/^([a-zA-Z]+[,.]?[]?|[a-z]+['-]?)+/)]),
    'email': new FormControl ( null , [Validators.required, Validators.email]),
    'subject': new FormControl ( null , [ Validators.minLength(3) , Validators.pattern(/^([a-zA-Z]+[,.]?[]?|[a-z]+['-]?)+/)]),
    'message': new FormControl ( null , [Validators.required , Validators.pattern(/^([a-zA-Z]+[,.]?[]?|[a-z]+['-]?)+/)])
  });

  ngOnInit(): void {
    AOS.init();
  }
  getFormData(formData)
  {
    if(formData.valid == true)
    {
      this.sendMail(formData.value).subscribe(data => {
        console.log( data );
        this.submitForm.reset();
      })
      // console.log(formData);
    }
  }
  sendMail(data):Observable<any>
  {
    return this.HttpClient.post( 'https://formspree.io/f/xpzobqdj' , data)
  }
}
