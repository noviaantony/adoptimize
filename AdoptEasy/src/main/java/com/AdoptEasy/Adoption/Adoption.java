package com.AdoptEasy.Adoption;

import com.AdoptEasy.User.User;
import com.AdoptEasy.Pet.Pet;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
public class Adoption {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade= CascadeType.DETACH)
    @JoinColumn(name="user_id")
    @JsonBackReference
    private User userId;

    @ManyToOne(cascade= CascadeType.DETACH)
    @JoinColumn(name="pet_id")
    @JsonBackReference
    private Pet pet;

    @Column(name="current_status")
    private String currStatus;

    public Adoption(String currStatus){
        this.currStatus = currStatus;
    }
    public String getCurrStatus() {
        return this.currStatus;
    }

    public void setCurrStatus(String currStatus) {
        this.currStatus = currStatus;
    }

}
