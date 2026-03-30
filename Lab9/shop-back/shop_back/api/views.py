from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Product, Category
from .serializers import CategorySerializer, ProductSerializer
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status



class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()

    serializer_class = CategorySerializer


    @action(detail=True, methods=['get'])
    def products(self, request, pk= None):
        products = Product.objects.filter(category_id=pk)
        data = ProductSerializer(products, many=True)
        return Response(data.data)


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer



