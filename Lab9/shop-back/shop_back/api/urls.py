from django.urls import path
from rest_framework.routers import DefaultRouter
from . import views
from .views import CategoryViewSet, ProductViewSet


router = DefaultRouter()
router.register('categories', CategoryViewSet)
router.register('products', ProductViewSet)
urlpatterns = router.urls


# urlpatterns = [
#     path('products/', views.products_list),
#     path('products/<int:id>/', views.product_detail),
#     path('categories/', views.categories_list),
#     path('categories/<int:id>/', views.category_detail),
#     path('categories/<int:id>/products/', views.category_products)    
# ]