package com.arokis.general;

import org.springframework.util.DigestUtils;

public class PasswordConventer {
    private final static String SALT = "N##$/3&z1c";

    public static String convertPassword(String password) {
        return DigestUtils.md5DigestAsHex((SALT + password).getBytes());
    }
}
