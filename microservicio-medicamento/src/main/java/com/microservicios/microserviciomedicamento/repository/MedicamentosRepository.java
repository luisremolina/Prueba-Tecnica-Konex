package com.microservicios.microserviciomedicamento.repository;

import com.microservicios.microserviciomedicamento.entity.MedicamentosEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicamentosRepository extends JpaRepository<MedicamentosEntity,Long> {

    Page<MedicamentosEntity> findAll(Pageable pageable);
}
