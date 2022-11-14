package com.microservicios.microservicioventas.repository;

import com.microservicios.microservicioventas.entity.VentaEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VentaRepository extends JpaRepository<VentaEntity, Long> {
}
