import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-types-container',
    templateUrl: './types-container.component.html',
    styleUrls: ['./types-container.component.css']
})

export class TypesContainer implements OnInit{

    elem: HTMLStyleElement | undefined

    constructor(){        
    }

    ngOnInit(){
        
    }
}