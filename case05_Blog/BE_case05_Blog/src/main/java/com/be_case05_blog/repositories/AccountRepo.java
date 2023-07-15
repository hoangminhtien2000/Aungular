package com.be_case05_blog.repositories;

import com.be_case05_blog.models.Account;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface AccountRepo extends PagingAndSortingRepository<Account, Integer> {
    Account findAccountByUsername(String username);
}
