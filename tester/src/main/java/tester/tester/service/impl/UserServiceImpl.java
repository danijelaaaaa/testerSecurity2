package tester.tester.service.impl;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tester.tester.model.User;
import tester.tester.repository.UserRepository;
import tester.tester.service.UserService;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserRepository userRepository;

	@Override
	public User login(String username, String password) {
		
		return userRepository.findByUsernameAndPassword(username, password);
	}

	@Override
	public User registration(User u) {
		
		return userRepository.save(u);
	}
	


	

	
}
