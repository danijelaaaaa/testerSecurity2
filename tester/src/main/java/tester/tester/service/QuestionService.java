package tester.tester.service;

import java.util.List;

import tester.tester.model.Question;

public interface QuestionService {
	List<Question> findAll();
	Question addQuestion(Question question);
	Question findOne(Long id);
	void removeQuestion(Long id);

}
