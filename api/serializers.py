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

		fields = (
			'id',
			'created_by',
			'created_on',
			'title',
			'owner',
			'content',
            'votes',
			'num_logs',
			'num_comments',
			'author_name',
			'comments'
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
			'author_name',
			'author_email',
            'lesson',
			'content',
			'added_on',
			'votes'
		)

