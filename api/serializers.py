from django.contrib.auth.models import User

from rest_framework import serializers

from .models import Log, Lesson, Comment

class LessonSerializer(serializers.ModelSerializer):
	class Meta:
		model = Lesson
		fields = (
			'id',
			'created_by',
			'created_on',
			'title',
			'content',
            'votes'
		)


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
            'email',
            'lesson',
			'content',
			'added_on',
			'votes'
		)

