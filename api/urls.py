from django.urls import path, include
from rest_framework.routers import DefaultRouter

from api import views

router = DefaultRouter()
router.register(r'lessons', views.LessonViewSet)
router.register(r'logs', views.LogViewSet)
router.register(r'comments', views.CommentViewSet)


urlpatterns = [
    path('', include(router.urls)),
]
