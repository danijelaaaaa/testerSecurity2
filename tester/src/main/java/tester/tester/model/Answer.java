package tester.tester.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "answer")
public class Answer {
	
	@Id
	@GeneratedValue
	@Column(name = "id")
	private Long id;
	
	
	@Column(name = "content", unique = false, nullable = false)
	private String content;
	
	
	@Column(name = "correct", unique = false, nullable = false)
	private Boolean correct;


	public String getContent() {
		return content;
	}


	public void setContent(String content) {
		this.content = content;
	}


	public Boolean getCorrect() {
		return correct;
	}


	public void setCorrect(Boolean correct) {
		this.correct = correct;
	}

	

	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public Answer() {
	}
	
	
	
	
	
	

}
