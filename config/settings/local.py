from .base import *  # noqa
from .base import env


##################################################
#                   General Settings             #
##################################################
DEBUG = True
SECRET_KEY = env(
    'DJANGO_SECRET_KEY',
    default = 'w$%qs1=@i9v78jbx4b9ws!0b_8s0x3yl1tm=y%*=t0xqkgtgbs'
)
ALLOWED_HOSTS = ['localhost', '0.0.0.0', '127.0.0.1',]


##################################################
#                  Cache Settings                #
##################################################
CACHES = {  
    'default': {
        'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
        'LOCATION': '',
    }
}


##################################################
#              Templates Settings                #
##################################################
# TEMPLATES[0]['OPTIONS']['debug'] = DEBUG


##################################################
#              Django Debug Toolbar              #
##################################################


