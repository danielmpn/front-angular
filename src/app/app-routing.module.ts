import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'sidebar', component: SidebarComponent },
    { path: 'login', component: LoginComponent },
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}