<?php

require_once __DIR__ . "/../services/CategoryService.php";

/**
 * @OA\Get(
 *     path="/category/{categoryName}",
 *     summary="Get products by category",
 *     description="Retrieve all products in a specific category",
 *     tags={"Categories"},
 *     @OA\Parameter(
 *         name="categoryName",
 *         in="path",
 *         required=true,
 *         description="Category name",
 *         @OA\Schema(type="string")
 *     ),
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
Flight::route('GET /category/@categoryName', function ($categoryname) {
    $service = new CategoryService();

    Flight::json($service->getByCategory($categoryname));
});
