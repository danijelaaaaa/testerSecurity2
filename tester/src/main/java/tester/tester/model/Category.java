package tester.tester.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Pattern;

/**
 * Category model class.
 * 
 */
@Entity
@Table(name = "category")
public class Category{

	/**
	 * serialVersionUID
	 */
	private static final long serialVersionUID = 3537276468739169072L;
	
	@Id
	@GeneratedValue
	@Column(name = "id")
	private Long id;

	/**
	 * Name of the category
	 */
    @Column(name = "name", nullable = false, unique = false)
	private String name;

	/**
	 * @return name
	 */
	public String getName() {
		return name;
	}
	/**
	 * @param name
	 */
	public void setName(String name) {
		this.name = name;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	
	public Category(){
	}

	public Category(Long id, String name){
		this.id = id;
		this.name = name;
	}
	
	
	
	
	
}
