package com.example.craftshop.user.dto;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Embeddable
@NoArgsConstructor
@AllArgsConstructor
public class AddressDto {

    private String street;
    private Integer building;
    private Integer numberApartment;
    private String indexNum;
    private String country;
    private String city;

}
