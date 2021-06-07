import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { RouterModule, RouterOutlet } from "@angular/router";
import { MainPage } from "./main-page.component";
import { UsersContainer } from "../containers/users-container/users-container.component";
import { RolesContainer } from "../containers/roles-container/roles-container.component";
import { StructContainer } from "../containers/struct-container/struct-container.component";
import { ArchiveContainer } from "../containers/archive-container/archive-container.component";
import { DeletedContainer } from "../containers/deleted-container/deleted-container.component";
import { GroupsContainer } from "../containers/groups-container/groups-container.component";
import { RkkContainer } from "../containers/rkk-container/rkk-container.component";
import { TypesContainer } from "../containers/types-container/types-container.component";

@NgModule({
    declarations: [
        MainPage
    ],
    imports: [
        RouterModule.forChild([
            {
                path: 'main-page', component: MainPage, children: [
                    {
                        path: 'users',
                        component: UsersContainer
                    },
                    {
                        path: 'roles',
                        component: RolesContainer
                    },
                    {
                        path: 'struct',
                        component: StructContainer
                    },
                    {
                        path: 'archive',
                        component: ArchiveContainer
                    },
                    {
                        path: 'deleted',
                        component: DeletedContainer
                    },
                    {
                        path: 'groups',
                        component: GroupsContainer
                    },
                    {
                        path: 'rkk',
                        component: RkkContainer
                    },
                    {
                        path: 'types',
                        component: TypesContainer
                    }
                ]
            }
        ]),
        MatButtonModule,
        MatSelectModule,
        MatInputModule,
        MatCardModule,
        MatListModule,
        MatExpansionModule,
        MatMenuModule,
        MatSidenavModule,
        MatIconModule
    ],
    bootstrap: [
        MainPage
    ]
})

export class MainPageModule {

}