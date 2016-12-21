package tester.tester.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tester.tester.model.Question;
import tester.tester.repository.QuestionRepository;
import tester.tester.service.QuestionService;

@Service
@Transactional
public class QuestionServiceImpl implements QuestionService{
	
	@Autowired
	QuestionRepository questionRepository;

	@Override
	public List<Question> findAll() {
		
		return questionRepository.findAll();
	}

	@Override
	public Question addQuestion(Question question) {
		
		return questionRepository.save(question);
	}

	@Override
	public Question findOne(Long id) {
		
		return questionRepository.findOne(id);
	}

	@Override
	public void removeQuestion(Long id) {
		
		questionRepository.delete(id);
		
	}
	
	

}
