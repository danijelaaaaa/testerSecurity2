package tester.tester.service;

import tester.tester.model.User;

public interface UserService {
	
	User login(String username, String password);
	User registration(User u);
}
