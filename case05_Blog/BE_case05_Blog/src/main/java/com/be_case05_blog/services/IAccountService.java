package com.be_case05_blog.services;

import com.be_case05_blog.models.Account;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public interface IAccountService {
    UserDetails loadUserByUsername(String username)throws UsernameNotFoundException;
    Account findAccountByUsername(String username);
}
