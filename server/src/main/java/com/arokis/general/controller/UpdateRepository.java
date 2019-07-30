package com.arokis.general.controller;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UpdateRepository<T> extends JpaRepository<T, Long> {

}
