package tester.tester.service;

import java.util.List;

import tester.tester.model.Category;



public interface CategoryService {
	
	List<Category> findAll();
	Category addCategory(Category category);
	Category findOne(Long id);
	void removeCategory(Long id);

}
