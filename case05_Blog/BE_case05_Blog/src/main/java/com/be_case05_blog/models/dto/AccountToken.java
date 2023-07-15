package com.be_case05_blog.models.dto;

import com.be_case05_blog.models.Role;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class AccountToken {
    private String username;
    private String avatar;
    private String token;

    private List<Role> roles;
}
