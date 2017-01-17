package com.smartjournal.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Statistics implements Serializable{

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @OneToOne
    private Discipline discipline;

    @OneToOne
    private Observer observer;

    @Column(name = "status")
    private Status status;

    @Table
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private static class Status implements Serializable {

        private Boolean isThere;

        private Integer mark;
    }

}
