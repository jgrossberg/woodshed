from django.urls import path, re_path, include
from rest_framework.routers import DefaultRouter

from api import views

router = DefaultRouter()
router.register(r'lessons', views.LessonViewSet)
router.register(r'logs', views.LogViewSet)
router.register(r'comments', views.CommentViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

urlpatterns += [    
	re_path(r'^users/$', views.UserList.as_view()),
	re_path(r'^users/(?P<pk>[0-9])/$', views.UserList.as_view()),
    
]