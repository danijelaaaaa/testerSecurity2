package tester.tester.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import tester.tester.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

}
