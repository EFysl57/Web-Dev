from django.http import Http404
from rest_framework.views import APIView 
from rest_framework.response import Response
from ..models import Product
from ..serializers import ProductSerializer
from rest_framework import status


class ProductListAPIView(APIView): 

    def get(self, request, format=None):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)

        Response(serializer.data)


    def post(self, request, format=None):
        serialzer = ProductSerializer(data=request.data)
        if serialzer.is_valid():
            serialzer.save()
            return Response(serialzer.data, status=status.HTTP_201_CREATED)
        
        return Response(serialzer.errors, status=status.HTTP_400_BAD_REQUEST)
    



class ProductDetailView(APIView):

    def get_object(self, pk):
        try:
            return Product.objects.get(pk=pk)
        except Product.DoesNotExist:
            raise Http404



    def get(self, request, pk, format=None):
        product = self.get_object(pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data)
        


    def put(self, request, pk, format=None):
        product = self.get_object(pk)
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

    def delete(self, request, pk, format=None):
        product = self.get_object(pk)
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


