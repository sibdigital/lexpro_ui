import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-struct-container',
    templateUrl: './struct-container.component.html',
    styleUrls: ['./struct-container.component.css']
})

export class StructContainer implements OnInit{

    elem: HTMLStyleElement | undefined

    constructor(){        
    }

    ngOnInit(){
        
    }
}