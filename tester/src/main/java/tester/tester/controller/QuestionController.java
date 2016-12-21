package tester.tester.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import tester.tester.model.Category;
import tester.tester.model.Question;
import tester.tester.service.QuestionService;

@RestController
@RequestMapping(value = "/questions")
public class QuestionController {
	
	@Autowired
	QuestionService questionService;
	
	@Autowired
	HttpSession httpSession;
	
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Question>> getQuestions(){
		List<Question> listOfQuestion = new ArrayList<Question>();
		listOfQuestion = questionService.findAll();
		
		return new ResponseEntity<List<Question>>(listOfQuestion, HttpStatus.OK);
	}
	
	@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Question> addQuestion(@RequestBody Question q){
		Question question = questionService.addQuestion(q);
		
		return new ResponseEntity<Question>(question, HttpStatus.CREATED);
	}
	
	@RequestMapping(value="/id/{id}", method = RequestMethod.GET)
	public ResponseEntity<Question> getQuestion(@PathVariable Long id){
		Question question = questionService.findOne(id);
		return new ResponseEntity<Question>(question, HttpStatus.OK);
		
	}
	
	@RequestMapping(value="/id/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<String> removeQuestion(@PathVariable Long id){
		questionService.removeQuestion(id);
		return new ResponseEntity<String>(HttpStatus.OK);
		
	}

}
