import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})

export class LoginPage implements OnInit{

    elem: HTMLStyleElement | undefined

    constructor(){        
    }

    ngOnInit(){
        this.elem = document.getElementById("main-container") as HTMLStyleElement
        this.onResize()
    }

    onResize(){
        console.log(345)
        if(window.innerWidth / window.innerHeight < 1.5){
            this.elem!!.style.backgroundSize = 'auto 100vh'
        }
        else{
            this.elem!!.style.backgroundSize = '100vw auto'
        }
    }

    borderCreate(ev: FocusEvent){
        let el = ev.target as HTMLStyleElement
        el.style.borderBottom = '2px solid #616161'
    }

    borderRemove(ev: FocusEvent){
        let el = ev.target as HTMLStyleElement
        el.style.borderBottom = '2px solid #adadad'
    }

    onClick(){
        
    }
}