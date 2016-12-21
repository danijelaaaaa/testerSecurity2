package tester.tester.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tester.tester.model.Test;
import tester.tester.repository.TestRepository;
import tester.tester.service.TestService;

@Service
@Transactional
public class TestServiceImpl implements TestService{
	
	@Autowired
	TestRepository testRepository;

	@Override
	public List<Test> findAll() {
		return testRepository.findAll();
	}

	@Override
	public Test findOne(Long id) {
		return testRepository.findOne(id);
	}

	@Override
	public void removeTest(Long id) {
		testRepository.delete(id);
	}

	@Override
	public Test addTest(Test t) {
		return testRepository.save(t);
	}

}
