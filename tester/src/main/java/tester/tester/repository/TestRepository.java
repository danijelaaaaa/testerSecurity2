package tester.tester.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import tester.tester.model.Test;

public interface TestRepository extends JpaRepository<Test, Long>{

}
