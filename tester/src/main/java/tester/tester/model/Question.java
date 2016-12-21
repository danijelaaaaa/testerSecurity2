package tester.tester.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="question")
public class Question {
	
	@Id
	@GeneratedValue
	@Column(name = "id")
	private Long id;

	/**
	 * Name of the question
	 */
    @Column(name = "content", nullable = false, unique = false)
	private String content;
    
    @ManyToOne
    @JoinColumn(name = "category", referencedColumnName = "id")
	private Category category;
    
    
	@OneToMany(cascade = CascadeType.ALL , fetch = FetchType.EAGER, orphanRemoval = true)
    @JoinColumn(name = "question", referencedColumnName = "id", nullable = true)
	private List<Answer> answers;
    

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	
	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public List<Answer> getAnswers() {
		return answers;
	}

	public void setAnswers(List<Answer> answers) {
		this.answers = answers;
	}

	public Question() {
	}


    
    
}
