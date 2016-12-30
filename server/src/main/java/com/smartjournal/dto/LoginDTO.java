package com.smartjournal.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.io.Serializable;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class LoginDTO implements Serializable {

    private String login;

    private String password;
}
