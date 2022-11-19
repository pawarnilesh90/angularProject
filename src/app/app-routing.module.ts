import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication.guard';
import { HomeComponent } from './home/home.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent,
    children: [
      {path: 'image-gallery', component: ImageGalleryComponent},
    ]
  },
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  // {path: '**', component: HomeComponent, pathMatch: 'full'},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
