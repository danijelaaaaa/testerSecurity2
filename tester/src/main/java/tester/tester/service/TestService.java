package tester.tester.service;

import java.util.List;

import tester.tester.model.Test;

public interface TestService {
	
	List<Test> findAll();
	Test findOne(Long id);
	void removeTest(Long id);
	Test addTest(Test t);

}
