package tester.tester.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import tester.tester.model.User;
import tester.tester.service.SecurityService;
import tester.tester.service.UserService;

@RestController
@RequestMapping(value = "/users")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@Autowired
	private SecurityService securityService;
	
	
	@RequestMapping(value="/login", method = RequestMethod.POST)
	public ResponseEntity<User> login(@RequestBody User u){
		
		//System.out.println(u.getUsername()+u.getPassword());
		//User user = new User();
		
	//	user = userService.login(u.getUsername(), u.getPassword());
		User user = userService.findByUsername(u.getUsername());
		
		//System.out.println(user.getUsername());
		securityService.autologin(u.getUsername(), u.getPassword());
		//securityService.autologin(user.getUsername(), BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()));
		user.setToken(user.generateToken());
	
		
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
	
	/*@RequestMapping(value="/logout",method = RequestMethod.GET)
	public ResponseEntity<String> logout(){
		
		
		return new ResponseEntity<String>(HttpStatus.OK);
	}*/
	
	@RequestMapping(value="/registration", method = RequestMethod.POST)
	public ResponseEntity<User> registration(@RequestBody User u){
		u.setRole("USER");
		User user = new User();
		user = userService.registration(u);
		securityService.autologin(u.getUsername(), u.getPassword());
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
	

}
