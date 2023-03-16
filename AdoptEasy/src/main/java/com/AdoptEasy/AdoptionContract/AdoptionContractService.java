package com.AdoptEasy.AdoptionContract;

import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.util.Optional;
import java.util.stream.Stream;

@Service
public class AdoptionContractService {
    private AdoptionContractRepository adoptionContractRepository;

    public String uploadContract(MultipartFile file) throws IOException {
        AdoptionContract adoptionContract = adoptionContractRepository.save(AdoptionContract.builder()
                .name(file.getOriginalFilename())
                .contract(AdoptionContractUtil.compressImage(file.getBytes()))
                .build());
        if (adoptionContract != null) {
            return "Uploaded the file successfully: " + file.getOriginalFilename();
        }
        return null;
    }

    public byte[] downloadContract(String fileName) throws IOException {
        Optional<AdoptionContract> dbAdoptionContractData = adoptionContractRepository.findByName(fileName);
        byte[] contracts = AdoptionContractUtil.decompressImage(dbAdoptionContractData.get().getContract());
        return contracts;
    }
}