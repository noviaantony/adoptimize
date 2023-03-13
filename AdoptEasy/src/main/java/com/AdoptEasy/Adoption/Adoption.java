package com.AdoptEasy.Adoption;

import com.AdoptEasy.User.User;
import com.AdoptEasy.Pet.Pet;

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

    @OneToMany(cascade= CascadeType.DETACH)
    @JoinColumn(name="user_id")
    private User userId;

    @OneToOne(cascade= CascadeType.DETACH)
    @JoinColumn(name="pet_id")
    private Pet petId;

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
