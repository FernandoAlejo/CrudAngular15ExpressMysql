import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { UsuariosService } from './usuarios.service';
@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
