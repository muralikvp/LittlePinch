import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BikeListComponent } from './bike-list/bike-list.component';
import { BikeChildComponent } from './bike-child/bike-child.component';
import { CommonModule } from '@angular/common';
import { SideBarModule } from "./side-bar/side-bar.module";
import { ContentProjectionModule } from "./content-projection/content-projection.module";
import { MobileDirective } from './dynamic-component/Mobile.directive';
import { DynamicComponentModule } from './dynamic-component/dynamic-component.module';
import { MobileService } from './dynamic-component/mobile.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        AppComponent,
        BikeListComponent,
        BikeChildComponent,
        MobileDirective
    ],
    providers: [MobileService],
    bootstrap: [AppComponent],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        SharedModule,
        SideBarModule,
        ContentProjectionModule,
        DynamicComponentModule,
        HttpClientModule
        ]
})
export class AppModule { }
