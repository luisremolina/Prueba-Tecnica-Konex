package com.microservicios.microserviciomedicamento.controller;

import com.microservicios.microserviciomedicamento.entity.MedicamentosEntity;
import com.microservicios.microserviciomedicamento.repository.MedicamentosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medicamentos")
@CrossOrigin({"*"})
public class MedicamentosController {

    @Autowired
    private MedicamentosRepository medicamentosRepository;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<MedicamentosEntity> getAllMedicamentos(){
        return medicamentosRepository.findAll();
    }

    @GetMapping("/paginate")
    @ResponseStatus(HttpStatus.OK)
    public Page<MedicamentosEntity> getAllMedicamentosPagination(Pageable pageable){
        return medicamentosRepository.findAll(pageable);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public MedicamentosEntity createMedicamento(@RequestBody MedicamentosEntity medicamentosEntity){
       return medicamentosRepository.save(medicamentosEntity);
    }

    @PutMapping()
    @ResponseStatus(HttpStatus.OK)
    public void updateMedicamento(@RequestBody MedicamentosEntity medicamentosEntity){
        medicamentosRepository.save(medicamentosEntity);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteMedicamentoById(@PathVariable Long id){
        medicamentosRepository.deleteById(id);
    }

}
