package tester.tester.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import tester.tester.model.Question;
import tester.tester.model.Test;
import tester.tester.service.TestService;

@RestController
@RequestMapping(value = "/tests")
public class TestController {

	@Autowired
	TestService testService;

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Test>> getTests() {
		List<Test> listOfTests = new ArrayList<Test>();
		listOfTests = testService.findAll();

		return new ResponseEntity<List<Test>>(listOfTests, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Test> addTest(@RequestBody Test t) {
		t.setCreateDate(new Date());
		t.setCreatedBy("Danijela");

		Test test = testService.addTest(t);

		return new ResponseEntity<Test>(test, HttpStatus.CREATED);
	}

	@RequestMapping(value = "/id/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<String> removeTest(@PathVariable Long id) {
		testService.removeTest(id);
		return new ResponseEntity<String>(HttpStatus.OK);

	}

}
