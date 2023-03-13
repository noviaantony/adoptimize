package com.AdoptEasy.Pet;

import java.time.*;
import java.util.List;

import com.AdoptEasy.Adoption.*;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "adopteasy_pet")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Pet {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long petId;

    @Column(name="pet_name")
    private String name;

    @Column(name="pet_breed", nullable=false)
    private String breed;

    @Column(name="age", nullable=false)
    private int age;

    @Column(name="date_joined")
    private LocalDate dateJoined;

    @Column(name="birthday")
    private LocalDate birthday;

    @Column(name="pet_medical")
    private String medical;

    @Column(name="pet_status")
    private String status;

    @Column(name="pet_image")
    private byte[] image;

    @OneToMany(mappedBy = "pet", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Adoption> adoptionList;

}
