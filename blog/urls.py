from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from .views import (
    PostApiView,
    CreatePostApiView,
    DetailsPostApiView,
    UpdatePostApiView,
    DeletePostApiView
)
from django.views.generic import TemplateView


urlpatterns = [
    
    path('', TemplateView.as_view(template_name='index.html'), name='view-data'),
    path('api/create/', CreatePostApiView.as_view(), name="create-post"),
    path('api/post', PostApiView.as_view(), name="post-list"), 
    path('api/post/<int:id>', DetailsPostApiView.as_view(), name="post-details"),
    path('api/post/update/<int:id>', UpdatePostApiView.as_view(), name="post-update"),
    path('api/post/delete/<int:id>', DeletePostApiView.as_view(), name="post-delete"),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)