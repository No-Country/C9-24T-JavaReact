package com.kiosko.app.kioskoapp.security;

import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity
public class SecurityConfig {
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final UserDetailsService userDetailsService;
    private final JwtFilterRequest filterRequest;

    private static final String[] FREE_ENDPOINTS = {
            "/v2/api-docs",
            "/swagger-resources",
            "/swagger-resources/**",
            "/configuration/ui",
            "/configuration/security",
            "/swagger-ui.html",
            "/webjars/**",
            // -- Swagger UI v3 (OpenAPI)
            "/v3/api-docs/**",
            "/swagger-ui/**",
            //others
            "/authenticate/**",
            "/bienvenido.html","/authenticate", "/login.html", "/styles/**", "/assets/**", "/scripts/**", "/signup.html"

    };

    private static final String[] FREE_GET_REQUEST = {
            "/caracteristica/**",
            "/categoria/**",
            "/producto/**",
            "/usuario/**",
            "/carga/**"
    };




    public SecurityConfig(BCryptPasswordEncoder bCryptPasswordEncoder, UserDetailsService userDetailsService, JwtFilterRequest filterRequest) {
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.userDetailsService = userDetailsService;
        this.filterRequest = filterRequest;
    }

    @Bean
    public SecurityFilterChain configure(HttpSecurity http) throws Exception {
        return http
                .csrf(AbstractHttpConfigurer::disable)
                .addFilterBefore(filterRequest, UsernamePasswordAuthenticationFilter.class)
                .authorizeRequests(auth -> {
                    auth.antMatchers(FREE_ENDPOINTS).permitAll();
                    auth.antMatchers(HttpMethod.GET, FREE_GET_REQUEST).permitAll();
                    auth.antMatchers(HttpMethod.GET, "/usuario").authenticated();
                    auth.antMatchers(HttpMethod.POST, "/pedido").hasRole("ESTUDIANTE");
                    auth.antMatchers("/**").hasRole("ADMIN");
                })
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .addFilterBefore(filterRequest, UsernamePasswordAuthenticationFilter.class).build();
//        return http.csrf().disable()
//                .authorizeRequests()
//                .antMatchers(HttpMethod.POST,"/user")
//                .permitAll()
//                .antMatchers("/rating/**")
//                .authenticated()
//                .antMatchers(HttpMethod.GET,"/**")
//                .hasAnyRole("USER","ADMIN")
//                .antMatchers("/booking/**")
//                .hasAnyRole("USER","ADMIN")
//                .antMatchers("/**")
//                .hasRole("ADMIN")
//                .and()
//                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//                .and().addFilterBefore(filterRequest, UsernamePasswordAuthenticationFilter.class).build();
    }

    @Bean
    public AuthenticationManager authenticationManagerBean(HttpSecurity http) throws Exception {
        AuthenticationManagerBuilder authenticationManagerBuilder = http.getSharedObject(AuthenticationManagerBuilder.class);
        authenticationManagerBuilder
                .userDetailsService(userDetailsService)
                .passwordEncoder(bCryptPasswordEncoder);
        return authenticationManagerBuilder.build();
    }




}
