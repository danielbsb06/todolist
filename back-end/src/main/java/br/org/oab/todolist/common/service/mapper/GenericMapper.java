package br.org.oab.todolist.common.service.mapper;

import java.util.List;

public interface GenericMapper<D, E> {

    public E toEntity(D dto);
    public D toDto(E entity);
    public List<E> toEntity(List<D> dtoList);
    public List <D> toDto(List<E> entityList);

}