package com.AdoptEasy.Pet;

import java.time.*;
import com.AdoptEasy.User.User;

import org.springframework.cglib.core.Local;

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
    private Long id;

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

    @Column(name="pet_adoptions")
    private User[] adoptions;

    @OneToOne
    @JoinColumn(name="user_sequence", nullable=false)
    private User user;
    
    public Pet(String name, String breed, int age, LocalDate dateJoined, LocalDate birthday, String medical,
            String status) {
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.dateJoined = dateJoined;
        this.birthday = birthday;
        this.medical = medical;
        this.status = status;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBreed() {
        return this.breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public int getAge() {
        return this.age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public LocalDate getDateJoined() {
        return this.dateJoined;
    }

    public void setDateJoined(LocalDate dateJoined){
        this.dateJoined = dateJoined;
    }

    public LocalDate getBirthday() {
        return this.birthday;
    }

    public void setBirthday(LocalDate birthday){
        this.birthday = birthday;
    }

    public String getMedical() {
        return this.medical;
    }

    public void setMedical(String medical) {
        this.medical = medical;
    }

    public byte[] getImage() {
        return this.image;
    }

    public void setImage(byte[] image){
        this.image = image;
    }

    public String getStatus() {
        return this.status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public User[] getAdoptions() {
        return this.adoptions;
    }

    public void setAdoptions(User[] adoptions) {
        this.adoptions = adoptions;
    }

}
