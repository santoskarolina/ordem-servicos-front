import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  navbarActive: boolean = false;
  formLoginActive: boolean = false;
  invalidCredentials: string
  form: FormGroup
  darkTheme: boolean = false
  loading: boolean = false

  constructor(
    private router: Router,
    private readonly userService: UserService,
    private readonly formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    })
  }

  scrollToElement($element): void {
    this.navbarActive = false
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  login(){
    this.loading = true
    this.userService.generateToken(this.form.controls.email.value, this.form.controls.password.value)
      .subscribe(response => {
        const access_token = response.access_token
        this.loading = true
        localStorage.setItem('access_token' , access_token )
        this.router.navigate(['/main/dashboard'])
      }, error => {
        this.loading = false
        this.invalidCredentials = 'Email e/ou senha incorretos'
        setInterval(() => {
          this.invalidCredentials = ''
          }, 5000)
      })
  }

  loginGo(){
    this.router.navigate(['/login'])
  }
}
