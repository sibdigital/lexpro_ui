import { AfterViewInit, Component, Inject, ViewChild } from "@angular/core";
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormControl, FormGroupDirective, NgForm, Validators } from "@angular/forms";
import { MatRow, MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { ErrorStateMatcher } from "@angular/material/core";

export interface TableData {
    name: string
}

@Component({
    selector: 'app-types-container',
    templateUrl: './types-container.component.html',
    styleUrls: ['./types-container.component.css']
})

export class TypesContainer {

    name!: string
    displayedColumns: string[] = ['name'];
    tableData: TableData[] = []
    dataSource = new MatTableDataSource(this.tableData)
    delIndex = -1
    currentTr!: HTMLTableRowElement

    @ViewChild(MatSort) sort!: MatSort;

    constructor(
        public dialog: MatDialog
    ) {
    }

    //onAddClick
    openDialog() {
        const dialogRef = this.dialog.open(TypesContainerDialog, {
            width: '450px',
            data: { name: '' }
        })

        dialogRef.afterClosed().subscribe(result => {

            if (result != undefined) {

                if (this.currentTr != undefined) {
                    this.currentTr.style.fontWeight = 'normal'
                    this.delIndex = -1
                }

                this.tableData.push({ name: result })
                this.dataSource = new MatTableDataSource(this.tableData)
                this.dataSource.sort = this.sort;
            }
        })
    }

    trOnClick(index: number, event: MouseEvent) {
        const tr = event.target as HTMLTableRowElement

        if (this.delIndex < 0) {
            this.currentTr = tr
            this.delIndex = index
            tr.style.fontWeight = 'bold'
        }
        else if (tr == this.currentTr) {
            this.delIndex = -1
            tr.style.fontWeight = 'normal'
        }
        else {
            this.currentTr.style.fontWeight = 'normal'
            this.currentTr = tr
            this.delIndex = index
            tr.style.fontWeight = 'bold'
        }
    }

    delClick() {
        if (this.delIndex > -1) {
            if (this.currentTr != undefined)
                this.currentTr.style.fontWeight = 'normal'

            this.tableData.splice(this.delIndex, 1)
            this.dataSource = new MatTableDataSource(this.tableData)
            this.dataSource.sort = this.sort;

            this.delIndex = -1
        }
    }

    editClick(){
        if (this.delIndex > -1) {
            const dialogRef = this.dialog.open(TypesContainerDialog, {
                width: '450px',
                data: { name: this.currentTr.textContent }
            })
            
            dialogRef.afterClosed().subscribe(result => {
    
                if (result != undefined && result != '') {    
                    this.tableData[this.delIndex] = { name: result }
                    this.dataSource = new MatTableDataSource(this.tableData)
                    this.dataSource.sort = this.sort;

                    this.delIndex = -1
                    this.currentTr.style.fontWeight = 'normal'
                }
            })
        }
    }
}

@Component({
    selector: 'app-types-container-dialog',
    templateUrl: './types-container-dialog.html'
})
export class TypesContainerDialog {

    typeFormControl = new FormControl('', [
        Validators.required
    ])

    tableData: TableData[] = []
    dataSource!: MatTableDataSource<TableData>
    matcher = new ErrorStateMatcher()

    constructor(
        public dialogRef: MatDialogRef<TypesContainerDialog>,
        @Inject(MAT_DIALOG_DATA) public data: TableData
    ) {
        //this.dataSource = new MatTableDataSource(this.tableData)
    }

    onNoClick() {
        this.dialogRef.close()
    }

    onYesClick(s: string) {
        if(s.length < 1){
            this.typeFormControl.markAsTouched()
            return
        }

        this.dialogRef.close(s)
    }
}