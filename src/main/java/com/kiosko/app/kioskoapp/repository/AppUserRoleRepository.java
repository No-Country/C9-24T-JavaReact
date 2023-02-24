package com.kiosko.app.kioskoapp.repository;

import com.kiosko.app.kioskoapp.entities.AppUserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AppUserRoleRepository extends JpaRepository<AppUserRole, Integer> {
    Optional<AppUserRole> findByNombre(String nombre);
}
