import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProductCreateComponent } from '../product/product-create/product-create.component';
import { ProductDetailComponent } from '../product/product-detail/product-detail.component';
import { ProductEditComponent } from '../product/product-edit/product-edit.component';
import { ProductListComponent } from '../product/product-list/product-list.component';
import { RequestCreateComponent } from '../request/request-create/request-create.component';
import { RequestDetailComponent } from '../request/request-detail/request-detail.component';
import { RequestEditComponent } from '../request/request-edit/request-edit.component';
import { RequestListComponent } from '../request/request-list/request-list.component';
import { RequestReviewComponent } from '../request/request-review/request-review.component';
import { RequestlineCreateComponent } from '../requestline/requestline-create/requestline-create.component';
import { RequestlineEditComponent } from '../requestline/requestline-edit/requestline-edit.component';
import { RequestlineListComponent } from '../requestline/requestline-list/requestline-list.component';
import { UserCreateComponent } from '../user/user-create/user-create.component';
import { UserDetailComponent } from '../user/user-detail/user-detail.component';
import { UserEditComponent } from '../user/user-edit/user-edit.component';
import { UserListComponent } from '../user/user-list/user-list.component';
import { UserLoginComponent } from '../user/user-login/user-login.component';
import { VendorCreateComponent } from '../vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from '../vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from '../vendor/vendor-edit/vendor-edit.component';
import { VendorListComponent } from '../vendor/vendor-list/vendor-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch:'full'},

  {path: 'home', component: HomeComponent },

  {path: 'users/list', component: UserListComponent},
  {path: 'users/create', component: UserCreateComponent},
  {path: 'users/detail/:id', component: UserDetailComponent},
  {path: 'user/edit/:id', component: UserEditComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'vendors/list', component: VendorListComponent},
  {path: 'vendor/detail/:id', component: VendorDetailComponent},
  {path: 'vendor/edit/:id', component: VendorEditComponent},
  {path: 'vendors/create', component: VendorCreateComponent},
  {path: 'products/list', component: ProductListComponent},
  {path: 'products/create', component: ProductCreateComponent},
  {path: 'products/detail/:id', component: ProductDetailComponent},
  {path: 'products/edit/:id', component: ProductEditComponent},
  {path: 'requests/list', component: RequestListComponent},
  {path: 'requests/detail/:id', component: RequestDetailComponent},
  {path: 'requests/edit/:id', component: RequestEditComponent},
  {path: 'requests/create', component: RequestCreateComponent},
  {path: 'requests/requestline/:id', component: RequestlineListComponent},
  {path: 'requests/review/:id', component: RequestReviewComponent},
  {path: 'requestline/edit/:id', component: RequestlineEditComponent},
  {path: 'requestline/create/:id', component: RequestlineCreateComponent},

  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
