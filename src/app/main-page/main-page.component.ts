import { Component, OnInit, Renderer2 } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})

export class MainPage implements OnInit {

    fullImagePath: string = ""
    usersDiv: HTMLDivElement | undefined
    attachmentsDiv: HTMLDivElement | undefined

    constructor() {
    }

    ngOnInit() {

    }
}