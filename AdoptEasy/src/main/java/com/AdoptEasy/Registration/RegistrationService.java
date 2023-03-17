package com.AdoptEasy.Registration;

import com.AdoptEasy.Registration.Token.ConfirmationToken;
import com.AdoptEasy.Registration.Token.ConfirmationTokenService;
import com.AdoptEasy.User.User;
import com.AdoptEasy.User.UserRepository;
import com.AdoptEasy.User.UserRole;
import com.AdoptEasy.User.UserService;
import com.AdoptEasy.Registration.EmailValidator;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
public class RegistrationService {

    private final UserService userService;

    private final ConfirmationTokenService confirmationTokenService;

    private final EmailValidator emailValidator;

    private final UserRepository userRepository;

    public RegistrationService(UserService userService, ConfirmationTokenService confirmationTokenService, EmailValidator emailValidator, UserRepository userRepository) {
        this.userService = userService;
        this.confirmationTokenService = confirmationTokenService;
        this.emailValidator = emailValidator;
        this.userRepository = userRepository;
    }

    public String register(RegistrationRequest request) {
        boolean isValid = emailValidator.test(request.getEmail());
        boolean isEmailTaken = userRepository.findByEmail(request.getEmail()).isPresent();
        if (!isValid) {
            throw new IllegalStateException("email not found");
        } else if (isEmailTaken) {
            throw new IllegalStateException("email taken");
        }
        String token = userService.signUpUser(
                new User(
                        request.getFirstName(),
                        request.getLastName(),
                        request.getEmail(),
                        request.getPassword(),
                        UserRole.SHELTER
                )
        );

        return token;
    }

    @Transactional
    public Long confirmToken(String token) {
        ConfirmationToken confirmationToken = confirmationTokenService
                .getToken(token)
                .orElseThrow(() ->
                        new IllegalStateException("token not found"));

        if (confirmationToken.getConfirmedAt() != null) {
            throw new IllegalStateException("email already confirmed");
        }

        LocalDateTime expiredAt = confirmationToken.getExpiresAt();

        if (expiredAt.isBefore(LocalDateTime.now())) {
            throw new IllegalStateException("token expired");
        }

        confirmationTokenService.setConfirmedAt(token);
        userService.enableAppUser(
                confirmationToken.getUser().getEmail());

        return confirmationToken.getUser().getId();
    }


}
