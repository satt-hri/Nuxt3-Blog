CREATE TABLE blog(
	id int  NOT NULL auto_increment,
	title VARCHAR(255) not null,
	content text not null,
	created_date TIMESTAMP not null  DEFAULT CURRENT_TIMESTAMP,
	PRIMARY key(id)
)