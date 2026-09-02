<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
          Schema::table('listings', function (Blueprint $table) {
            // Only add columns if they do not exist yet
            if (!Schema::hasColumn('listings', 'beds')) {
                $table->unsignedTinyInteger('beds');
            }
            if (!Schema::hasColumn('listings', 'baths')) {
                $table->unsignedTinyInteger('baths');
            }
            if (!Schema::hasColumn('listings', 'area')) {
                $table->unsignedSmallInteger('area');
            }
            if (!Schema::hasColumn('listings', 'city')) {
                $table->tinyText('city');
            }
            if (!Schema::hasColumn('listings', 'postal_code')) {
                $table->tinyText('postal_code');
            }
            if (!Schema::hasColumn('listings', 'street')) {
                $table->tinyText('street');
            }
            if (!Schema::hasColumn('listings', 'street_no')) {
                $table->tinyText('street_no');
            }
            if (!Schema::hasColumn('listings', 'price')) {
                $table->unsignedInteger('price');
            }
        });
    }
    

  /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('listings', function (Blueprint $table) {
            // Dynamically drop only the columns that actually exist in the table
            $columnsToDrop = array_intersect([
                'beds', 'baths', 'area', 'city', 
                'postal_code', 'street', 'street_no', 'price'
            ], Schema::getColumnListing('listings'));

            if (!empty($columnsToDrop)) {
                $table->dropColumn($columnsToDrop);
            }
        });
    }
};
