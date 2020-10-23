import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './components/create/create.component';
import { TemplatesComponent } from './components/templates/templates.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CdkScrollableModule} from '@angular/cdk/scrolling';
import {ScrollingModule } from '@angular/cdk/scrolling';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component'; 
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        MatToolbarModule,
        MatBadgeModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatChipsModule,
        MatSlideToggleModule,
        MatTabsModule,
        MatFormFieldModule,
        NgbModule,
        ClipboardModule,
        CdkScrollableModule,
        ScrollingModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        CreateComponent,
        TemplatesComponent,
        BodyComponent,
        FooterComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };