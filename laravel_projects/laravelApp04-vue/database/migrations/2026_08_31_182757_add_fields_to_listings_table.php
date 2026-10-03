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
        //   Schema::table('listings', function (Blueprint $table) {
        //     // Only add columns if they do not exist yet
        //     if (!Schema::hasColumn('listings', 'beds')) $table->unsignedTinyInteger('beds');
        //     if (!Schema::hasColumn('listings', 'baths')) $table->unsignedTinyInteger('baths');
        //     if (!Schema::hasColumn('listings', 'area')) $table->unsignedSmallInteger('area');
        //     if (!Schema::hasColumn('listings', 'city')) $table->tinyText('city');
        //     if (!Schema::hasColumn('listings', 'postal_code')) $table->tinyText('postal_code');
        //     if (!Schema::hasColumn('listings', 'street')) $table->tinyText('street');
        //     if (!Schema::hasColumn('listings', 'street_no')) $table->tinyText('street_no');
        //     if (!Schema::hasColumn('listings', 'price')) $table->unsignedInteger('price');
        // });



        Schema::table('listings', function (Blueprint $table) {

                    $columns = [
                        'beds'        => 'unsignedTinyInteger',
                        'baths'       => 'unsignedTinyInteger',
                        'area'        => 'unsignedSmallInteger',
                        'city'        => 'tinyText',
                        'postal_code' => 'tinyText',
                        'street'      => 'tinyText',
                        'street_no'   => 'tinyText',
                        'price'       => 'unsignedInteger',
                    ];

            foreach ($columns as $column => $type) {
                if (!Schema::hasColumn('listings', $column)) {
                    $table->$type($column);
                }
            };

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
                'beds', 'baths', 'area', 'city', 'postal_code', 'street', 'street_no', 'price'
            ],  Schema::getColumnListing('listings'));

            if (!empty($columnsToDrop)) $table->dropColumn($columnsToDrop);
            
        });
    }
};
