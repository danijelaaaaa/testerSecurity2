package tester.tester.service;

import tester.tester.model.User;

public interface UserService {
	
	User login(String username, String password);
	User findByUsername(String username);
	User registration(User u);
	User findOne(Long id);
	
}
