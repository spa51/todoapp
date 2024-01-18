import { Routes } from '@angular/router';
import { validateSessionGuard } from '@core/guards/validate-session.guard';

export const routes: Routes = [
    {
        path:'auth',
        loadChildren:() => import('@modules/auth/auth.module').then((m) =>  m.AuthModule)
    },
    {
        path:'task',
        loadChildren:() => import('@modules/task/task.module').then((m) =>  m.TaskModule),
        canActivate:[validateSessionGuard]
    }
];