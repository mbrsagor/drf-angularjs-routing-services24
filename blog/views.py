from django.shortcuts import get_object_or_404
from .models import Post
from .serializers import PostSerializer

from rest_framework.permissions import (
    IsAuthenticated
)

from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
    RetrieveAPIView,
    RetrieveUpdateAPIView,
    DestroyAPIView
)
from rest_framework.response import Response
from rest_framework import status


class PostApiView(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer



class CreatePostApiView(CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_class = [IsAuthenticated]



class DetailsPostApiView(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field     = 'id'


class UpdatePostApiView(RetrieveUpdateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field     = 'id'



class DeletePostApiView(DestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_class = [IsAuthenticated]
    lookup_field     = 'id'

    def delete(self, request, id):
        obj = get_object_or_404(Post, id=id)
        obj.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)