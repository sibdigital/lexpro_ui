import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-deleted-container',
    templateUrl: './deleted-container.component.html',
    styleUrls: ['./deleted-container.component.css']
})

export class DeletedContainer implements OnInit{

    elem: HTMLStyleElement | undefined

    constructor(){        
    }

    ngOnInit(){
        
    }
}