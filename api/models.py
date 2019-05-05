from django.db import models
from django.contrib.auth.models import User


class Lesson(models.Model):
	created_by = models.ForeignKey(User, 
		related_name='owner',
		on_delete=models.CASCADE,
		default=1
	)
	created_on = models.DateTimeField(auto_now=True)
	title = models.CharField(max_length = 150)
	content = models.TextField()
	stars = models.ManyToManyField(User)

	def __str__(self):
		return self.title

	def num_logs(self):
		results = Log.objects.filter(lesson = self.id)
		return len(results)

	def num_stars(self):
		return self.stars.count()

	def num_comments(self):
		results = Comment.objects.filter(lesson = self.id)
		return len(results)

	def author_name(self):
		author = User.objects.filter(id = self.created_by.id)
		return author[0].first_name + ' ' + author[0].last_name		
	 
	def comments(self):
		query = list(Comment.objects.filter(lesson=self.id))
		comment_list = []
		for c in query:
			author = c.author_name
			content = c.content
			comment = {
				'author_name' : author, 'content' : content
			}
			comment_list.append(comment)

		return comment_list


class Log(models.Model):
	owner = models.ForeignKey(User,
		on_delete=models.CASCADE,
		default = 1
	)
	lesson = models.ForeignKey(Lesson,
		on_delete=models.CASCADE,
		null=True
	)
	added_on = models.DateTimeField(auto_now=True)
	completed = models.BooleanField(default=False)

	def __str__(self):
		return (str(self.owner) + '-' + str(self.id))

class Comment(models.Model):
	author_name = models.CharField(max_length=50)
	author_email = models.CharField(max_length=100)
	lesson = models.ForeignKey(Lesson,
		on_delete=models.CASCADE,
		null=True
	)
	content = models.TextField()
	added_on = models.DateTimeField(auto_now=True)
	votes = models.IntegerField(default=0)

	def __str__(self):
		return (str(self.lesson) + '-' + str(self.author_name))
