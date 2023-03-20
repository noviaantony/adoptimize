package com.AdoptEasy.Adoption;

import com.AdoptEasy.User.User;
import com.AdoptEasy.Pet.Pet;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Adoption {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade= CascadeType.DETACH)
    @JoinColumn(name="user_id")
    @JsonBackReference
    private User user;

    private String adopterName;

    @ManyToOne(cascade= CascadeType.DETACH)
    @JoinColumn(name="pet_id")
    @JsonManagedReference
    private Pet pet;

    @Column(name="current_status")
    private String currStatus; // New, In-progress, Rejected, Withdrawn, Collection, Post-Adoption, Completed

    @Column(name="phase_of_adoption")
    private Integer phaseOfAdoption = 0;

    @Column(name = "date_of_application")
    private LocalDate dateOfApplication;

    @Column(name = "start_date")
    private LocalDate startDate;
    @Column(name = "end_date")
    private LocalDate endDate;

    @Column(name = "date_of_collection")
    private LocalDate dateOfCollection;

    public Adoption(User user, String adopterName, Pet pet, String currStatus, LocalDate dateOfApplication) {
        this.user = user;
        this.adopterName = adopterName;
        this.pet = pet;
        this.currStatus = currStatus;
        this.dateOfApplication = dateOfApplication;
    }

    public Adoption(User user, String adopterName, Pet pet, String currStatus, LocalDate dateOfApplication, LocalDate startDate) {
        this.user = user;
        this.adopterName = adopterName;
        this.pet = pet;
        this.currStatus = currStatus;
        this.dateOfApplication = dateOfApplication;
        this.startDate = startDate;
    }

    public Adoption(User user, String adopterName, Pet pet, String currStatus, LocalDate dateOfApplication, LocalDate startDate, LocalDate endDate) {
        this.user = user;
        this.adopterName = adopterName;
        this.pet = pet;
        this.currStatus = currStatus;
        this.dateOfApplication = dateOfApplication;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    public Adoption(User user, String adopterName, Pet pet, String currStatus, LocalDate dateOfApplication, LocalDate startDate, LocalDate endDate, LocalDate dateOfCollection) {
        this.user = user;
        this.adopterName = adopterName;
        this.pet = pet;
        this.currStatus = currStatus;
        this.dateOfApplication = dateOfApplication;
        this.startDate = startDate;
        this.endDate = endDate;
        this.dateOfCollection = dateOfCollection;
    }
}
