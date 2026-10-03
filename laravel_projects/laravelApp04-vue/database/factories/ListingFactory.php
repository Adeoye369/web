<?php

namespace Database\Factories;

use App\Models\Listing;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Listing>
 */
class ListingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'beds'          => fake()->numberBetween(1, 5),
            'baths'         => fake()->numberBetween(1, 3),
            'area'          => fake()->numberBetween(1000, 3000),
            'city'          => fake()->city(),
            'postal_code'   => fake()->postcode(),
            'street'        => fake()->streetName(),
            'street_no'     => fake()->buildingNumber(),
            'price'         => fake()->numberBetween(100_000, 5_000_000),

        ];
    }
}
