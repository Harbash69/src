import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { ContactComponent } from './components/contact/contact.component';
const routes: Routes = [
  {path:'login', component:LoginComponent },
  {path:'formulaire', component:FormulaireComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
