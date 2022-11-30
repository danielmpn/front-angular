import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmpresaComponent } from "./components/empresa/empresa.component";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'empresa', component: EmpresaComponent },
    { path: 'login', component: LoginComponent },
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}