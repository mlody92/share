package com.arokis.share.security;

import com.arokis.share.user.model.User;
import com.arokis.share.user.repo.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

    @Autowired
    private UserDao userDao;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User logged = userDao.get(username);
        if (logged == null) {
            throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
        }
        return new JwtUserDetails(logged.getId(), logged.getEmail(), logged.getPassword(), "ROLE_USER_2");
    }

}