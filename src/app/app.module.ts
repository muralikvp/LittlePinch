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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { Subscriber2Component } from './subscriber2/subscriber2.component';
import { ObservableModule } from "./observable/observable.module";
import { samService } from './observable/sam.service';
import { InterceptorModule } from './interceptor/interceptor.module';
import { ModifyInterceptor } from './modify.interceptor';
import { LifeCycleHookModule } from './life-cycle-hook/life-cycle-hook.module';
import { PipesModule } from './pipes/pipes.module';


@NgModule({
    declarations: [
        AppComponent,
        BikeListComponent,
        BikeChildComponent,
        MobileDirective,
        SubscriberComponent,
        Subscriber2Component
    ],
    providers: [MobileService, samService, 
    {
        provide:HTTP_INTERCEPTORS,
        useClass:ModifyInterceptor,
        multi:true
    }],
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
        HttpClientModule,
        ObservableModule,InterceptorModule,LifeCycleHookModule,PipesModule
    ]
})
export class AppModule { }
