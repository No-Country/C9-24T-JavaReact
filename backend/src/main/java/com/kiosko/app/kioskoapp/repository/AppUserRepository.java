package com.kiosko.app.kioskoapp.repository;

import com.kiosko.app.kioskoapp.entities.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AppUserRepository extends JpaRepository<AppUser, Long> {
    Optional<AppUser> findByEmail(String email);
    Optional<AppUser> findByAppUserRoleId(int id_rol);

    Optional<AppUser> findByDni(String dni);
}
