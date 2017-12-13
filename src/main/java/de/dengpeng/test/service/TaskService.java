package de.dengpeng.test.service;

import de.dengpeng.test.domain.Task;

public interface TaskService {

    Iterable<Task> list();

    Task save(Task task);
}
