from django.contrib.auth.models import User

from rest_framework import viewsets, generics

from .models import Log, Lesson, Comment
from .serializers import LogSerializer, LessonSerializer, CommentSerializer, UserSerializer

def home(request):
    return render(request, 'main/index.html')

from rest_framework import viewsets

class LessonViewSet(viewsets.ModelViewSet):
    serializer_class = LessonSerializer
    queryset = Lesson.objects.all()

class LogViewSet(viewsets.ModelViewSet):
    serializer_class = LogSerializer
    queryset = Log.objects.all()

class CommentViewSet(viewsets.ModelViewSet):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
