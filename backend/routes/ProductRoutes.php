<?php


require_once __DIR__ . "/../services/ProductService.php";

/**
 * @OA\Get(
 *     path="/products",
 *     summary="Get all products",
 *     description="Retrieve all products with their category and product details",
 *     tags={"Products"},
 *     @OA\Response(
 *         response=200,
 *         description="Successful response",
 *         @OA\JsonContent(
 *             type="array",
 *             items=@OA\Items(
 *                 type="object",
 *                 properties={
 *                     @OA\Property(property="id", type="integer", example=1),
 *                     @OA\Property(property="name", type="string", example="LeBron Lakers Statement Jersey"),
 *                     @OA\Property(property="category_id", type="integer", example=1),
 *                     @OA\Property(property="price", type="number", format="float", example=120),
 *                     @OA\Property(property="category_name", type="string", example="Jerseys"),
 *                     @OA\Property(property="product_id", type="integer", example=1),
 *                     @OA\Property(property="sizes", type="string", example="M,L,XL"),
 *                     @OA\Property(property="models", type="integer", example=1),
 *                     @OA\Property(property="colors", type="string", example="Purple/Gold")
 *                 }
 *             )
 *         )
 *     )
 * )
 */
Flight::route('GET /products', function () {
    $service = new ProductService();

    Flight::json($service->getProductDetails());
});



/**
 * @OA\Get(
 *     path="/products/product/{id}",
 *     summary="Get product by ID",
 *     description="Retrieve a single product with its category and product details",
 *     tags={"Products"},
 *     @OA\Parameter(
 *         name="id",
 *         in="path",
 *         required=true,
 *         description="Product ID",
 *         @OA\Schema(type="integer")
 *     ),
 *     @OA\Response(
 *         response=200,
 *         description="Successful response",
 *         @OA\JsonContent(
 *             type="object",
 *             properties={
 *                 @OA\Property(property="id", type="integer", example=1),
 *                 @OA\Property(property="name", type="string", example="LeBron Lakers Statement Jersey"),
 *                 @OA\Property(property="category_id", type="integer", example=1),
 *                 @OA\Property(property="price", type="number", format="float", example=120),
 *                 @OA\Property(property="category_name", type="string", example="Jerseys"),
 *                 @OA\Property(property="product_id", type="integer", example=1),
 *                 @OA\Property(property="sizes", type="string", example="M,L,XL"),
 *                 @OA\Property(property="models", type="integer", example=1),
 *                 @OA\Property(property="colors", type="string", example="Purple/Gold")
 *             }
 *         )
 *     )
 * )
 */
Flight::route('GET /products/product/@id', function ($id) {
    $service = new ProductService();

    Flight::json($service->getProductById($id));
});
