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
    @SequenceGenerator(name="pet_sequence", sequenceName="pet_sequence", allocationSize=1)
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="pet_sequence")
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
    private String status; // Adopted, Available, Pending_Adoption

    @Column(name="pet_image")
    private String imageAddress;

    @OneToMany(mappedBy = "pet", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Adoption> adoptionList;

    public Pet (String name, String breed, int age, LocalDate dateJoined, LocalDate birthday, String medical, String status, String imageAddress){
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.dateJoined = dateJoined;
        this.birthday = birthday;
        this.medical = medical;
        this.status = status;
        this.imageAddress = imageAddress;
    }
}
