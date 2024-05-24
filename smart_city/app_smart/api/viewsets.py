from django .contrib.auth.models import User
from rest_framework import generics, permissions
from app_smart.api import serializers
from ..models import Sensor
from rest_framework import viewsets
from app_smart.api.filters import SensorFilter
from django_filters.rest_framework import DjangoFilterBackend

class CreateUserAPIViewSet(generics.CreateAPIView):    
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    # permission_classes = [permissions.IsAdminUser] # só permite se estiver logado no admin
    
    def post(self, request, *args, **kwrags):
        return self.create(request, *args, **kwrags)
    
class SensorViewSet(viewsets.ModelViewSet):
    queryset = Sensor.objects.all()
    serializer_class = serializers.SensorSerializer
    # permissions_class = [permissions.IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_class = SensorFilter