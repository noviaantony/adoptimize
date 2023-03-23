package com.AdoptEasy.Security.config;


import com.AdoptEasy.Adoption.Adoption;
import com.AdoptEasy.Adoption.AdoptionRepository;
import com.AdoptEasy.Adoption.PhaseOfAdoption;
import com.AdoptEasy.Pet.Pet;
import com.AdoptEasy.Pet.PetRepository;
import com.AdoptEasy.PreScreeningQuestionnaire.*;
import com.AdoptEasy.PreScreeningQuestionnaire.PreScreeningQuestionnaire;
import com.AdoptEasy.PreScreeningQuestionnaire.QuestionType;
import com.AdoptEasy.ShelterQuestionaireSettings.ShelterQuestionaireSettings;
import com.AdoptEasy.ShelterQuestionaireSettings.ShelterQuestionaireSettingsRepository;
import com.AdoptEasy.ShelterQuestionaireSettings.ShelterQuestionaireSettingsService;
import com.AdoptEasy.User.User;
import com.AdoptEasy.User.UserRepository;
import com.AdoptEasy.User.UserRole;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Configuration
@AllArgsConstructor
public class ApplicationConfig {
    //temp encoder to create an encrypted password
    private final UserRepository userRepository;

    @Bean
    public UserDetailsService userDetailsService(){
        return username -> userRepository.findByEmail(username) //fetch user from database
                .orElseThrow(()-> new UsernameNotFoundException("User with email " + username + " not found"));
    }

    @Bean
    public AuthenticationProvider authenticationProvider(){
        //data access object that helps to access user details
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService());
        authProvider.setPasswordEncoder(bCryptPasswordEncoder());
        return authProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    CommandLineRunner commandLineRunner(UserRepository repository, PetRepository petRepository,
                                        AdoptionRepository adoptionRepository, PreScreeningQuestionnaireRepository preScreeningQuestionnaireRepository,
                                        ShelterQuestionaireSettingsService  shelterQuestionaireSettingsService, ShelterQuestionaireSettingsRepository shelterQuestionaireSettingsRepository) {
        //create dummy users
        String encodedPassword = bCryptPasswordEncoder().encode("123");
        return args -> {
            User xz = new User(
                    "Zhao Xing",
                    "Chen",
                    "chenzhaoxing.98@gmail.com",
                    encodedPassword,
                    UserRole.ADOPTER
            );

            User Jane = new User(
                    "Jane",
                    "Doe",
                    "JaneDoe@example.com",
                    encodedPassword,
                    UserRole.ADOPTER
            );

            User John = new User(
                    "John",
                    "Doe",
                    "JohnDoe@example.com",
                    encodedPassword,
                    UserRole.ADOPTER
            );

            User Kendrick = new User(
                    "Kendrick",
                    "Lemar",
                    "KendrickLemar@example.com",
                    encodedPassword,
                    UserRole.ADOPTER
            );

            User Jack = new User(
                    "Jack",
                    "Lee",
                    "JackLee@example.com",
                    encodedPassword,
                        UserRole.ADOPTER
            );
            // Shelter
            User shelter = new User(
                    "Meow",
                    "Shelter",
                    "meowshelter@example.com",
                    encodedPassword,
                    UserRole.SHELTER
            );

//            User tester = new User(
//                    "CarbonO",
//                    "Testing",
//                    "carbonohelp@gmail.com",
//                    encodedPassword,
//                    UserRole.ADMIN,
//                    true
//            );
            repository.saveAll(
                    List.of(xz,Jane,John,Kendrick,Jack, shelter)
            );


            // create dummy pets
            Pet pet1 = new Pet(
                    "Whiskers",
                    "Siamese",
                    2,
                    LocalDate.of(2022, 3, 1),
                    LocalDate.of(2021, 7, 1),
                    "fully vaccinated, no fleas",
                    "Pending Adoption",
                    "https://images.pexels.com/photos/596590/pexels-photo-596590.jpeg?cs=srgb&dl=pexels-leah-kelley-596590.jpg&fm=jpg",
                    "Hello there, I'm Whiskers and I'm a beautiful Siamese cat. I joined the shelter on 03/01/2023 " +
                            "and so I'm just a young kitten with a lot of energy to spare!" +
                            "I'm a friendly and playful kitty who loves to be around people.",
                    6.0,
                    150.00
            );

            Pet pet2 = new Pet(
                    "Mittens",
                    "Persian",
                    3,
                    LocalDate.of(2022, 2, 15),
                    LocalDate.of(2020, 12, 15),
                    "up to date on vaccinations, fleas treated",
                    "Available",
                    "https://images.unsplash.com/photo-1591429939960-b7d5add10b5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc2lhbiUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                    "Hello, I'm Mittens, a fluffy and charming Persian cat. I joined the shelter on 02/15/2023 " +
                            "and I'm up to date on all my vaccinations, as well as flea-treated. My date of birth is 12/15/2020," +
                            " which means I'm still just a kitten with lots of love to give.",
                    4.0,
                    200.00
            );

            Pet pet3 = new Pet(
                    "Simba",
                    "Bengal",
                    1,
                    LocalDate.of(2022, 3, 5),
                    LocalDate.of(2021, 5, 5),
                    "vaccinated for rabies, fleas treated",
                    "Available",
                    "https://images.unsplash.com/photo-1598463166261-357c23778812?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1718&q=80",
                    "Hey there, I'm Simba, a beautiful Bengal cat with striking markings. My date of birth is 05/05/2021, " +
                            "so I'm still a young kitty with lots of energy. ",
                    8.0,
                    250.00
            );

            Pet pet4 = new Pet(
                    "Luna",
                    "British Shorthair",
                    2,
                    LocalDate.of(2022, 2, 20),
                    LocalDate.of(2020, 8, 20),
                    "vaccinated for FVRCP, fleas treated",
                    "Available",
                    "https://images.unsplash.com/photo-1492370284958-c20b15c692d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80",
                    "Hello, I'm Luna, a sweet British Shorthair cat." +
                            "If you're looking for a loyal companion who will always be by your side, I'm the one for you!",
                    10.0,
                    175.00
            );

            Pet pet5 = new Pet(
                    "Oreo",
                    "American Shorthair",
                    1,
                    LocalDate.of(2022, 3, 10),
                    LocalDate.of(2021, 9, 10),
                    "vaccinated for rabies and FVRCP, no fleas",
                    "Available",
                    "https://c4.wallpaperflare.com/wallpaper/623/605/75/cat-look-striped-american-shorthair-wallpaper-preview.jpg",
                    "Hey there, I'm Oreo, an adorable American Shorthair cat. My date of birth is 09/10/2021, " +
                            "which means I'm just a young kitten full of love and energy.",
                    5.0,
                    200.00
            );

            Pet pet6 = new Pet(
                    "Felix",
                    "Scottish Fold",
                    1,
                    LocalDate.of(2022, 3, 2),
                    LocalDate.of(2021, 7, 2),
                    "vaccinated for FVRCP, fleas treated",
                    "Available",
                    "https://images.unsplash.com/photo-1595433708220-3aa013e5e43f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
                    "Hi there, I'm Felix the Scottish Fold! I have a unique and adorable look, with my folded" +
                            " ears and round face. I love to play with toys and chase after things.",

                    7.0,
                    300.00
            );

            Pet pet7 = new Pet(
                    "Tiger",
                    "Maine Coon",
                    2,
                    LocalDate.of(2022, 2, 25),
            LocalDate.of(2020, 8, 25),
                    "vaccinated for FVRCP, fleas treated",
                    "Available",
                    "https://images.unsplash.com/photo-1543055484-ac8fe612bf31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                    "Hi there, I'm Tiger the Maine Coon! I'm a big and majestic cat, with my fluffy coat and piercing green eyes. " +
                            "I'm still young and full of energy. I love to play with toys and explore new places.",
                    10.0,
                    200.0
            );

            Pet pet8 = new Pet(
                    "Garfield",
                    "Exotic Shorthair",
                    1,
                    LocalDate.of(2022, 3, 12),
                    LocalDate.of(2021, 9, 12),
                    "up to date on vaccinations, no fleas",
                    "Available",
                    "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F12%2F14%2Fexotic-shorthair-kitten-near-window-266176374-2000.jpg",
                    "Meow, I'm Garfield and I'm a spunky Exotic Shorthair kitty who loves to play and snuggle " +
                            "up with my human friends but I promise to bring you a lifetime of love and happiness.",
                    4.0,
                    150.00
            );
            Pet pet9 = new Pet(
                    "Tigger",
                    "Abyssinian",
                    2,
                    LocalDate.of(2022, 2, 18),
                    LocalDate.of(2020, 6, 18),
                    "vaccinated for rabies, fleas treated",
                    "Available",
                    "https://images.wallpaperscraft.com/image/single/abyssinian_cat_face_eyes_96018_1920x1080.jpg",
                    "Hello there, my name is Tigger and I'm an adventurous Abyssinian kitty who loves to explore " +
                            "and play! ",
                    8.0,
                    200.00
            );

            Pet pet10 = new Pet(
                    "Boots",
                    "Manx",
                    1,
                    LocalDate.of(2022, 3, 8),
                    LocalDate.of(2021, 7, 8),
                    "vaccinated for FVRCP, fleas treated",
                    "Available",
                    "https://www.pngitem.com/pimgs/m/564-5647117_ginger-manx-cat-long-haied-hd-png-download.png",
                    "Hi there, my name is Boots and I'm a fun-loving Manx kitty who loves to play and cuddle with my humans." +
                            "I promise to bring you lots of laughter and love.",
                    3.0,
                    175.00
            );

            Pet pet11 = new Pet(
                    "Whiskey",
                    "Oriental Shorthair",
                    2,
                    LocalDate.of(2022, 2, 27),
                    LocalDate.of(2020, 8, 27),
                    "vaccinated for FVRCP, fleas treated",
                    "Available",
                    "https://images.pexels.com/photos/11943120/pexels-photo-11943120.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500](https://images.pexels.com/photos/11943120/pexels-photo-11943120.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "Hi there, my name is Whiskey! I'm a friendly and curious Oriental Shorthair who loves to play and explore." +
                            " I promise to bring you lots of joy and happiness for years to come.",
                    7.0,
                    150.00
            );

            Pet pet12 = new Pet(
                    "Pepper",
                    "Sphynx",
                    2,
                    LocalDate.of(2022, 2, 21),
                    LocalDate.of(2020, 10, 21),
                    "up to date on vaccinations, no fleas",
                    "Available",
                    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.peakpx.com%2Fen%2Fhd-wallpaper-desktop-pceoi&psig=AOvVaw1eS9scpEHdIjWkihUWKuyB&ust=1679042549676000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMDB14eH4P0CFQAAAAAdAAAAABAJ",
                    "Meow! I'm Pepper, a friendly Sphynx who loves to be the center of attention. " +
                            "I promise to bring you lots of joy and happiness for years to come.",
                    8.0,
                    300.00
            );

            Pet pet13 = new Pet(
                    "Gizmo",
                    "Devon Rex",
                    1,
                    LocalDate.of(2022, 3, 6),
                    LocalDate.of(2021, 5, 6),
                    "vaccinated for FVRCP, fleas treated",
                    "Available",
                    "https://cdn.shopify.com/s/files/1/0997/4496/articles/Blue_Eyed_Devon_Rex_Cat_d9234955-823a-459d-8b14-fb1340247c0e_1200x.jpg?v=1588962514",
                    "Hi there, I'm Gizmo, a playful and affectionate Devon Rex. " +
                            "I promise to bring you lots of joy and happiness for years to come.",
                    4.0,
                    250.00
            );

            Pet pet14 = new Pet(
                    "Coco",
                    "Turkish Angora",
                    1,
                    LocalDate.of(2022, 3, 11),
                    LocalDate.of(2021, 9, 11),
                    "vaccinated for rabies and FVRCP",
                    "Available",
                    "https://c4.wallpaperflare.com/wallpaper/906/682/414/cat-portrait-white-fluffy-wallpaper-preview.jpg",
                    "Meow! My name is Coco and I'm a beautiful Turkish Angora with soft, fluffy white fur. " +
                            "I promise to bring you lots of joy and happiness for years to come.",
                    6.0,
                    350.00
            );

            Pet pet15 = new Pet(
                    "Smokey",
                    "Norwegian Forest Cat",
                    2,
                    LocalDate.of(2022, 2, 26),
                    LocalDate.of(2020, 8, 26),
                    "up to date on vaccinations, no fleas",
                    "Available",
                    "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-06/Norwegian",
                    "Hello, my name is Smokey, a charming and affectionate Norwegian Forest Cat. ",
                    10.0,
                    200.00
            );

            Pet pet16 = new Pet(
                    "Midnight",
                    "Bombay",
                    1,
                    LocalDate.parse("2022-03-04"),
                    LocalDate.parse("2021-09-04"),
                    "vaccinated for FVRCP, fleas treated",
                    "Available",
                    "https://www.catbreedslist.com/uploads/cat-pictures/bombay-cat-2.jpg",
                    "Meow! My name is Midnight and I am a Bombay cat. I may look all black, but I have shiny copper eyes that will mesmerize you. " +
                             "I can't wait to find my forever home.",
                    6.0,
                    150.00
            );
            Pet pet17 = new Pet(
                    "Max",
                    "Burmese",
                    2,
                    LocalDate.parse("2022-03-13"),
                    LocalDate.parse("2020-09-13"),
                    "up to date on vaccinations, no fleas",
                    "Available",
                    "https://c4.wallpaperflare.com/wallpaper/114/457/211/british-burmese-cat-siamese-cat-wallpaper-preview.jpg",
                    "Hi there, my name is Max and I am a Burmese cat. I am a curious and playful kitten who " +
                            "loves to cuddle and I am excited to find my forever family soon.",
                    4.0,
                    200.00
            );
            Pet pet18 = new Pet(
                    "Charlie",
                    "Siamese",
                    3,
                    LocalDate.parse("2022-02-19"),
                    LocalDate.parse("2019-06-19"),
                    "vaccinated for FVRCP, fleas treated",
                    "Available",
                    "https://cdn.pixabay.com/photo/2017/02/15/12/12/cat-2068462__480.jpg",
                    "Meow! My name is Charlie and I am a Siamese cat. I am a bit shy at first, but once I warm up to you, " +
                            "I am very affectionate and I can't wait to find a loving home.",
                    5.0,
                    175.00
            );
            Pet pet19 = new Pet(
                    "Ginger",
                    "Himalayan",
                    5,
                    LocalDate.parse("2022-03-14"),
                    LocalDate.parse("2018-01-14"),
                    "vaccinated for rabies, fleas treated",
                    "Available",
                    "https://images.unsplash.com/photo-1586951998354-5c23b33cd612?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGltYWxheWFuJTIwY2F0fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
                    "Hi there, my name is Ginger and I am a Himalayan cat. I have the most beautiful blue eyes and a fluffy coat that you will love to stroke.",
                    7.0,
                    250.00
            );
            Pet pet20 = new Pet(
                    "Socks",
                    "Balinese",
                    4,
                    LocalDate.parse("2022-02-22"),
                    LocalDate.parse("2019-02-22"),
                    "up to date on vaccinations, no fleas",
                    "Available",
                    "https://images.ctfassets.net/440y9b545yd9/5y0EMhEGZd8P9Zkhc5dFmt/fba507f5c265bcd5d75b607df2b2a880/Balinese850.jpg",
                    "Meow! My name is Socks and I am a Balinese cat. I am a playful and energetic kitten who loves to explore my surroundings.",
                    3.0,
                    175.00
            );
            Pet pet21 = new Pet(
                    "Smudge",
                    "Chartreux",
                    2,
                    LocalDate.of(2022, 3, 15),
                    LocalDate.of(2020, 9, 15),
                    "vaccinated for FVRCP, fleas treated",
                    "Available",
                    "https://upload.wikimedia.org/wikipedia/commons/3/3c/IC_Blue_Melody_Flipper_CHA_male_EX1_CACIB.jpg",
                    "Hi, I'm Smudge, a Chartreux cat. I'm a quiet and independent cat, but I do enjoy cuddling up with my humans from time to time. ",
                    5.0,
                    200.00
            );
            Pet pet22 = new Pet(
                    "Snowball",
                    "Turkish Van",
                    3,
                    LocalDate.of(2022, 2, 20),
                    LocalDate.of(2019, 6, 20),
                    "vaccinated for rabies and FVRCP, fleas treated",
                    "Available",
                    "https://i.pinimg.com/originals/07/a5/b1/07a5b15d4dcdfe0a23b8e06d6b3b151a.jpg",
                    "Hello there, my name is Snowball! I am a beautiful Turkish Van with striking markings and the softest fur you will ever touch. " +
                            "I am an energetic and playful cat, and I love to run around and explore. ",
                    7.0,
                    200.00
            );
            Pet pet23 = new Pet(
                    "Jack",
                    "Siamese",
                    4,
                    LocalDate.of(2022, 2, 23),
                    LocalDate.of(2019, 1, 23),
                    "up to date on vaccinations, no fleas",
                    "Available",
                    "https://www.hepper.com/wp-content/uploads/2021/08/closeup-portrait-of-himalayan-and-persian-mix-cat_BlurryMe_Shutterstock.jpg",
                    "Hi, I'm Jack! I am a handsome Siamese cat with piercing blue eyes and a charming personality and I love to play and explore, and I'm always up for a good game of chase.",
                    8.0,
                    150.00
            );
            Pet pet24 = new Pet(
                    "Muffin",
                    "Himalayan",
                    2,
                    LocalDate.of(2022, 3, 2),
                    LocalDate.of(2020, 7, 2),
                    "vaccinated for FVRCP, fleas treated",
                    "Available",
                    "https://i.pinimg.com/originals/63/7e/93/637e93686a189b8b4e917a5f99002733.jpg",
                    "Meow there! I'm Muffin, a beautiful Himalayan cat with fluffy fur and a playful personality. " +
                            "I am a playful cat, and I love to chase after toys and explore my surroundings.",
                    6.0,
                    250.00
            );
            Pet pet25 = new Pet(
                    "Bootsie",
                    "Persian",
                    3,
                    LocalDate.of(2022, 2, 25),
                    LocalDate.of(2019, 6, 25),
                    "vaccinated for rabies, fleas treated",
                    "Available",
                    "https://images.unsplash.com/photo-1618759287629-ca56b5916066?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2luZ2VyJTIwY2F0fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
                    "Hi, I'm Bootsie, a charming Persian cat with soft, fluffy fur and a sweet personality. I am a relaxed and gentle cat, and I love to curl up in cozy spots",
                    10.0,
                    300.00
            );
            Pet pet26 = new Pet(
                    "Bella",
                    "British Shorthair",
                    4,
                    LocalDate.of(2022, 2, 26),
                    LocalDate.of(2019, 1, 26),
                    "up to date on vaccinations, no fleas",
                    "Available",
                    "https://i.redd.it/k1z06811fux41.png",
                    "Hello, my name is Bella, and I am a beautiful British Shorthair with a gentle personality and striking green eyes. I am a relaxed and easy-going cat.",
                    9.0,
                    350.00
            );
            Pet pet27 = new Pet(
                    "Oscar",
                    "Birman",
                    2,
                     LocalDate.of(2022,2,23),
                    LocalDate.of(2020,8,23),
                    "vaccinated for FVRCP, fleas treated",
                    "Available",
                    "https://www.thesprucepets.com/thmb/D5s03LINbIYpZuiG6uvBpKrAKXk=/3500x0/filters:no_upscale():strip_icc()/GettyImages-623368786-f66c97ad6d2d494287b448415f4340a8.jpg",
                    "Hi there, I'm Oscar, a handsome Birman cat with a friendly personality and bright blue eye and I am an active and playful cat, and I love to chase after toys.",
                    7.0,
                    200.00
            );
            Pet pet28 = new Pet(
                    "Jasper",
                    "Savannah",
                    3,
                    LocalDate.of(2022,3,7),
                    LocalDate.of(2019,5,7),
                    "vaccinated for rabies, fleas treated",
                    "Available",
                    "https://www.moonlightsavannahs.com/wp-content/uploads/2019/04/savannah-kitten-breeders-mi.jpg",
                    "Jasper the Savannah here! I'm a proud and majestic feline, with sleek and gorgeous spots that will turn heads. I may look wild, but I'm as friendly as they come.",
                    12.0,
                    500.00
            );
            Pet pet29 = new Pet(
                    "Lily",
                    "Ragdoll",
                    4,
                    LocalDate.of(2022,2,20),
                    LocalDate.of(2019,1,28),
                    "up to date on vaccinations, no fleas",
                    "Available",
                    "https://www.thesprucepets.com/thmb/17UY4UpiMekV7WpeXDziXsnt7q4=/1646x0/filters:no_upscale():strip_icc()/GettyImages-145577979-d97e955b5d8043fd96747447451f78b7.jpg",
                    "Hello there, Lily the Ragdoll here! I'm a stunning cat with luxurious and soft fur, perfect for snuggling up with my new family. I'm still young but a bit more relaxed and laid-back.",
                    10.0,
                    400.00
            );
            Pet pet30 = new Pet(
                    "Nala",
                    "Munchkin",
                    1,
                    LocalDate.of(2022,3,11),
                    LocalDate.of(2020,9,3),
                    "vaccinated for FVRCP, fleas treated",
                    "Available",
                    "https://w0.peakpx.com/wallpaper/403/883/HD-wallpaper-black-eyes-white-munchkin-cat-kitten-in-blur-background-cute-cat.jpg",
                    "Nala the Munchkin here! I may be short on legs, but I'm big on personality! I'm a playful and affectionate cat. Also I'm just a little kitten with a whole lot of love to give.",
                    4.0,
                    600.00
            );

            petRepository.saveAll(List.of(pet1, pet2, pet3, pet4, pet5, pet6, pet7, pet8, pet9, pet10,
                    pet11, pet12, pet13, pet14, pet15, pet16, pet17, pet18, pet19, pet20, pet21, pet22, pet23, pet24,
                    pet25, pet26, pet27, pet28, pet29, pet30));

            Adoption adoption1 = new Adoption(
                    xz,
                    xz.getFirstName() + " " + xz.getLastName(),
                    pet1,
                    "Rejected",
                    LocalDate.of(2023, 2, 10),
                    LocalDate.of(2023, 2, 12),
                    LocalDate.of(2023, 2, 15)
            );

            Adoption adoption2 = new Adoption(
                    xz,
                    xz.getFirstName() + " " + xz.getLastName(),
                    pet1,
                    "In Progress",
                    LocalDate.of(2023, 2, 12),
                    LocalDate.of(2023, 2, 14)
            );

            Adoption adoption3 = new Adoption(
                    Jane,
                    Jane.getFirstName() + " " + Jane.getLastName(),
                    pet3,
                    "In Progress",
                    LocalDate.of(2023, 2, 15),
                    LocalDate.of(2023, 2, 17)
            );

            Adoption adoption4 = new Adoption(
                    Jane,
                    Jane.getFirstName() + " " + Jane.getLastName(),
                    pet4,
                    "Withdrawn",
                    LocalDate.of(2023, 2, 17),
                    LocalDate.of(2023, 2, 19),
                    LocalDate.of(2023, 2, 22)
            );

            Adoption adoption5 = new Adoption(
                    xz,
                    xz.getFirstName() + " " + xz.getLastName(),
                    pet5,
                    "Withdrawn",
                    LocalDate.of(2023, 2, 19),
                    LocalDate.of(2023, 2, 21),
                    LocalDate.of(2023, 2, 24)
            );

            Adoption adoption6 = new Adoption(
                    John,
                    John.getFirstName() + " " + John.getLastName(),
                    pet5,
                    "New",
                    LocalDate.of(2023, 2, 22)
            );

            Adoption adoption7 = new Adoption(
                    John,
                    John.getFirstName() + " " + John.getLastName(),
                    pet6,
                    "Pending Collection",
                    LocalDate.of(2023, 2, 24),
                    LocalDate.of(2023, 2, 26),
                    LocalDate.of(2023, 3, 1),
                    LocalDate.of(2023, 4, 3)
            );

            Adoption adoption8 = new Adoption(
                    Kendrick,
                    Kendrick.getFirstName() + " " + Kendrick.getLastName(),
                    pet7,
                    "New",
                    LocalDate.of(2023, 2, 27)
            );

            Adoption adoption9 = new Adoption(
                    Kendrick,
                    Kendrick.getFirstName() + " " + Kendrick.getLastName(),
                    pet8,
                    "In Progress",
                    LocalDate.of(2023, 3, 1),
                    LocalDate.of(2023, 3, 3)
            );

            Adoption adoption10 = new Adoption(
                    Kendrick,
                    Kendrick.getFirstName() + " " + Kendrick.getLastName(),
                    pet9,
                    "Rejected",
                    LocalDate.of(2023, 3, 3),
                    LocalDate.of(2023, 3, 5),
                    LocalDate.of(2023, 3, 8)
            );

            Adoption adoption11 = new Adoption(
                    Kendrick,
                    Kendrick.getFirstName() + " " + Kendrick.getLastName(),
                    pet10,
                    "New",
                    LocalDate.of(2023, 3, 6)
            );

            Adoption adoption12 = new Adoption(
                    Kendrick,
                    Kendrick.getFirstName() + " " + Kendrick.getLastName(),
                    pet11,
                    "Rejected",
                    LocalDate.of(2023, 3, 8),
                    LocalDate.of(2023, 3, 10),
                    LocalDate.of(2023, 3, 12)
            );

            Adoption adoption13 = new Adoption(
                    Jack,
                    Jack.getFirstName() + " " + Jack.getLastName(),
                    pet12,
                    "Pending Collection",
                    LocalDate.of(2023, 3, 11),
                    LocalDate.of(2023, 3, 13),
                    LocalDate.of(2023, 3, 16),
                    LocalDate.of(2023, 3, 28)
            );

            Adoption adoption14 = new Adoption(
                    Jack,
                    Jack.getFirstName() + " " + Jack.getLastName(),
                    pet13,
                    "New",
                    LocalDate.of(2023, 3, 13)
            );

            Adoption adoption15 = new Adoption(
                    Jack,
                    Jack.getFirstName() + " " + Jack.getLastName(),
                    pet14,
                    "New",
                    LocalDate.of(2023, 3, 16)
            );
            Adoption adoption16 = new Adoption(
                    John,
                    John.getFirstName() + " " + John.getLastName(),
                    pet26,
                    "New",
                    LocalDate.of(2023, 3, 23)
            );


            adoption2.setPhaseOfAdoption(4);
            adoption3.setPhaseOfAdoption(3);
            adoption7.setPhaseOfAdoption(5);
            adoption9.setPhaseOfAdoption(1);
            adoption13.setPhaseOfAdoption(5);

            adoptionRepository.saveAll(
                    List.of(adoption1,adoption2,adoption3,adoption4,adoption5,adoption6,adoption7,adoption8,adoption9,
                            adoption10,adoption11,adoption12,adoption13,adoption14,adoption15, adoption16)
            );

            // Personal Qns
            PreScreeningQuestionnaire questionnaire1 = new PreScreeningQuestionnaire(
                    QuestionType.SHORT_ANSWER,
                    "Name",
                    QuestionCategory.PERSONAL
            );

            PreScreeningQuestionnaire questionnaire2 = new PreScreeningQuestionnaire(
                    QuestionType.SHORT_ANSWER,
                    "Age",
                    QuestionCategory.PERSONAL
            );

            PreScreeningQuestionnaire questionnaire3 = new PreScreeningQuestionnaire(
                    QuestionType.SHORT_ANSWER,
                    "Email Address",
                    QuestionCategory.PERSONAL
            );

            PreScreeningQuestionnaire questionnaire4 = new PreScreeningQuestionnaire(
                    QuestionType.SHORT_ANSWER,
                    "Contact Number",
                    QuestionCategory.PERSONAL
            );

            List<String> mcq_Qns1 = new ArrayList<String>();
            mcq_Qns1.add("Monday");
            mcq_Qns1.add("Tuesday");
            mcq_Qns1.add("Wednesday");
            mcq_Qns1.add("Thursday");
            mcq_Qns1.add("Friday");
            mcq_Qns1.add("Saturday");
            mcq_Qns1.add("Sunday");

            PreScreeningQuestionnaire questionnaire5 = new PreScreeningQuestionnaire(
                    QuestionType.MCQ,
                    "Preferred Contact Days",
                    mcq_Qns1,
                    QuestionCategory.PERSONAL
            );

            List<String> mcq_Qns2 = new ArrayList<String>();
            mcq_Qns2.add("Yes");
            mcq_Qns2.add("No");

            PreScreeningQuestionnaire questionnaire6 = new PreScreeningQuestionnaire(
                    QuestionType.MCQ,
                    "Have you ever owned a cat before?",
                    mcq_Qns2,
                    QuestionCategory.PERSONAL
            );

            PreScreeningQuestionnaire questionnaire7 = new PreScreeningQuestionnaire(
                    QuestionType.SHORT_ANSWER,
                    "Why do you want to adopt a cat?",
                    QuestionCategory.PERSONAL
            );

            PreScreeningQuestionnaire questionnaire8 = new PreScreeningQuestionnaire(
                    QuestionType.SHORT_ANSWER,
                    "What qualities are you looking for in a cat?",
                    QuestionCategory.PERSONAL
            );

            // PetCare Qns
            PreScreeningQuestionnaire questionnaire9 = new PreScreeningQuestionnaire(
                    QuestionType.SCALE,
                    "How much time are you willing to spend on cat care? (In hours)",
                    1,
                    3,
                    QuestionCategory.PETCARE
            );

            PreScreeningQuestionnaire questionnaire10 = new PreScreeningQuestionnaire(
                    QuestionType.MCQ,
                    "Are you willing to provide regular veterinary care for your cat?",
                    mcq_Qns2,
                    QuestionCategory.PETCARE
            );

            PreScreeningQuestionnaire questionnaire11 = new PreScreeningQuestionnaire(
                    QuestionType.MCQ,
                    "Are you willing to provide regular grooming for your cat?",
                    mcq_Qns2,
                    QuestionCategory.PETCARE
            );

            // Cat Experience Qns

            PreScreeningQuestionnaire questionnaire12 = new PreScreeningQuestionnaire(
                    QuestionType.SHORT_ANSWER,
                    "What breeds of cats have you owned in the past?",
                    QuestionCategory.CATEXPERIENCE
            );

            PreScreeningQuestionnaire questionnaire13 = new PreScreeningQuestionnaire(
                    QuestionType.SHORT_ANSWER,
                    "What challenges have you faced when owning a cat?",
                    QuestionCategory.CATEXPERIENCE
            );

            PreScreeningQuestionnaire questionnaire14 = new PreScreeningQuestionnaire(
                    QuestionType.SCALE,
                    "What is your experience with litter box training? From a scale of 1 to 5, " +
                            "5 being the most experienced",
                    1,
                    5,
                    QuestionCategory.CATEXPERIENCE
            );

            PreScreeningQuestionnaire questionnaire15 = new PreScreeningQuestionnaire(
                    QuestionType.SHORT_ANSWER,
                    "What type of house do you live in?",
                    QuestionCategory.HOMEINFORMATION
            );

            List<String> mcq_Qns3 = new ArrayList<String>();
            mcq_Qns3.add("Rent");
            mcq_Qns3.add("Own");

            PreScreeningQuestionnaire questionnaire16 = new PreScreeningQuestionnaire(
                    QuestionType.MCQ,
                    "Do you rent or own your home?",
                    mcq_Qns3,
                    QuestionCategory.HOMEINFORMATION
            );

            PreScreeningQuestionnaire questionnaire17 = new PreScreeningQuestionnaire(
                    QuestionType.MCQ,
                    "Do you have a backyard or outdoor space?",
                    mcq_Qns2,
                    QuestionCategory.HOMEINFORMATION
            );

            // household
            PreScreeningQuestionnaire questionnaire18 = new PreScreeningQuestionnaire(
                    QuestionType.SHORT_ANSWER,
                    "How many adults live in your home?",
                    QuestionCategory.HOUSEHOLD
            );
            PreScreeningQuestionnaire questionnaire19 = new PreScreeningQuestionnaire(
                    QuestionType.SHORT_ANSWER,
                    "How many children live in your home?",
                    QuestionCategory.HOUSEHOLD
            );

            PreScreeningQuestionnaire questionnaire20 = new PreScreeningQuestionnaire(
                    QuestionType.MCQ,
                    "Do you have any other pets?",
                    mcq_Qns2,
                    QuestionCategory.HOUSEHOLD
            );

            PreScreeningQuestionnaire questionnaire21 = new PreScreeningQuestionnaire(
                    QuestionType.SHORT_ANSWER,
                    "How would you describe your lifestyle?",
                    QuestionCategory.LIFESTYLE
            );

            PreScreeningQuestionnaire questionnaire22 = new PreScreeningQuestionnaire(
                    QuestionType.SHORT_ANSWER,
                    "How much time do you typically spend at home?",
                    QuestionCategory.LIFESTYLE
            );

            PreScreeningQuestionnaire questionnaire23 = new PreScreeningQuestionnaire(
                    QuestionType.MCQ,
                    "Do you travel frequently?",
                    mcq_Qns2,
                    QuestionCategory.LIFESTYLE
            );

            // save all questions
            preScreeningQuestionnaireRepository.saveAll(
                    List.of(questionnaire1,questionnaire2,questionnaire3,questionnaire4,questionnaire5,questionnaire6,
                            questionnaire7,questionnaire8,questionnaire9,questionnaire10,questionnaire11,questionnaire12,
                            questionnaire13,questionnaire14,questionnaire15,questionnaire16,questionnaire17,questionnaire18,
                            questionnaire19,questionnaire20,questionnaire21,questionnaire22,questionnaire23)
            );

        };
    }
}
