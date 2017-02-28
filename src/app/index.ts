import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HomeModule } from "../home";
import { NotFoundModule } from "../notfound";
import { AppComponent } from "./components/app";
import { DetailsModule } from "../details";
import { CreatorModule } from "../creator";
import DataService from "./services/data.service";
import { AngularFireModule } from "angularfire2";

const firebaseConfig = {
    apiKey: "AIzaSyBvoUZetzIscWhA8sPWOOcAKcpPOLVyd3A",
    authDomain: "andrej-suschevich.firebaseapp.com",
    databaseURL: "https://andrej-suschevich.firebaseio.com",
    storageBucket: "andrej-suschevich.appspot.com"
};

@NgModule({
    providers: [ DataService ],
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([], { useHash: false }),
        AngularFireModule.initializeApp(firebaseConfig),
        HomeModule,
        DetailsModule,
        CreatorModule,
        NotFoundModule
    ]
})

export class AppModule {
}
