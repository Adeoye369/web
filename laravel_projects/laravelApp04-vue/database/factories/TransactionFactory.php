<?php

namespace Database\Factories;

use App\Models\Transaction;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Transaction>
 */
class TransactionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'date' => fake()->date('d-m-y'), // d-m-y format - 01-06-25, D-M-Y format - 01-Jun-2025, Y-m-d format - 2025-06-01
            'category'=> fake()->randomElement(['expense', 'salary', 'revenue', 'bank charges', 'maintenance']),
            'description' =>  fake()->paragraph(),
            'amount' => fake()->numberBetween(100, 9_999_999)
        ];
    }
}
