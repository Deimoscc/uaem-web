import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HeaderComponent } from '@client-core/components/header/header.component';
import { NavbarComponent } from '@client-core/components/navbar/navbar.component';
import { FooterComponent } from '@client-core/components/footer/footer.component';
import { ProductItemModule } from '@mugan86/ng-shop-ui';


@NgModule({
  declarations: [PublicComponent, HeaderComponent, NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ProductItemModule
  ]
})
export class PublicModule { }
