import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-users-container',
    templateUrl: './users-container.component.html',
    styleUrls: ['./users-container.component.css']
})

export class UsersContainer implements OnInit{

    elem: HTMLStyleElement | undefined

    constructor(){        
    }

    ngOnInit(){
        
    }
}