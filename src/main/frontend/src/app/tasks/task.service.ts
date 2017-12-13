import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Task} from "./task.model";
import {Subject} from "rxjs/Subject";

@Injectable()
export class TaskService{
    private onTaskAdded = new Subject<Task>();
    onTaskAddedSubject$ = this.onTaskAdded.asObservable();

    constructor(private http:HttpClient){

    }

    updateTaskEvent(task: Task){
        this.onTaskAdded.next(task);
    }

    getTasks(): Observable<any> {
        return this.http.get('/api/tasks').map((response:Response) => {return response});
    }

    saveTask(task: Task, checked: boolean){
        task.completed = checked;
        return this.http.post('/api/tasks/save', task).map((response:Response) => {return response});
    }

    addTask(task: Task){
        return this.http.post('/api/tasks/save', task).map((response:Response) => {return response});
    }
}
