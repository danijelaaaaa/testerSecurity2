package tester.tester.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tester.tester.model.Category;
import tester.tester.repository.CategoryRepository;
import tester.tester.service.CategoryService;

@Service
@Transactional
public class CategoryServiceImpl implements CategoryService {
	
	@Autowired
	CategoryRepository categoryRepository;

	@Override
	public List<Category> findAll() {
		return categoryRepository.findAll();
	}

	@Override
	public Category addCategory(Category category) {
		
		return categoryRepository.save(category);
	}

	@Override
	public Category findOne(Long id) {
		
		return categoryRepository.findOne(id);
	}

	@Override
	public void removeCategory(Long id) {
		
		 categoryRepository.delete(id);
	}


	

	
	

}
