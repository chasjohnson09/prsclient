import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCreateComponent } from '../user/user-create/user-create.component';
import { UserLoginComponent } from '../user/user-login/user-login.component';
import { UserEditComponent } from '../user/user-edit/user-edit.component';
import { UserListComponent } from '../user/user-list/user-list.component';
import { UserDetailComponent } from '../user/user-detail/user-detail.component';
import { BoolDisplayPipe } from './bool-display.pipe';
import { SearchUserPipe } from '../search-pipes/search-user.pipe';
import { MenuComponent } from '../menu/menu.component';
import { HomeComponent } from '../home/home.component';
import { VendorCreateComponent } from '../vendor/vendor-create/vendor-create.component';
import { VendorListComponent } from '../vendor/vendor-list/vendor-list.component';
import { VendorEditComponent } from '../vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from '../vendor/vendor-detail/vendor-detail.component';
import { ProductListComponent } from '../product/product-list/product-list.component';
import { ProductCreateComponent } from '../product/product-create/product-create.component';
import { ProductDetailComponent } from '../product/product-detail/product-detail.component';
import { ProductEditComponent } from '../product/product-edit/product-edit.component';
import { RequestEditComponent } from '../request/request-edit/request-edit.component';
import { RequestDetailComponent } from '../request/request-detail/request-detail.component';
import { RequestCreateComponent } from '../request/request-create/request-create.component';
import { SearchProductPipe } from '../search-pipes/search-product.pipe';
import { SearchRequestPipe } from '../search-pipes/search-request.pipe';
import { SearchVendorPipe } from '../search-pipes/search-vendor.pipe';
import { RequestListComponent } from '../request/request-list/request-list.component';
import { RequestlineListComponent } from '../request/requestline-list/requestline-list.component';




@NgModule({
  declarations: [
    AppComponent,
    UserCreateComponent,
    UserLoginComponent,
    UserEditComponent,
    UserListComponent,
    UserDetailComponent,
    BoolDisplayPipe,
    SearchUserPipe,
    MenuComponent,
    HomeComponent,
    VendorCreateComponent,
    VendorListComponent,
    VendorEditComponent,
    VendorDetailComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    RequestListComponent,
    RequestEditComponent,
    RequestDetailComponent,
    RequestCreateComponent,
    SearchProductPipe,
    SearchRequestPipe,
    SearchVendorPipe,
    RequestlineListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
