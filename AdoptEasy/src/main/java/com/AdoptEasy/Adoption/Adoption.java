package com.AdoptEasy.Adoption;

import com.AdoptEasy.User.User;
import com.AdoptEasy.Pet.Pet;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
public class Adoption {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade= CascadeType.DETACH)
    @JoinColumn(name="user_id")
    @JsonBackReference
    private User user;

    @ManyToOne(cascade= CascadeType.DETACH)
    @JoinColumn(name="pet_id")
    @JsonBackReference
    private Pet pet;

    @Column(name="current_status")
    private String currStatus;

    @Column(name = "date_of_application")
    private LocalDate dateOfApplication;

    @Column(name = "start_date")
    private LocalDate startDate;
    @Column(name = "end_date")
    private LocalDate endDate;

    public Adoption(User user, Pet pet, String currStatus, LocalDate dateOfApplication) {
        this.user = user;
        this.pet = pet;
        this.currStatus = currStatus;
        this.dateOfApplication = dateOfApplication;
    }

    public Adoption(User user, Pet pet, String currStatus, LocalDate dateOfApplication, LocalDate startDate) {
        this.user = user;
        this.pet = pet;
        this.currStatus = currStatus;
        this.dateOfApplication = dateOfApplication;
        this.startDate = startDate;
    }

    public Adoption(User user, Pet pet, String currStatus, LocalDate dateOfApplication, LocalDate startDate, LocalDate endDate) {
        this.user = user;
        this.pet = pet;
        this.currStatus = currStatus;
        this.dateOfApplication = dateOfApplication;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
