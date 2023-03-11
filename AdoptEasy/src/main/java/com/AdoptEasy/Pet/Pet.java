package com.AdoptEasy.Pet;

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

    @Column(name="pet_description")
    private String desc;

    @Column(name="pet_medical")
    private String medical;

    @Column(name="pet_requirements")
    private String req;

    @Column(name="pet_image")
    private byte[] image;

    public Pet(String name, String breed, int age, String desc, String medical, String req) {
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.desc = desc;
        this.medical = medical;
        this.req = req;
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

    public String getDesc() {
        return this.desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public String getReq() {
        return this.req;
    }

    public void setReq(String req) {
        this.req = req;
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
}
