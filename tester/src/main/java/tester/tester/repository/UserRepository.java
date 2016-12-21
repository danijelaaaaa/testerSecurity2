package tester.tester.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import tester.tester.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
	User findByUsernameAndPassword(String username, String password);
	User findByUsername(String username);
}
