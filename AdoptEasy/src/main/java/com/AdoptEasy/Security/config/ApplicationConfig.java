package com.AdoptEasy.Security.config;


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
    CommandLineRunner commandLineRunner(UserRepository repository){
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
//            User tester = new User(
//                    "CarbonO",
//                    "Testing",
//                    "carbonohelp@gmail.com",
//                    encodedPassword,
//                    UserRole.ADMIN,
//                    true
//            );
            repository.saveAll(
                    List.of(xz)
            );


        };
    }
}
