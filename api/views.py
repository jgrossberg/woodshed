from rest_framework import viewsets 

from .models import Log, Lesson, Comment
from .serializers import LogSerializer, LessonSerializer, CommentSerializer

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

