from django.contrib.auth.models import User
from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from app_smart.models import Sensor

class UserSerializer(serializers.ModelSerializer):
    
    # write_only -> Defina como True para garantir que o campo possa ser usado ao atualizar ou criar uma instância, mas não seja incluído ao serializar a representação.
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)

    class Meta:
        model = User
        # dados que vão ser consumidos dentro da api
        fields = ['id', 'username', 'email', 'password']
    
    # se quiser fazer um consumo a senha não seria um campo elegivel 
    extra_kwargs = {'password': {'write_only': True}} # a senha só chega no banco, nunca será retornada
    
#permitindo a serializaçao do Sensor
class SensorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sensor
        fields = '__all__' #quando eu uso all eu permito o trafego de tds campos