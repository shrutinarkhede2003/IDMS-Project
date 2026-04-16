import { Routes } from '@angular/router';
import { InternListComponent } from './components/intern/intern-list/intern-list';
import { InternFormComponent } from './components/intern/intern-form/intern-form';
import { BatchFormComponent } from './components/batch/batch-form/batch-form';
import { BatchListComponent } from './components/batch/batch-list/batch-list';
import { LoginComponent } from './components/auth/login/login';
import { RegisterComponent } from './components/auth/register/register';

export const routes: Routes = [

  // ✅ DEFAULT PAGE
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // AUTH
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // INTERN
  { path: 'interns', component: InternListComponent },
  { path: 'add-intern', component: InternFormComponent },

  // BATCH
  { path: 'add-batch', component: BatchFormComponent },
  { path: 'batches', component: BatchListComponent }
];