<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
   public function up()
{
    Schema::table('tabel_product_category_sub', function (Blueprint $table) {
        $table->json('foto_product')->nullable()->after('description'); // atau after kolom lain
    });
}

public function down()
{
    Schema::table('tabel_product_category_sub', function (Blueprint $table) {
        $table->dropColumn('foto_product');
    });
}

};
