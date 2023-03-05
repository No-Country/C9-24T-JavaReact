package com.kiosko.app.kioskoapp.dto.mapper;

import com.kiosko.app.kioskoapp.dto.UserProfile;
import com.kiosko.app.kioskoapp.dto.UserRegistration;
import com.kiosko.app.kioskoapp.entities.AppUser;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring", uses = {RolMapper.class})
public interface UserMapper {
    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    @Mapping(source = "appUserRole", target = "rol")
    UserProfile appUserToUserProfile (AppUser appUser);
    AppUser userRegistrationToAppUser(UserRegistration userRegistration);
    @InheritInverseConfiguration
    AppUser userProfileToAppUser(UserProfile userProfile);



}
