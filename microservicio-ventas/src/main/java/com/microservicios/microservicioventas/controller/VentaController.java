package com.microservicios.microservicioventas.controller;

import com.microservicios.microservicioventas.entity.VentaEntity;
import com.microservicios.microservicioventas.repository.VentaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/venta")
@CrossOrigin({"*"})
public class VentaController {

    @Autowired
    private VentaRepository ventaRepository;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<VentaEntity> getAllVentas(){
        return this.ventaRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public VentaEntity createVenta(@RequestBody VentaEntity ventaEntity){
        return this.ventaRepository.save(ventaEntity);
    }





}

