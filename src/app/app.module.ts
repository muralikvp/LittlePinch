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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { Subscriber2Component } from './subscriber2/subscriber2.component';
import { ObservableModule } from "./observable/observable.module";
import { samService } from './observable/sam.service';
import { InterceptorModule } from './interceptor/interceptor.module';
import { ModifyInterceptor } from './modify.interceptor';
import { LifeCycleHookModule } from './life-cycle-hook/life-cycle-hook.module';
import { PipesModule } from './pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { DynamicModule } from './dynamic/dynamic.module';
import { HeaderInterceptor } from './header.interceptor';
import { RxjsModule } from './rxjs/rxjs.module';
import { DependencyInjectionModule } from './dependency-injection/dependency-injection.module';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        BikeListComponent,
        BikeChildComponent,
        SubscriberComponent,
        Subscriber2Component,
        AppComponent    ],
    providers: [samService,
    {
        provide:HTTP_INTERCEPTORS,
        useClass:HeaderInterceptor,
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
        HttpClientModule,
        ObservableModule,InterceptorModule,LifeCycleHookModule,PipesModule,
        DynamicModule,RxjsModule,DependencyInjectionModule,
        FormsModule,
        RouterModule.forRoot(routes)
    ]
})
export class AppModule { }
