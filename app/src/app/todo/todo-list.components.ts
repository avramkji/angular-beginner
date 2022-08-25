import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {
    todo = {
        id: 1,
        todos: [
            'Fuck shit up',
            'and do the other things too'
        ]
    }

    list:string[] = [];

    ngOnInit(){
        this.list.push("Tomethins")
        this.list.push("Tomethins2")
        this.list.push("Tomethins3")

    }
}