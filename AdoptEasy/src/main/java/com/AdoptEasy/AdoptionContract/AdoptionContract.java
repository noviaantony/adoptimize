package com.AdoptEasy.AdoptionContract;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "adopteasy_adoptionContract")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AdoptionContract {
    @Id
    @SequenceGenerator(
            name = "contract_sequence",
            sequenceName = "contract_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "contract_sequence"
    )
    private Long id;

    private String name;

    @Lob
    @Column(name = "contract", length = 10000)
    private byte[] contract;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }


}
