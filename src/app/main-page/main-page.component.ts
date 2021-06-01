import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})

export class MainPage implements OnInit{

    fullImagePath: string = ""
    usersDiv: HTMLDivElement | undefined
    attachmentsDiv: HTMLDivElement | undefined

    constructor(){
        this.fullImagePath = "./back_image.jpg"
    }

    ngOnInit(){        

        
    }

    openUsersMenu(){
        this.usersDiv = document.createElement('div')
        this.usersDiv.className = "container"
        this.usersDiv.style.top = '100px'
        this.usersDiv.innerHTML = "<div class=\"menu-second\" style=\"border-top: 0px;\">"
            +"<img class=\"icon\" src=\"../../assets/user-icon.png\" style=\"left: 5px;\">"
            +"<div style=\"padding-left: 40px; position: absolute; padding-top: 6px; color: black;\">"
            +"Пользователи</div></div>"
        this.usersDiv.innerHTML += "<div class=\"menu-second\" style=\"border-top: 0px;\">"
        +"<img class=\"icon\" src=\"../../assets/padlock.png\" style=\"left: 5px;\">"
        +"<div style=\"padding-left: 40px; position: absolute; padding-top: 6px; color: black;\">"
        +"Роли и права</div></div>"

        document.getElementById('usersMenu')!!.appendChild(this.usersDiv)
    }

    closeUsersMenu(){
        this.usersDiv!!.remove()
    }

    openAttachmentsMenu(){
        this.attachmentsDiv = document.createElement('div')
        this.attachmentsDiv.className = "container"
        this.attachmentsDiv.style.top = '180px'
        this.attachmentsDiv.innerHTML = "<div class=\"menu-second\" style=\"border-top: 0px;\">"
            +"<img class=\"icon\" src=\"../../assets/user-icon.png\" style=\"left: 5px;\">"
            +"<div style=\"padding-left: 40px; position: absolute; padding-top: 6px; color: black;\">"
            +"Типы</div></div>"
        this.attachmentsDiv.innerHTML += "<div class=\"menu-second\" style=\"border-top: 0px;\">"
        +"<img class=\"icon\" src=\"../../assets/padlock.png\" style=\"left: 5px;\">"
        +"<div style=\"padding-left: 40px; position: absolute; padding-top: 6px; color: black;\">"
        +"Группы</div></div>"

        document.getElementById('attachmentsMenu')!!.appendChild(this.attachmentsDiv)
    }

    closeAttachmentsMenu(){
        this.attachmentsDiv!!.remove()
    }
}