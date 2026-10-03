<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'product_name' => fake()->word(),
            'product_image' => fake()->imageUrl(),
            'product_category' => fake()->randomElement(['Brand New', 'Used', 'Refurbished', 'Open Box', 'Ancient']),
            'product_discription' => fake()->paragraph(),
            'product_price' => fake()->numberBetween(10, 1000000)
        ];
    }
}
