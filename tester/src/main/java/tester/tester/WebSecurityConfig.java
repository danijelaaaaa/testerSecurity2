package tester.tester;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;



@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	 @Autowired
     private UserDetailsService userDetailsService;
	 
	 @Bean
	    public BCryptPasswordEncoder bCryptPasswordEncoder() {
	        return new BCryptPasswordEncoder();
	    }
	
	 @Override
     protected void configure(HttpSecurity http) throws Exception {
         // disable caching
         http.headers().cacheControl();

         http.csrf().disable() // disable csrf for our requests.
             .authorizeRequests()
	             .antMatchers("/").permitAll()
	             .antMatchers("/app/app.module.js").permitAll()
	             .antMatchers("/app/components/category/**.js").permitAll()
	             .antMatchers("/app/components/test/**.js").permitAll()
	             .antMatchers("/app/components/core/**").permitAll()
	             .antMatchers("/app/components/question/**.js").permitAll()
	             .antMatchers("/app/auth.service.js").permitAll()
	             .antMatchers("/app/localStorage.factory.js").permitAll()
	             .antMatchers("/app/session.service.js").permitAll()
	             .antMatchers("/webjars/**").permitAll()
	             .antMatchers("/app/css/**").permitAll()
	             .antMatchers("/app/js/**").permitAll()
	             .antMatchers("/users/login").permitAll()
	             .antMatchers("/users/registration").permitAll()
	             .antMatchers("/logout").permitAll()
	             .antMatchers("logout").permitAll()
	             .anyRequest().authenticated()
	             .and().logout().logoutSuccessUrl("/").permitAll();
	        /*   .and()
             .formLogin()
             	.loginPage("/app/components/core/login.html")
             	.permitAll()*/
             	
             	
     }
	 
	 @Autowired
	 public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		 auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder());
	 }

}
