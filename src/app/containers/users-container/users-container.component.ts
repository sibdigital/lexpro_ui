import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

export interface PeriodicElement {
    fam: string;
    login: number;
    name: number;
    otch: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { login: 1, fam: 'Hydrogen', name: 1.0079, otch: 'H' },
    { login: 2, fam: 'Helium', name: 4.0026, otch: 'He' },
    { login: 3, fam: 'Lithium', name: 6.941, otch: 'Li' },
    { login: 4, fam: 'Beryllium', name: 9.0122, otch: 'Be' },
    { login: 5, fam: 'Boron', name: 10.811, otch: 'B' },
    { login: 6, fam: 'Carbon', name: 12.0107, otch: 'C' },
    { login: 7, fam: 'Nitrogen', name: 14.0067, otch: 'N' },
    { login: 8, fam: 'Oxygen', name: 15.9994, otch: 'O' },
    { login: 9, fam: 'Fluorine', name: 18.9984, otch: 'F' },
    { login: 10, fam: 'Neon', name: 20.1797, otch: 'Ne' },
];

@Component({
    selector: 'app-users-container',
    templateUrl: './users-container.component.html',
    styleUrls: ['./users-container.component.css']
})

export class UsersContainer implements AfterViewInit {

    displayedColumns: string[] = ['login', 'fam', 'name', 'otch'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

    @ViewChild(MatSort) sort!: MatSort;

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }

    constructor() {
    }

    ngOnInit() {

    }
}