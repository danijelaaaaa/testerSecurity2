package tester.tester.controller;

import java.util.ArrayList;
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

import com.mysql.fabric.xmlrpc.base.Array;

import tester.tester.model.Category;

import tester.tester.service.CategoryService;


@RestController
@RequestMapping(value = "/categories")
public class CategoryController {
	@Autowired
	CategoryService categoryService;
	
	
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Category>> getCategories(){
		List<Category> listOfCategories = new ArrayList<Category>();
		listOfCategories = categoryService.findAll();
		
		return new ResponseEntity<List<Category>>(listOfCategories, HttpStatus.OK);
	}
	
	@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Category> addCategory(@RequestBody Category c){
		Category category = categoryService.addCategory(c);
		
		return new ResponseEntity<Category>(category, HttpStatus.CREATED);
	}
	
	@RequestMapping(value="/id/{id}", method = RequestMethod.GET)
	public ResponseEntity<Category> getCategory(@PathVariable Long id){
		Category category = categoryService.findOne(id);
		return new ResponseEntity<Category>(category, HttpStatus.OK);
		
	}
	
	@RequestMapping(method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE, produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Category> editCategory(@RequestBody Category c){
		Category category = categoryService.addCategory(c);
		return new ResponseEntity<Category>(category, HttpStatus.OK);
		
	}
	
	@RequestMapping(value="/id/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<String> removeCategory(@PathVariable Long id){
		categoryService.removeCategory(id);
		return new ResponseEntity<String>(HttpStatus.OK);
		
	}
	

	
	

}
