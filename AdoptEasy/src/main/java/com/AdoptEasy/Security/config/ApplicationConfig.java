package com.AdoptEasy.Security.config;


import com.AdoptEasy.Adoption.Adoption;
import com.AdoptEasy.Adoption.AdoptionRepository;
import com.AdoptEasy.Pet.Pet;
import com.AdoptEasy.Pet.PetRepository;
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
    CommandLineRunner commandLineRunner(UserRepository repository, PetRepository petRepository, AdoptionRepository adoptionRepository){
        //create dummy users
        String encodedPassword = bCryptPasswordEncoder().encode("123");
        return args -> {
            User xz = new User(
                    "Zhao Xing",
                    "Chen",
                    "chenzhaoxing.98@gmail.com",
                    encodedPassword,
                    UserRole.ADMIN
            );

            User Jane = new User(
                    "Jane",
                    "Doe",
                    "JaneDoe@example.com",
                    encodedPassword,
                    UserRole.ADMIN
            );

            User John = new User(
                    "John",
                    "Doe",
                    "JohnDoe@example.com",
                    encodedPassword,
                    UserRole.ADMIN
            );

            User Kendrick = new User(
                    "Kendrick",
                    "Lemar",
                    "KendrickLemar@example.com",
                    encodedPassword,
                    UserRole.ADMIN
            );

            User Jack = new User(
                    "Jack",
                    "Lee",
                    "JackLee@example.com",
                    encodedPassword,
                    UserRole.ADMIN
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
                    List.of(xz,Jane,John,Kendrick,Jack)
            );


            // create dummy pets
            Pet pet1 = new Pet(
                    "Whiskers",
                    "Siamese",
                    2,
                    LocalDate.of(2023, 3, 1),
                    LocalDate.of(2021, 7, 1),
                    "fully vaccinated, no fleas",
                    "Available",
                    "https://images.pexels.com/photos/596590/pexels-photo-596590.jpeg?cs=srgb&dl=pexels-leah-kelley-596590.jpg&fm=jpg"
            );

            Pet pet2 = new Pet(
                    "Mittens",
                    "Persian",
                    3,
                    LocalDate.of(2023, 2, 15),
                    LocalDate.of(2020, 12, 15),
                    "up to date on vaccinations, fleas treated",
                    "Available",
                    "https://images.unsplash.com/photo-1591429939960-b7d5add10b5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc2lhbiUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            );

            Pet pet3 = new Pet(
                    "Simba",
                    "Bengal",
                    1,
                    LocalDate.of(2023, 3, 5),
                    LocalDate.of(2021, 5, 5),
                    "vaccinated for rabies, fleas treated",
                    "Available",
                    "https://images.unsplash.com/photo-1598463166261-357c23778812?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1718&q=80"
            );

            Pet pet4 = new Pet(
                    "Luna",
                    "British Shorthair",
                    2,
                    LocalDate.of(2023, 2, 20),
                    LocalDate.of(2020, 8, 20),
                    "vaccinated for FVRCP, fleas treated",
                    "Available",
                    "https://images.unsplash.com/photo-1492370284958-c20b15c692d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80"
            );

            Pet pet5 = new Pet(
                    "Oreo",
                    "American Shorthair",
                    1,
                    LocalDate.of(2023, 3, 10),
                    LocalDate.of(2021, 9, 10),
                    "vaccinated for rabies and FVRCP, no fleas",
                    "Available",
                    "https://c4.wallpaperflare.com/wallpaper/623/605/75/cat-look-striped-american-shorthair-wallpaper-preview.jpg"
            );

            Pet pet6 = new Pet(
                    "Felix",
                    "Scottish Fold",
                    1,
                    LocalDate.of(2023, 3, 2),
                    LocalDate.of(2021, 7, 2),
                    "vaccinated for FVRCP, fleas treated",
                    "Available",
                    "https://images.unsplash.com/photo-1595433708220-3aa013e5e43f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
            );

            Pet pet7 = new Pet(
                    "Tiger",
                    "Maine Coon",
                    2,
                    LocalDate.of(2023, 2, 25),
            LocalDate.of(2020, 8, 25),
                    "vaccinated for FVRCP, fleas treated",
                    "Available",
                    "https://images.unsplash.com/photo-1543055484-ac8fe612bf31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            );

            Pet pet8 = new Pet(
                    "Garfield",
                    "Exotic Shorthair",
                    1,
                    LocalDate.of(2023, 3, 12),
                    LocalDate.of(2021, 9, 12),
                    "up to date on vaccinations, no fleas",
                    "Available",
                    "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F12%2F14%2Fexotic-shorthair-kitten-near-window-266176374-2000.jpg"
            );
            Pet pet9 = new Pet(
                    "Tigger",
                    "Abyssinian",
                    2,
                    LocalDate.of(2023, 2, 18),
                    LocalDate.of(2020, 6, 18),
                    "vaccinated for rabies, fleas treated",
                    "Available",
                    "https://images.wallpaperscraft.com/image/single/abyssinian_cat_face_eyes_96018_1920x1080.jpg"
            );

            Pet pet10 = new Pet(
                    "Boots",
                    "Manx",
                    1,
                    LocalDate.of(2023, 3, 8),
                    LocalDate.of(2021, 7, 8),
                    "vaccinated for FVRCP, fleas treated",
                    "Available",
                    "https://www.pngitem.com/pimgs/m/564-5647117_ginger-manx-cat-long-haied-hd-png-download.png"
            );

            Pet pet11 = new Pet(
                    "Whiskey",
                    "Oriental Shorthair",
                    2,
                    LocalDate.of(2023, 2, 27),
                    LocalDate.of(2020, 8, 27),
                    "vaccinated for FVRCP, fleas treated",
                    "Available",
                    "https://images.pexels.com/photos/11943120/pexels-photo-11943120.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500](https://images.pexels.com/photos/11943120/pexels-photo-11943120.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            );

            Pet pet12 = new Pet(
                    "Pepper",
                    "Sphynx",
                    2,
                    LocalDate.of(2023, 2, 21),
                    LocalDate.of(2020, 10, 21),
                    "up to date on vaccinations, no fleas",
                    "Available",
                    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.peakpx.com%2Fen%2Fhd-wallpaper-desktop-pceoi&psig=AOvVaw1eS9scpEHdIjWkihUWKuyB&ust=1679042549676000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMDB14eH4P0CFQAAAAAdAAAAABAJ"
            );

            Pet pet13 = new Pet(
                    "Gizmo",
                    "Devon Rex",
                    1,
                    LocalDate.of(2023, 3, 6),
                    LocalDate.of(2021, 5, 6),
                    "vaccinated for FVRCP, fleas treated",
                    "Available",
                    "https://cdn.shopify.com/s/files/1/0997/4496/articles/Blue_Eyed_Devon_Rex_Cat_d9234955-823a-459d-8b14-fb1340247c0e_1200x.jpg?v=1588962514"
            );

            Pet pet14 = new Pet(
                    "Coco",
                    "Turkish Angora",
                    1,
                    LocalDate.of(2023, 3, 11),
                    LocalDate.of(2021, 9, 11),
                    "vaccinated for rabies and FVRCP",
                    "Available",
                    "https://c4.wallpaperflare.com/wallpaper/906/682/414/cat-portrait-white-fluffy-wallpaper-preview.jpg"
            );

            Pet pet15 = new Pet(
                    "Smokey",
                    "Norwegian Forest Cat",
                    2,
                    LocalDate.of(2023, 2, 26),
                    LocalDate.of(2020, 8, 26),
                    "up to date on vaccinations, no fleas",
                    "Available",
                    "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-06/Norwegian"
            );

            Pet pet16 = new Pet(
                    "Midnight",
                    "Bombay",
                    1,
                    LocalDate.parse("2023-03-04"),
                    LocalDate.parse("2021-09-04"),
                    "vaccinated for FVRCP, fleas treated",
                    "Available",
                    "https://www.catbreedslist.com/uploads/cat-pictures/bombay-cat-2.jpg"
            );
            Pet pet17 = new Pet(
                    "Max",
                    "Burmese",
                    2,
                    LocalDate.parse("2023-03-13"),
                    LocalDate.parse("2020-09-13"),
                    "up to date on vaccinations, no fleas",
                    "Available",
                    "https://c4.wallpaperflare.com/wallpaper/114/457/211/british-burmese-cat-siamese-cat-wallpaper-preview.jpg"
            );
            Pet pet18 = new Pet(
                    "Charlie",
                    "Siamese",
                    3,
                    LocalDate.parse("2023-02-19"),
                    LocalDate.parse("2019-06-19"),
                    "vaccinated for FVRCP, fleas treated",
                    "Available",
                    "https://cdn.pixabay.com/photo/2017/02/15/12/12/cat-2068462__480.jpg"
            );
            Pet pet19 = new Pet(
                    "Ginger",
                    "Himalayan",
                    5,
                    LocalDate.parse("2023-03-14"),
                    LocalDate.parse("2018-01-14"),
                    "vaccinated for rabies, fleas treated",
                    "Available",
                    "https://images.unsplash.com/photo-1586951998354-5c23b33cd612?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGltYWxheWFuJTIwY2F0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            );
            Pet pet20 = new Pet(
                    "Socks",
                    "Balinese",
                    4,
                    LocalDate.parse("2023-02-22"),
                    LocalDate.parse("2019-02-22"),
                    "up to date on vaccinations, no fleas",
                    "Available",
                    "https://images.ctfassets.net/440y9b545yd9/5y0EMhEGZd8P9Zkhc5dFmt/fba507f5c265bcd5d75b607df2b2a880/Balinese850.jpg"
            );
            Pet pet21 = new Pet(
                    "Smudge",
                    "Chartreux",
                    2,
                    LocalDate.of(2023, 3, 15),
                    LocalDate.of(2020, 9, 15),
                    "vaccinated for FVRCP, fleas treated",
                    "Available",
                    "https://upload.wikimedia.org/wikipedia/commons/3/3c/IC_Blue_Melody_Flipper_CHA_male_EX1_CACIB.jpg"
            );
            Pet pet22 = new Pet(
                    "Snowball",
                    "Turkish Van",
                    3,
                    LocalDate.of(2023, 2, 20),
                    LocalDate.of(2019, 6, 20),
                    "vaccinated for rabies and FVRCP, fleas treated",
                    "Available",
                    "https://i.pinimg.com/originals/07/a5/b1/07a5b15d4dcdfe0a23b8e06d6b3b151a.jpg"
            );
            Pet pet23 = new Pet(
                    "Jack",
                    "Siamese",
                    4,
                    LocalDate.of(2023, 2, 23),
                    LocalDate.of(2019, 1, 23),
                    "up to date on vaccinations, no fleas",
                    "Available",
                    "https://www.hepper.com/wp-content/uploads/2021/08/closeup-portrait-of-himalayan-and-persian-mix-cat_BlurryMe_Shutterstock.jpg"
            );
            Pet pet24 = new Pet(
                    "Muffin",
                    "Himalayan",
                    2,
                    LocalDate.of(2023, 3, 2),
                    LocalDate.of(2020, 7, 2),
                    "vaccinated for FVRCP, fleas treated",
                    "Available",
                    "https://i.pinimg.com/originals/63/7e/93/637e93686a189b8b4e917a5f99002733.jpg"
            );
            Pet pet25 = new Pet(
                    "Bootsie",
                    "Persian",
                    3,
                    LocalDate.of(2023, 2, 25),
                    LocalDate.of(2019, 6, 25),
                    "vaccinated for rabies, fleas treated",
                    "Available",
                    "https://images.unsplash.com/photo-1618759287629-ca56b5916066?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2luZ2VyJTIwY2F0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            );
            Pet pet26 = new Pet(
                    "Bella",
                    "British Shorthair",
                    4,
                    LocalDate.of(2023, 2, 26),
                    LocalDate.of(2019, 1, 26),
                    "up to date on vaccinations, no fleas",
                    "Available",
                    "https://i.redd.it/k1z06811fux41.png"
            );
            Pet pet27 = new Pet(
                    "Oscar",
                    "Birman",
                    2,
                     LocalDate.of(2023,2,23),
                    LocalDate.of(2020,8,23),
                    "vaccinated for FVRCP, fleas treated",
                    "Available",
                    "https://www.thesprucepets.com/thmb/D5s03LINbIYpZuiG6uvBpKrAKXk=/3500x0/filters:no_upscale():strip_icc()/GettyImages-623368786-f66c97ad6d2d494287b448415f4340a8.jpg"
            );
            Pet pet28 = new Pet(
                    "Jasper",
                    "Savannah",
                    3,
                    LocalDate.of(2023,3,7),
                    LocalDate.of(2019,5,7),
                    "vaccinated for rabies, fleas treated",
                    "Available",
                    "https://www.moonlightsavannahs.com/wp-content/uploads/2019/04/savannah-kitten-breeders-mi.jpg"
            );
            Pet pet29 = new Pet(
                    "Lily",
                    "Ragdoll",
                    4,
                    LocalDate.of(2023,2,20),
                    LocalDate.of(2019,1,28),
                    "up to date on vaccinations, no fleas",
                    "Available",
                    "https://www.thesprucepets.com/thmb/17UY4UpiMekV7WpeXDziXsnt7q4=/1646x0/filters:no_upscale():strip_icc()/GettyImages-145577979-d97e955b5d8043fd96747447451f78b7.jpg"
            );
            Pet pet30 = new Pet(
                    "Nala",
                    "Munchkin",
                    1,
                    LocalDate.of(2023,3,11),
                    LocalDate.of(2020,9,3),
                    "vaccinated for FVRCP, fleas treated",
                    "Available",
                    "https://w0.peakpx.com/wallpaper/403/883/HD-wallpaper-black-eyes-white-munchkin-cat-kitten-in-blur-background-cute-cat.jpg"
            );

            petRepository.saveAll(List.of(pet1, pet2, pet3, pet4, pet5, pet6, pet7, pet8, pet9, pet10,
                    pet11, pet12, pet13, pet14, pet15, pet16, pet17, pet18, pet19, pet20, pet21, pet22, pet23, pet24,
                    pet25, pet26, pet27, pet28, pet29, pet30));

            Adoption adoption1 = new Adoption(
                    xz,
                    pet1,
                    "Rejected",
                    LocalDate.parse("10-02-2023"),
                    LocalDate.parse("12-02-2023"),
                    LocalDate.parse("15-02-2023")
            );

            Adoption adoption2 = new Adoption(
                    xz,
                    pet2,
                    "In Progress",
                    LocalDate.parse("12-02-2023"),
                    LocalDate.parse("14-02-2023")
            );

            Adoption adoption3 = new Adoption(
                    Jane,
                    pet3,
                    "In Progress",
                    LocalDate.parse("15-02-2023"),
                    LocalDate.parse("17-02-2023")
            );

            Adoption adoption4 = new Adoption(
                    Jane,
                    pet4,
                    "Withdrawn",
                    LocalDate.parse("17-02-2023"),
                    LocalDate.parse("19-02-2023"),
                    LocalDate.parse("22-02-2023")
            );

            Adoption adoption5 = new Adoption(
                    xz,
                    pet5,
                    "Withdrawn",
                    LocalDate.parse("19-02-2023"),
                    LocalDate.parse("21-02-2023"),
                    LocalDate.parse("24-02-2023")
            );

            Adoption adoption6 = new Adoption(
                    John,
                    pet5,
                    "New",
                    LocalDate.parse("22-02-2023")
            );

            Adoption adoption7 = new Adoption(
                    John,
                    pet6,
                    "Pending Collection",
                    LocalDate.parse("24-02-2023"),
                    LocalDate.parse("26-02-2023"),
                    LocalDate.parse("01-03-2023")
            );

            Adoption adoption8 = new Adoption(
                    Kendrick,
                    pet7,
                    "New",
                    LocalDate.parse("27-02-2023")
            );

            Adoption adoption9 = new Adoption(
                    Kendrick,
                    pet8,
                    "In Progress",
                    LocalDate.parse("01-03-2023"),
                    LocalDate.parse("03-03-2023")
            );

            Adoption adoption10 = new Adoption(
                    Kendrick,
                    pet9,
                    "Rejected",
                    LocalDate.parse("03-03-2023"),
                    LocalDate.parse("05-03-2023"),
                    LocalDate.parse("08-03-2023")
            );

            Adoption adoption11 = new Adoption(
                    Kendrick,
                    pet10,
                    "New",
                    LocalDate.parse("06-03-2023")
            );

            Adoption adoption12 = new Adoption(
                    Kendrick,
                    pet11,
                    "In Progress",
                    LocalDate.parse("08-03-2023"),
                    LocalDate.parse("10-03-2023"),
                    LocalDate.parse("13-03-2023")
            );

            Adoption adoption13 = new Adoption(
                    Jack,
                    pet12,
                    "Pending Collection",
                    LocalDate.parse("11-03-2023"),
                    LocalDate.parse("13-03-2023"),
                    LocalDate.parse("16-03-2023")
            );

            Adoption adoption14 = new Adoption(
                    Jack,
                    pet13,
                    "New",
                    LocalDate.parse("13-03-2023")
            );

            Adoption adoption15 = new Adoption(
                    Jack,
                    pet14,
                    "New",
                    LocalDate.parse("16-03-2023")
            );

            adoptionRepository.saveAll(
                    List.of(adoption1,adoption2,adoption3,adoption4,adoption5,adoption6,adoption7,adoption8,adoption9,
                            adoption10,adoption11,adoption12,adoption13,adoption14,adoption15)
            );

        };
    }
}
