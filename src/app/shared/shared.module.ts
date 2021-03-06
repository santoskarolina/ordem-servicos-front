import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SharedRoutingModule } from './shared.routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { LoginFormComponent } from './login-form/login-form.component';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SelectUserPhotoComponent } from './select-user-photo/select-user-photo.component';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    LoginFormComponent,
    SelectUserPhotoComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    SelectUserPhotoComponent
  ]
})
export class SharedModule { }
