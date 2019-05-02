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
	votes = models.IntegerField(default=0)

	def __str__(self):
		return self.title


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
	author = models.CharField(max_length=50)
	author_email = models.CharField(max_length=100)
	lesson = models.ForeignKey(Lesson,
		on_delete=models.CASCADE,
		null=True
	)
	content = models.TextField()
	added_on = models.DateTimeField(auto_now=True)
	votes = models.IntegerField(default=0)

	def __str__(self):
		return (str(self.lesson) + '-' + str(self.author))
