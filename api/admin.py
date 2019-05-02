from django.contrib import admin

from .models import Lesson, Log

# Register your models here.
admin.site.register(Lesson)
admin.site.register(Log)