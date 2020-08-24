package br.org.oab.todolist.common.service;

import java.util.List;

public interface IGenericCrudService<T, K, F> {

    T getById(K id);
    List<T> getAll();
    T create(T t);
    T update(T t);
    void delete(K id);
}
