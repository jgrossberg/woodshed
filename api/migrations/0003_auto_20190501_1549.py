# Generated by Django 2.2 on 2019-05-01 15:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20190501_0451'),
    ]

    operations = [
        migrations.AddField(
            model_name='lesson',
            name='votes',
            field=models.IntegerField(default=0),
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('author', models.CharField(max_length=50)),
                ('email', models.CharField(max_length=100)),
                ('content', models.TextField()),
                ('added_on', models.DateTimeField(auto_now=True)),
                ('votes', models.IntegerField(default=0)),
                ('lesson', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api.Lesson')),
            ],
        ),
    ]
