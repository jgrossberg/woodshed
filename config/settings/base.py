"""
Base settings to build other settings files upon
"""

import os
import environ

ROOT_DIR = (
    environ.Path(__file__) - 3
) # (woodshed/config/settings/base.py - 3 = woodshed/)
APPS_DIR = ROOT_DIR.path('woodshed')
env = environ.Env()

READ_DOT_ENV_FILE = env.bool('DJANGO_READ_DOT_ENV_FILE', default=False)
if READ_DOT_ENV_FILE:
    # OS environment variables take precedence over variables from .env
    env.read_env(str(ROOT_DIR.path('.env')))

##################################################
#                   General Settings             #
##################################################
DEBUG = env.bool('DJANGO_DEBUG', False)
TIME_ZONE = 'UTC'
LANGUAGE_CODE = 'en-us'
SITE_ID = 1
US_I18N = True
USE_L10N = True
USE_TZ = True
LOCALE_PATHS = [ROOT_DIR.path('locale')]


##################################################
#                Database Settings               #
##################################################
DATABASES = {  
    # 'default': env.db('DATABASE_UR', default='postgres://postgres')  
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'template1',
        'USER': 'jonah',
        'PASSWORD': 'temp',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
DATABASES['default']['ATOMIC_REQUESTS'] = True


##################################################
#                   URLs Settings                #
##################################################
ROOT_URLCONF = 'config.urls'
WSGI_APPLICATION = 'config.wsgi.application'


##################################################
#                   Apps Settings                #
##################################################
DJANGO_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.sites',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

THIRD_PARTY_APPS = [
    'rest_framework',
    'corsheaders'
]

LOCAL_APPS = [
    # 'woodshed.backend',
    'woodshed.api',
]

INSTALLED_APPS = DJANGO_APPS + THIRD_PARTY_APPS + LOCAL_APPS

##################################################
#                Migrations Settings             #
##################################################
# MIGRATION_MODULES = {'sites': 'woodshed.contrib.sites.migrations'}


##################################################
#            Authentication Settings             #
##################################################
# AUTHENTICATION_BACKENDS = [
#     'django.contrib.auth.backends.ModelBackend',
# ]
# AUTH_USER_MODEL = 'users.User'
# LOGIN_REDIRECT_URL = 'users:redirect'
# LOGIN_URL = 'account_login'


##################################################
#             Password Settings                  #
##################################################
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',},
]

##################################################
#             Middleware Settings                #
##################################################
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

##################################################
#                 Static Settings                #
##################################################
STATIC_ROOT = str(ROOT_DIR('staticfiles'))
STATIC_URL = '/static/'
STATICFILES_DIRS = [str(APPS_DIR.path('static'))]
STATICFILES_FINDERS = [
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
]

##################################################
#                 Media Settings                 #
##################################################
MEDIA_ROOT = str(APPS_DIR('media'))
MEDIA_URL = '/media/'


##################################################
#              Templates Settings                #
##################################################
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [str(APPS_DIR.path('templates'))],
        'APP_DIRS': True,
        'OPTIONS': {
            'debug': DEBUG,
            # 'loaders': [
            #     'django.templates.loaders.filesystem.Loader',
            #     'django.template.loaders.app_directories.Loader'
            # ]
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]


##################################################
#              Security Settings                 #
##################################################
SESSION_COOKIE_HTTPONLY = True
CSRF_COOKIE_HTTPONLY = True
SECURE_BROWSER_XSS_FILTER = True
# X_FRAME_OPTIONS = 'DENY'
X_FRAME_OPTIONS = 'ALLOW ALL'


##################################################
#                Custom Settings                 #
##################################################




# BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# SETTINGS_PATH = os.path.dirname(__file__)
# SECURITY WARNING: keep the secret key used in production secret!
# SECRET_KEY = 'w$%qs1=@i9v78jbx4b9ws!0b_8s0x3yl1tm=y%*=t0xqkgtgbs'
# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = True
ALLOWED_HOSTS = ['*']
CORS_ORIGIN_WHITELIST = (
        'localhost:3000/'
    )