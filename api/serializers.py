from django.contrib.auth.models import User

from rest_framework import serializers

from .models import Log, Lesson, Comment

class UserSerializer(serializers.Serializer):
    email = serializers.EmailField()
    username = serializers.CharField(max_length=100)


class LessonSerializer(serializers.ModelSerializer):
	owner = UserSerializer(many=False, read_only=True)
	class Meta:
		model = Lesson
		# comments = Lesson.get_comments()
		# print(comments)
		fields = (
			'id',
			'created_by',
			'created_on',
			'title',
			'owner',
			'content',
            'votes',
		)
		# depth = 1



class LogSerializer(serializers.ModelSerializer):
	class Meta:
		model = Log
		fields = (
			'id',
			'lesson',
			'owner',
			'added_on',
			'completed'
		)

class CommentSerializer(serializers.ModelSerializer):
	class Meta:
		model = Comment
		fields = (
			'id',
			'author',
			'author_email',
            'lesson',
			'content',
			'added_on',
			'votes'
		)

