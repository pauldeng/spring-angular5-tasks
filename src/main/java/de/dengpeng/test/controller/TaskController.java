package de.dengpeng.test.controller;

import de.dengpeng.test.domain.Task;
import de.dengpeng.test.service.TaskService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private TaskService taskService;


    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping(value = {"", "/"})
    public Iterable<Task> listTasks(){
        return this.taskService.list();
    }

    @PostMapping("/save")
    public Task saveTask(@RequestBody Task task){
        return this.taskService.save(task);
    }
}
