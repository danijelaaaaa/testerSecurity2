package tester.tester.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import tester.tester.model.Question;

public interface QuestionRepository extends JpaRepository<Question, Long>{

}
