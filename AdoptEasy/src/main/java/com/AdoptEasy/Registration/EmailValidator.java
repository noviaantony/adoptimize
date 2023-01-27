package com.AdoptEasy.Registration;

import java.util.function.Predicate;

public class EmailValidator implements Predicate<String> {

    @Override
    public boolean test(String s) {

        if (s.contains("@")) {
            return true;
        } else if (s.contains(".com")) {
            return true;
        } else {
            return false;
        }

    }
}





