import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ApiService} from "../api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  refresh: string;
  access: string;
  login_form: FormGroup;

  constructor(private apiService: ApiService, private form_builder: FormBuilder, private route: Router) {
  }

  ngOnInit() {
    this.login_form = this.form_builder.group({
      username: '',
      password: ''
    });
  }

  onSubmit() {
    this.apiService.login(this.login_form.value).subscribe(
      (res) => {
            localStorage.setItem("access", res['access']);
            localStorage.setItem("refresh", res['refresh']);

            // Get username from jwt token and save it local storage
            let a = res['access'].split(".");
            localStorage.setItem("username",JSON.parse(atob(a[1])).name);
            this.route.navigateByUrl("/travels").then(() => {
                        window.location.reload();
            });
      }
    );
  }

}
