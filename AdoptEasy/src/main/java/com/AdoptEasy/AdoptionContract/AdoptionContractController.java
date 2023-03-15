package com.AdoptEasy.AdoptionContract;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

//        import com.AdoptEasy.AdoptionContract.AdoptionContractFileNotFoundException;


@Controller
public class AdoptionContractController {
    private final AdoptionContractService adoptionContractService;

    @Autowired
    public AdoptionContractController(AdoptionContractService adoptionContractService) {
        this.adoptionContractService = adoptionContractService;
    }

    @PostMapping
    public ResponseEntity<?> uploadContract(@RequestParam("file") MultipartFile file) throws IOException {
        String uploadContract = adoptionContractService.uploadContract(file);
        return ResponseEntity.status(HttpStatus.OK)
                .body(uploadContract);
    }

    @GetMapping("/{fileName}")
    public ResponseEntity<?> downloadContract(@RequestParam("fileName") String fileName) throws IOException{
        byte[] adoptionContractData = adoptionContractService.downloadContract(fileName);
        return ResponseEntity.status(HttpStatus.OK)
                .body(adoptionContractData);
    }
}