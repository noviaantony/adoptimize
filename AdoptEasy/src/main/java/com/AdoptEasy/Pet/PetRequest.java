package com.AdoptEasy.Pet;

public record PetRequest(String name, String breed, int age, String dateJoined, String birthday, String medical, String status,
                         String imageAddress, String description, Double weight, Double adoptionFee, String sex) {
}
